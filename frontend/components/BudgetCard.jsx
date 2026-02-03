export default function BudgetCard({ budget }) {
  const progress = Math.min(100, Math.round((budget.spent / budget.limit) * 100));
  const warning = progress >= 90;

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{budget.category}</p>
          <p className="text-xs text-slate-400">${budget.spent} spent · ${budget.limit} limit</p>
        </div>
        <span
          className={`rounded-full px-2 py-1 text-xs ${
            warning ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-500"
          }`}
        >
          {warning ? "Overspending" : "On track"}
        </span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-100">
        <div
          className={`h-2 rounded-full ${warning ? "bg-rose-500" : "bg-emerald-500"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
