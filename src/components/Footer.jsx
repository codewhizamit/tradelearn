export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand & Message */}
          <div>
            <h3 className="text-xl font-bold text-green-500">
              Stockologer
            </h3>

            <p className="mt-3 text-sm text-gray-400 max-w-sm">
              Stockologer is a professional trading education platform built for
              serious learners. We focus on real market understanding, disciplined
              execution, and risk management — not hype or shortcuts.
            </p>

            <p className="mt-4 text-xs text-gray-500">
              Learn the right way. Trade with clarity. Grow with consistency.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-white">
              Get in Touch
            </h4>

            <p className="text-sm text-gray-400">
              📞 Contact Number
            </p>

            <p className="mt-1 text-sm font-medium text-green-400">
              96910 86886
            </p>

            <p className="mt-4 text-xs text-gray-500">
              Available during working hours. No spam calls.
            </p>
          </div>

          {/* WhatsApp Community */}
          <div>
            <h4 className="font-semibold mb-3 text-white">
              Trading Community
            </h4>

            <p className="text-sm text-gray-400 mb-4">
              Join our private WhatsApp community for important updates,
              market insights, and discussions with like-minded traders.
            </p>

            <a
              href="https://chat.whatsapp.com/Fevm9RqmN8q0DoN5LK4Oi3?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-xl border border-green-500/30
                bg-green-500/10 px-5 py-2
                text-sm font-semibold text-green-400
                transition-all
                hover:bg-green-500/20
                hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]
              "
            >
              Join WhatsApp Community
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Stockologer. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
