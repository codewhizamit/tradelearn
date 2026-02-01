import gajendraPhoto from "../assets/gajendra.jpeg";
import ashutoshPhoto from "../assets/ashutosh.jpg.jpeg";
import tarunPhoto from "../assets/tarun.jpg.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Gajendra Singh",
      role: "Intermediate Trader • Harda, MP",
      photo: gajendraPhoto,
      text: "Stockologer has completely changed the way I approach trading. Earlier I used to take random trades, but now I understand the importance of risk management, discipline, and patience. The strategies are practical and actually work in live markets — no hype, no shortcuts.",
    },
    {
      name: "Ashutosh Rajput",
      role: "Options Trader • Rajasthan",
      photo: ashutoshPhoto,
      text: "My options trading journey with Stockologer has been truly transformative. Clear strategies, daily market insights, and guided live sessions helped me improve my entries and manage risk better. This is not just a course — it’s a real support system for traders.",
    },
    {
      name: "Tarun",
      role: "Beginner Trader • Delhi",
      photo: tarunPhoto,
      text: "What I like most about Stockologer is the clarity. Complex strategies are explained in a simple, practical way. Daily guidance, live sessions, and regular trade reviews helped me stay disciplined and consistent. Highly recommended for serious traders.",
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
                {item.text}
              </p>

              <div className="border-t border-zinc-800 pt-4 flex items-center gap-4">
                
                {/* Student Photo */}
                <div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
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
