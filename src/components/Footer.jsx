export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-green-500 mb-2">
              TradeLearn
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Learn stock market trading with real market guidance,
              discipline, and risk management.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-green-400 cursor-pointer">Home</li>
                <li className="hover:text-green-400 cursor-pointer">About</li>
                <li className="hover:text-green-400 cursor-pointer">Bootcamp</li>
                <li className="hover:text-green-400 cursor-pointer">Mentor</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-green-400 cursor-pointer">Contact</li>
                <li className="hover:text-green-400 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-green-400 cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TradeLearn. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
