export default function StatCard({ label, value, trend }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-400">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-2xl font-semibold">{value}</h3>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-600">
          {trend}
        </span>
      </div>
    </div>
  );
}
