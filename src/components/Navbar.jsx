import { useState } from "react";
import {
  Home,
  User,
  GraduationCap,
  TrendingUp,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About Mentor", icon: User, path: "#mentor" },
    { name: "Bootcamp", icon: GraduationCap, path: "#bootcamp" },
    { name: "Live Market", icon: TrendingUp, path: "#market" },
    { name: "Contact", icon: Phone, path: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-1/2 z-50 w-[92%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/20">
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <span className="text-lg font-semibold text-white">
              Trade<span className="text-green-400">Learn</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.path}
                className="group flex items-center gap-2 text-sm font-medium text-gray-300 transition-all hover:text-white"
              >
                <item.icon className="h-4 w-4 text-gray-400 group-hover:text-green-400 transition" />
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-xl bg-white/10 p-2 text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-xs bg-black/80 backdrop-blur-2xl p-6 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-10">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-base font-medium text-gray-200 hover:text-green-400 transition"
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
