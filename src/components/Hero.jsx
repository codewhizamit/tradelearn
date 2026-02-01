export default function Hero() {
  return (
    <section id="home" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center gap-6">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Learn Options Trading <br />
            <span className="text-green-500">
              With Real Market Guidance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 max-w-xl text-sm md:text-base">
            Learn options trading with expert mentorship, live market execution,
            and proven strategies built for real traders.
          </p>

          {/* Buttons (WORKING) */}
          <div className="flex gap-4 mt-4 flex-wrap justify-center">

            {/* Join Bootcamp */}
            <button
              onClick={() =>
                document
                  .getElementById("register-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                bg-green-500 text-black
                px-7 py-3
                rounded-lg
                text-sm font-semibold
                transition-all duration-200
                hover:bg-green-600
                hover:-translate-y-px
                hover:shadow-[0_8px_24px_rgba(34,197,94,0.25)]
                active:scale-[0.98]
              "
            >
              Join Trading Bootcamp
            </button>

            {/* Know Mentor */}
            <button
              onClick={() =>
                document
                  .getElementById("mentor")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                border border-zinc-700
                px-7 py-3
                rounded-lg
                text-sm
                transition-all duration-200
                hover:border-green-500
                hover:text-green-400
                hover:-translate-y-px
                active:scale-[0.98]
              "
            >
              Know Your Mentor
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
