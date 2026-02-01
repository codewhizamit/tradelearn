export default function CTA() {
  return (
    <section className="relative bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Glow background */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="h-64 w-3/4 rounded-full bg-green-500/20 blur-[120px]" />
        </div>

        {/* CTA Card */}
        <div className="
          rounded-3xl
          border border-zinc-800
          bg-linear-to-b from-zinc-900 to-zinc-950
          px-6 py-14 md:px-16
          text-center
          shadow-[0_30px_80px_rgba(0,0,0,0.8)]
        ">

          {/* Badge */}
          <span className="inline-block mb-4 rounded-full bg-green-500/10 px-4 py-1 text-xs font-semibold text-green-400">
            Early Access • Limited Time
          </span>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Ready to Start Your{" "}
            <span className="text-green-500">Trading Journey?</span>
          </h2>

          {/* Text */}
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Join our mentor-led trading bootcamp and get{" "}
            <span className="text-white">early access</span> to professional trading education.
            For a limited time, this program is being offered to selected participants
            to build strong trading foundations with real market guidance, discipline,
            and risk management.
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("register-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group relative overflow-hidden
                rounded-xl bg-green-500 px-8 py-4
                text-sm font-semibold text-black
                transition-all duration-300
                hover:bg-green-600
                hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]
                active:scale-[0.97]
              "
            >
              <span className="relative z-10">Apply for Early Access</span>
            </button>
          </div>

          {/* Subtle trust line */}
          <p className="mt-4 text-xs text-gray-500">
            No hype. No profit promises. Built for serious learners only.
          </p>

        </div>

      </div>
    </section>
  );
}
