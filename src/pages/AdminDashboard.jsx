import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogout, isAdminLoggedIn } from "./AdminAuth";
import {
  Users,
  CalendarDays,
  Activity,
  LogOut
} from "lucide-react";

const SHEET_JSON_URL =
  "https://docs.google.com/spreadsheets/d/1r1yn7uauKtHvSJorezYsi9-v6nA6LsUCLl3wmj6RTjY/gviz/tq?tqx=out:json";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAdminLoggedIn()) {
        navigate("/admin-login", { replace: true });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate]);


  useEffect(() => {
    fetch(SHEET_JSON_URL)
      .then((res) => res.text())
      .then((text) => {
        const json = JSON.parse(
          text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
        );

        const rows = json.table.rows.map((r) =>
          r.c.map((cell) => (cell ? cell.v : ""))
        );

        const HEADERS = ["Name", "Email", "Phone", "Experience", "Date"];

        const formatted = rows.map((row) => {
          let obj = {};
          HEADERS.forEach((h, i) => (obj[h] = row[i] || ""));
          return obj;
        });

        setData(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (val) => {
    if (typeof val === "string" && val.startsWith("Date")) {
      const p = val.match(/\d+/g).map(Number);
      return new Date(p[0], p[1], p[2], p[3], p[4]).toLocaleString();
    }
    return val;
  };

  const total = data.length;
  const today = data.filter((d) => {
    if (!d.Date) return false;
    const p = d.Date.match(/\d+/g)?.map(Number);
    if (!p) return false;
    return (
      new Date(p[0], p[1], p[2]).toDateString() ===
      new Date().toDateString()
    );
  }).length;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm">
            Trading Bootcamp • Secure Panel
          </p>
        </div>

        <button
          onClick={() => {
            adminLogout();
            navigate("/admin-login");
          }}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded-lg text-sm font-medium"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          title="Total Registrations"
          value={loading ? "…" : total}
          icon={<Users />}
          accent="green"
        />
        <StatCard
          title="Today"
          value={loading ? "…" : today}
          icon={<CalendarDays />}
          accent="blue"
        />
        <StatCard
          title="System Status"
          value="Active"
          icon={<Activity />}
          accent="emerald"
        />
      </div>

      {/* TABLE */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 backdrop-blur">
        <h2 className="text-lg font-semibold mb-4">
          Registered Users
        </h2>

        {loading ? (
          <p className="text-gray-400">Loading data…</p>
        ) : data.length === 0 ? (
          <p className="text-gray-400">No registrations found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-zinc-950 sticky top-0">
                <tr>
                  {["Name", "Email", "Phone", "Experience", "Date"].map(
                    (h) => (
                      <th
                        key={h}
                        className="p-3 text-left border border-zinc-800 text-gray-300"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-zinc-800/40 transition"
                  >
                    <td className="p-3 border border-zinc-800">
                      {row.Name}
                    </td>
                    <td className="p-3 border border-zinc-800">
                      {row.Email}
                    </td>
                    <td className="p-3 border border-zinc-800">
                      {row.Phone}
                    </td>
                    <td className="p-3 border border-zinc-800">
                      {row.Experience}
                    </td>
                    <td className="p-3 border border-zinc-800 text-gray-400">
                      {formatDate(row.Date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

/* 🔹 Reusable Stat Card */
function StatCard({ title, value, icon, accent }) {
  return (
    <div className="relative bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 overflow-hidden">
      <div
        className={`absolute inset-0 opacity-10 bg-${accent}-500 blur-2xl`}
      />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className="text-green-400 opacity-80">
          {icon}
        </div>
      </div>
    </div>
  );
}
