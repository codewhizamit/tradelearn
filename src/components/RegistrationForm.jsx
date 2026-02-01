import { useState } from "react";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("experience", experience);

      await fetch(
        "https://script.google.com/macros/s/AKfycbzjk7kASIalWhDkRXDd17rQU1mQeakQ-RYckXb2KBdjd9EwGcSGxH_XsMUiVL89t608/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      setShowSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setExperience("");

      setTimeout(() => setShowSuccess(false), 3000);
    } catch {
      console.error("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register-section" className="relative bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">
            Join <span className="text-green-500">Trading Bootcamp</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Apply for <span className="text-white">early access</span> to our mentor-led
            trading bootcamp. Limited-time onboarding for serious learners only.
          </p>
        </div>

        {/* Form Card */}
        <div className="
          max-w-xl mx-auto rounded-3xl
          border border-zinc-800
          bg-linear-to-b from-zinc-900 to-zinc-950
          px-6 py-10 md:px-10
          shadow-[0_30px_80px_rgba(0,0,0,0.85)]
        ">
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
            />

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
            >
              <option value="">Select Trading Experience</option>
              <option>Beginner (0–6 months)</option>
              <option>Intermediate (6–24 months)</option>
              <option>Advanced (2+ years)</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="
                w-full rounded-xl bg-green-500 py-3
                text-sm font-semibold text-black
                transition-all duration-300
                hover:bg-green-600
                hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]
                disabled:opacity-60
              "
            >
              {loading ? "Submitting Application..." : "Apply for Early Access"}
            </button>

            <p className="text-center text-xs text-gray-500">
              Your data is secure. No spam. No sales calls.
            </p>

            {/* WhatsApp Community CTA */}
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-4 text-center">
              <p className="text-sm font-medium text-white">
                Join Our Private WhatsApp Trading Community
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Live updates • Important announcements • Community discussions
              </p>

              <a
                href="https://chat.whatsapp.com/Fevm9RqmN8q0DoN5LK4Oi3?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3 inline-flex items-center justify-center gap-2
                  rounded-xl border border-green-500/30
                  bg-green-500/10 px-5 py-2
                  text-sm font-semibold text-green-400
                  transition-all
                  hover:bg-green-500/20
                  hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]
                "
              >
                <span>Join WhatsApp Community</span>
              </a>
            </div>

          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="
            rounded-2xl
            border border-green-500/30
            bg-linear-to-b from-zinc-900 to-zinc-950
            px-8 py-6 text-center
            shadow-[0_0_60px_rgba(34,197,94,0.35)]
          ">
            <h3 className="text-lg font-semibold text-white">
              Application Submitted
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Our team will review your details and contact you if selected.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
