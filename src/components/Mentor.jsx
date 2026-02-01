import mentorPhoto from "../assets/shubham.jpeg"; // replace image here if needed

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
                6+ Years Experience
              </div>

              {/* Mentor Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-800">
                <img
                  src={mentorPhoto}
                  alt="Shubham Kumar - Options Trading Mentor"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Name & Role */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold">Shubham Kumar</h3>
                <p className="text-sm text-gray-400">
                  Options Trader • Equity • Index • Risk Management
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
              Learn trading from a full-time options trader with real Indian market
              experience. This mentorship is built for traders who want
              <span className="text-white"> clarity, discipline, and long-term consistency</span> —
              not shortcuts, tips, or gambling-based trading.
            </p>

            {/* Core Points */}
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>6+ years of real-market trading experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>Live market mentorship with real-time execution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>Risk-managed strategies focused on capital protection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <span>Clear, beginner-friendly & structured teaching approach</span>
              </li>
            </ul>

            {/* Added Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">
                What Makes This Mentorship Different
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>• Live market learning — not recorded theory</li>
                <li>• Strict focus on risk management before profits</li>
                <li>• Clear rules & repeatable trading systems</li>
                <li>• Built for consistency, not one-time lucky trades</li>
                <li>• Designed to turn traders into professionals, not gamblers</li>
              </ul>
            </div>

            {/* Trust Line */}
            <p className="mt-6 text-xs text-gray-500 max-w-xl">
              This program does not promise daily profits. It teaches disciplined execution,
              risk control, and consistency in real market conditions.
            </p>

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
                Join Live Trading Bootcamp
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
