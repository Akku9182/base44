export default function GoalCard({ goal }) {
  const progress = Math.min(100, Math.round((goal.current / goal.target) * 100));

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{goal.name}</p>
          <p className="text-xs text-slate-400">${goal.current} of ${goal.target}</p>
        </div>
        <span className="rounded-full bg-savvy-lilac/10 px-2 py-1 text-xs text-savvy-lilac">
          {progress}%
        </span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-savvy-lilac" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
