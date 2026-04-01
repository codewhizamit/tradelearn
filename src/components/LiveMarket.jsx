import { useEffect, useState, useRef, useCallback } from "react";

const API_KEY = "c1e1d1aca4b0472d838e4b0354996154";

// ─────────────────────────────────────────────────────────────
// ONLY symbols confirmed free on Twelve Data Basic plan:
//   • US stocks (NASDAQ/NYSE) — real-time ✓
//   • Forex pairs             — real-time ✓
//   • Crypto pairs            — real-time ✓
// Max 8 symbols per batch request (= 8 credits, fits 8/min limit)
// ─────────────────────────────────────────────────────────────
const SYMBOLS = [
  // Batch 0
  [
    { key: "AAPL", label: "APPLE", type: "stock" },
    { key: "MSFT", label: "MICROSOFT", type: "stock" },
    { key: "AMZN", label: "AMAZON", type: "stock" },
    { key: "NVDA", label: "NVIDIA", type: "stock" },
    { key: "META", label: "META", type: "stock" },
    { key: "NFLX", label: "NETFLIX", type: "stock" },
    { key: "JPM", label: "JPMORGAN", type: "stock" },
    { key: "V", label: "VISA", type: "stock" },
  ],
  // Batch 1
  [
    { key: "TSLA", label: "TESLA", type: "stock" },
    { key: "WMT", label: "WALMART", type: "stock" },
    { key: "JNJ", label: "JOHNSON", type: "stock" },
    { key: "GOOGL", label: "GOOGLE", type: "stock" },
    { key: "EUR/USD", label: "EUR/USD", type: "forex" },
    { key: "GBP/USD", label: "GBP/USD", type: "forex" },
    { key: "BTC/USD", label: "BTC/USD", type: "crypto" },
    { key: "ETH/USD", label: "ETH/USD", type: "crypto" },
  ]
];

const FLAT_SYMBOLS = SYMBOLS.flat();

// 15 min refresh → 96/day × 8 credits = 768 credits/day (under 800 limit)
// The API is batched to only cost 8 credits per update cycle.
const REFRESH_INTERVAL = 15 * 60 * 1000;
const CACHE_KEY = "liveMarketData";

const FALLBACK = FLAT_SYMBOLS.map((s) => ({
  symbol: s.label,
  price: "—",
  change: "—",
  up: true,
  type: s.type,
}));

function formatPrice(price, type) {
  const num = parseFloat(price);
  if (isNaN(num)) return "—";
  if (type === "forex") {
    return num.toFixed(4);
  }
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function parseQuote(quote, label, type) {
  if (!quote || quote.status === "error") return null;

  // quote endpoint returns: close, change, percent_change
  const close = quote.close ?? quote.price;
  if (!close) return null;

  const c = parseFloat(quote.change ?? 0);
  const p = parseFloat(quote.percent_change ?? 0);

  return {
    symbol: label,
    price: formatPrice(close, type),
    change: `${c >= 0 ? "+" : ""}${p.toFixed(2)}%`,
    up: c >= 0,
    type,
  };
}

export default function LiveMarket() {
  const [marketData, setMarketData] = useState(FALLBACK);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [status, setStatus] = useState("loading");
  const isFetching = useRef(false);
  const batchIndex = useRef(0);

  // Initial load from cache to prevent flashing "loading..." on fast reloads
  useEffect(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // Merge missing fallback symbols just in case
        const merged = FALLBACK.map(fItem => {
          const cItem = data.find(c => c.symbol === fItem.symbol);
          return cItem && cItem.price !== "—" ? cItem : fItem;
        });
        setMarketData(merged);
        setLastUpdated(new Date(timestamp));
        setStatus((prev) => (prev === "loading" ? "idle" : prev));
      }
    } catch (e) {
      console.warn("Failed to load market cache", e);
    }
  }, []);

  const refreshBatch = useCallback(async () => {
    if (isFetching.current) return;

    // Check tab visibility. Don't waste limit when user isn't looking.
    if (document.hidden) {
      console.log("Tab inactive. Skipping API fetch to save credits.");
      return;
    }

    isFetching.current = true;
    setStatus("loading");

    try {
      const batch = SYMBOLS[batchIndex.current];
      const symbolsParam = batch.map((s) => s.key).join(",");
      const url = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbolsParam)}&apikey=${API_KEY}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      setMarketData((prev) => {
        const newMarketData = [...prev];

        batch.forEach((item) => {
          const quote = data[item.key] ?? (data.symbol === item.key ? data : null);
          const parsed = parseQuote(quote, item.label, item.type);
          if (parsed) {
            const index = newMarketData.findIndex(m => m.symbol === item.label);
            if (index !== -1) {
              newMarketData[index] = parsed;
            }
          }
        });

        // Save new market array to local storage
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data: newMarketData,
            timestamp: Date.now()
          }));
        } catch (e) {
          console.warn("Failed to save market cache", e);
        }

        return newMarketData;
      });

      setLastUpdated(new Date());
      setStatus("idle");

      // Cycle to the next batch for the next run
      batchIndex.current = (batchIndex.current + 1) % SYMBOLS.length;
    } catch (err) {
      console.error("Fetch error:", err);
      // Fallback gracefully without throwing
      setStatus("error");
    } finally {
      isFetching.current = false;
    }
  }, []);

  useEffect(() => {
    // Determine if we need to fetch immediately based on cache age
    let shouldFetchNow = true;
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { timestamp } = JSON.parse(cached);
        const ageMs = Date.now() - timestamp;
        // If data is newer than half the interval, don't auto-fetch immediately on mount
        if (ageMs < (REFRESH_INTERVAL / 2)) {
          shouldFetchNow = false;
        }
      }
    } catch (e) { }

    if (shouldFetchNow) {
      refreshBatch();
    }

    const id = setInterval(refreshBatch, REFRESH_INTERVAL);

    const handleVisibilityChange = () => {
      // Resume or check if we missed a cycle while hidden
      if (!document.hidden) {
        try {
          const cached = localStorage.getItem(CACHE_KEY);
          if (cached) {
            const { timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp >= REFRESH_INTERVAL) {
              refreshBatch();
            }
          } else {
            refreshBatch();
          }
        } catch (e) { }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [refreshBatch]);

  const timeString = lastUpdated?.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const typeTag = (type) => {
    if (type === "forex") return <span style={{ fontSize: "9px", padding: "1px 5px", borderRadius: "4px", background: "#1e3a5f", color: "#60a5fa", marginRight: "4px", fontWeight: 600, letterSpacing: "0.5px" }}>FX</span>;
    if (type === "crypto") return <span style={{ fontSize: "9px", padding: "1px 5px", borderRadius: "4px", background: "#1a3a2a", color: "#34d399", marginRight: "4px", fontWeight: 600, letterSpacing: "0.5px" }}>CRYPTO</span>;
    return null;
  };

  return (
    <section id="market" className="bg-black text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Live Market <span className="text-green-500">Movement</span>
          </h2>
          <p className="mt-2 text-sm min-h-[1.25rem]">
            {status === "loading" && (
              <span className="text-yellow-400">⟳ Fetching live prices…</span>
            )}
            {status === "error" && (
              <span className="text-red-400">⚠ Could not refresh — showing last known prices</span>
            )}
            {status === "idle" && timeString && (
              <span className="text-gray-400" title="Updates periodically in background to save api usage.">
                Live Data · Updated {timeString}
              </span>
            )}
          </p>
        </div>

        {/* Ticker Container */}
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex animate-ticker gap-10 px-6 py-4 text-sm font-medium">
            {[...marketData, ...marketData].map((item, index) => (
              <div key={index} className="flex items-center gap-3 whitespace-nowrap">
                {typeTag(item.type)}
                <span className="text-gray-300">{item.symbol}</span>
                <span className="text-white font-semibold">
                  {item.price === "—"
                    ? <span className="text-zinc-600 text-xs">loading…</span>
                    : item.price
                  }
                </span>
                <span className={item.change === "—" ? "text-zinc-600" : item.up ? "text-green-400" : "text-red-400"}>
                  {item.change !== "—" && (item.up ? "▲" : "▼")} {item.change}
                </span>
                <span className="text-zinc-700">|</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">

        </p>
      </div>

      <style>{`
        .animate-ticker { animation: ticker 30s linear infinite; }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}