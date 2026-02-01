import { useEffect, useState } from "react";

export default function LiveMarket() {
  const [marketData, setMarketData] = useState([]);

  const symbols = [
    { label: "RELIANCE", symbol: "RELIANCE.NS" },
    { label: "TCS", symbol: "TCS.NS" },
    { label: "INFY", symbol: "INFY.NS" },
    { label: "HDFC BANK", symbol: "HDFCBANK.NS" },
    { label: "ICICI BANK", symbol: "ICICIBANK.NS" },
    { label: "SBIN", symbol: "SBIN.NS" },
  ];

  useEffect(() => {
    let mounted = true;

    const fetchMarketData = async () => {
      try {
        const symbolsQuery = symbols.map(s => s.symbol).join(",");

        const res = await fetch(
          `https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote?ticker=${symbolsQuery}&type=STOCK`,
          {
            headers: {
              "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY_HERE",
              "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
            },
          }
        );

        const data = await res.json();

        if (!mounted || !data.body) return;

        const formatted = data.body.map((item, index) => ({
          symbol: symbols[index].label,
          price: item.regularMarketPrice?.toLocaleString("en-IN") || "--",
          change: item.regularMarketChangePercent
            ? `${item.regularMarketChangePercent.toFixed(2)}%`
            : "0.00%",
          up: item.regularMarketChangePercent >= 0,
        }));

        setMarketData(formatted);
      } catch (err) {
        console.error("Market fetch failed", err);
      }
    };

    fetchMarketData();
    const interval = setInterval(fetchMarketData, 30000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="market" className="bg-black text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Live Market <span className="text-green-500">Movement</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-black to-transparent z-10" />

          <div className="flex animate-ticker gap-10 px-6 py-4 text-sm font-medium">
            {[...marketData, ...marketData].map((item, index) => (
              <div key={index} className="flex items-center gap-3 whitespace-nowrap">
                <span className="text-gray-300">{item.symbol}</span>
                <span className="text-white">{item.price}</span>
                <span className={item.up ? "text-green-400" : "text-red-400"}>
                  {item.up ? "▲" : "▼"} {item.change}
                </span>
                <span className="text-zinc-700">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-ticker {
            animation: ticker 25s linear infinite;
          }
          @keyframes ticker {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}
