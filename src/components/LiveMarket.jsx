export default function LiveMarket() {
  const marketData = [
    { symbol: "NIFTY 50", price: "22,480", change: "+0.65%", up: true },
    { symbol: "BANK NIFTY", price: "48,120", change: "-0.42%", up: false },
    { symbol: "RELIANCE", price: "2,845", change: "+1.10%", up: true },
    { symbol: "TCS", price: "3,965", change: "+0.28%", up: true },
    { symbol: "INFY", price: "1,498", change: "-0.15%", up: false },
    { symbol: "HDFC BANK", price: "1,612", change: "+0.44%", up: true },
    { symbol: "ICICI BANK", price: "1,089", change: "+0.31%", up: true },
    { symbol: "SBIN", price: "742", change: "-0.20%", up: false },
  ];

  return (
    <section id="market" className="bg-black text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Live Market <span className="text-green-500">Movement</span>
          </h2>
          <p className="mt-2 text-gray-400 text-sm">
          </p>
        </div>

        {/* Ticker Container */}
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-black to-transparent z-10" />

          {/* Sliding track */}
          <div className="flex animate-ticker gap-10 px-6 py-4 text-sm font-medium">
            {[...marketData, ...marketData].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <span className="text-gray-300">{item.symbol}</span>
                <span className="text-white">{item.price}</span>
                <span
                  className={`${
                    item.up ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {item.up ? "▲" : "▼"} {item.change}
                </span>
                <span className="text-zinc-700">|</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          .animate-ticker {
            animation: ticker 25s linear infinite;
          }
          @keyframes ticker {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}
