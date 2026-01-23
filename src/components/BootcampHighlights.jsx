import {
  Calendar,
  Video,
  TrendingUp,
  Users,
} from "lucide-react";

export default function BootcampHighlights() {
  const highlights = [
    {
      step: "01",
      title: "8-Week Program",
      desc: "Structured learning from fundamentals to advanced trading strategies.",
      icon: Calendar,
    },
    {
      step: "02",
      title: "Live Sessions",
      desc: "Interactive live classes with real-time market analysis.",
      icon: Video,
    },
    {
      step: "03",
      title: "Market Practice",
      desc: "Hands-on practice with paper trading and real market examples.",
      icon: TrendingUp,
    },
    {
      step: "04",
      title: "All Skill Levels",
      desc: "Perfect for beginners, intermediate, and advanced traders.",
      icon: Users,
    },
  ];

  return (
    <section id="bootcamp" className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold">
            Bootcamp <span className="text-green-500">Highlights</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Comprehensive trading education program
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  rounded-2xl
                  border border-zinc-800
                  bg-linear-to-b from-zinc-900 to-zinc-950
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-green-500/40
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]
                "
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 text-sm font-semibold text-green-500">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
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
