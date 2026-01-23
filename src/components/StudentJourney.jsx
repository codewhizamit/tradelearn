export default function StudentJourney() {
  const steps = [
    {
      step: "01",
      title: "Register",
      desc: "Fill the bootcamp registration form and secure your seat.",
    },
    {
      step: "02",
      title: "Learn Basics",
      desc: "Understand market fundamentals, charts, and risk management.",
    },
    {
      step: "03",
      title: "Live Trading",
      desc: "Trade live with mentor guidance and real-time market analysis.",
    },
    {
      step: "04",
      title: "Grow Consistently",
      desc: "Build discipline, confidence, and long-term trading skills.",
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold">
            Your <span className="text-green-500">Trading Journey</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Step-by-step process to become a confident trader
          </p>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-zinc-800" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {steps.map((item, index) => (
              <div key={index} className="relative">

                {/* Dot */}
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400 font-semibold">
                  {item.step}
                </div>

                {/* Card */}
                <div
                  className="
                    rounded-2xl
                    border border-zinc-800
                    bg-linear-to-b from-zinc-900 to-zinc-950
                    p-6
                    text-center
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-green-500/40
                  "
                >
                  <h3 className="mb-3 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
