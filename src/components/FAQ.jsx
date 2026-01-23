import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this bootcamp suitable for complete beginners?",
      a: "Yes, absolutely. This bootcamp starts from the basics and is designed for people who have never traded before. You will learn market structure, chart reading, risk management, and execution step by step in a simple and practical way.",
    },
    {
      q: "Do I need any prior trading or finance experience?",
      a: "No prior trading or finance experience is required. The curriculum is beginner-friendly and gradually moves to advanced concepts. Students, working professionals, and beginners can comfortably follow the sessions.",
    },
    {
      q: "Is live market trading included in the program?",
      a: "Yes. Live market sessions are an important part of the bootcamp. You will see real-time market analysis, trade planning, and decision-making, which helps you understand how professional traders operate in live markets.",
    },
    {
      q: "Will I get recordings of the live sessions?",
      a: "Yes, recordings of all important sessions are provided. This allows you to revise concepts anytime, catch up if you miss a session, and strengthen your understanding at your own pace.",
    },
    {
      q: "Is trading risky? How is risk managed in this program?",
      a: "Trading involves risk, but this program focuses heavily on risk management and capital protection. You will learn how to control losses, manage position sizing, and avoid emotional trading. The goal is consistency and discipline, not gambling.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="bg-black text-white py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base">
            Clear your doubts before joining the bootcamp
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border bg-linear-to-b from-zinc-900 to-zinc-950 transition-all duration-300
                  ${isOpen ? "border-green-500/40" : "border-zinc-800"}
                `}
              >
                {/* Question */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm md:text-base font-medium">
                    {item.q}
                  </span>

                  <Motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl text-green-400"
                  >
                    +
                  </Motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                        {item.a}
                      </div>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
