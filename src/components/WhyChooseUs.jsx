import {
  TrendingUp,
  BookOpen,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Live Market Learning",
      desc: "Learn where it matters most — in live markets with real-time mentor guidance.",
      icon: TrendingUp,
    },
    {
      title: "Beginner Friendly",
      desc: "Structured, step-by-step learning that builds confidence from day one.",
      icon: BookOpen,
    },
    {
      title: "Risk Management First",
      desc: "Learn disciplined risk control to protect capital before profits.",
      icon: ShieldCheck,
    },
    {
      title: "Practical Strategies",
      desc: "No theory—only practical strategies used in live markets.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold">
            Why <span className="text-green-500">Choose Us</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            A clear, structured approach to help you trade confidently in real market conditions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border border-zinc-800
                  bg-linear-to-b from-zinc-900 to-zinc-950
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-green-500/50
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-5
                    flex h-12 w-12 items-center justify-center
                    rounded-xl
                    bg-green-500/10
                    text-green-400
                    transition
                    group-hover:bg-green-500/20
                  "
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
