export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Beginner Trader",
      text: "This bootcamp completely changed the way I look at trading. Earlier I was randomly taking trades, but now I understand risk management, discipline, and how professionals think in live markets. The mentor explains everything with real examples, not theory.",
    },
    {
      name: "Ankit Verma",
      role: "Working Professional",
      text: "Live market sessions were the biggest value for me. I learned how to plan trades, wait patiently, and avoid overtrading. The strategies are practical and easy to apply even with a full-time job.",
    },
    {
      name: "Pooja Singh",
      role: "Intermediate Trader",
      text: "I stopped chasing fake profits after joining this program. The focus on consistency and capital protection helped me gain confidence. This is not a hype-based course — it is structured and realistic.",
    },
  ];

  return (
    <section className="bg-black text-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold">
            What Our <span className="text-green-500">Students Say</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base">
            Real feedback from traders who learned with us
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-zinc-800
                bg-linear-to-b from-zinc-900 to-zinc-950
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-green-500/40
              "
            >
              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                “{item.text}”
              </p>

              <div className="border-t border-zinc-800 pt-4 flex items-center gap-4">
                
                {/* Photo Placeholder */}
                <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-gray-400">
                  Photo
                </div>

                {/* Info */}
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.role}</p>

                  {/* Rating */}
                  <div className="mt-1 text-green-400 text-xs">
                    ★ ★ ★ ★ ★
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
