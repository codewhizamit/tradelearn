import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "./AdminAuth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = adminLogin(email, password);

    if (success) {
      navigate("/admin-dashboard");
    } else {
      setError("Invalid admin email or password");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-zinc-900/80 backdrop-blur border border-zinc-800 rounded-2xl p-8 shadow-xl">
        
        <h2 className="text-2xl font-bold text-center text-white mb-2">
          Admin Panel
        </h2>
        <p className="text-center text-gray-400 text-sm mb-6">
          Secure login required
        </p>

        {error && (
          <div className="bg-red-500/10 text-red-400 text-sm p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:border-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Authorized access only
        </p>
      </div>
    </div>
  );
}
