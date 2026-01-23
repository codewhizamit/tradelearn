export default function Mentor() {
  return (
    <section id="mentor" className="bg-black text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Mentor Card */}
          <div className="flex justify-center">
            <div className="relative rounded-3xl border border-zinc-800 bg-linear-to-b from-zinc-900 to-zinc-950 p-6 w-full max-w-sm">

              {/* Experience badge */}
              <div className="absolute -top-4 left-6 rounded-full bg-green-500 px-4 py-1 text-xs font-semibold text-black">
                7+ Years Experience
              </div>

              {/* Image placeholder */}
              <div className="h-72 w-full rounded-2xl bg-zinc-800 flex items-center justify-center text-gray-400 text-sm">
                Mentor Photo
              </div>

              {/* Name */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold">Professional Trader</h3>
                <p className="text-sm text-gray-400">
                  Equity • Index • Risk Management
                </p>
              </div>

            </div>
          </div>

          {/* Mentor Content */}
          <div>

            <h2 className="text-2xl md:text-4xl font-bold">
              Meet Your <span className="text-green-500">Mentor</span>
            </h2>

            <p className="mt-5 text-gray-400 text-sm md:text-base max-w-xl">
              Learn trading from a professional mentor with real market
              experience. The focus is on discipline, risk management,
              and consistency — not shortcuts or false promises.
            </p>

            {/* Points */}
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>7+ years of real trading experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>Live market mentorship & guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>Risk-managed & practical trading strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>Beginner-friendly & structured teaching</span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={() =>
                  document
                    .getElementById("register-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-black
                  transition-all hover:bg-green-600 hover:-translate-y-px
                  active:scale-[0.97]
                "
              >
                Learn From Mentor
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
