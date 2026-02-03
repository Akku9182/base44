export default function InsightCard({ insight }) {
  return (
    <div className="rounded-2xl bg-savvy-navy px-4 py-5 text-white">
      <p className="text-xs uppercase text-slate-300">{insight.title}</p>
      <h4 className="mt-2 text-2xl font-semibold">{insight.value}</h4>
      <p className="mt-2 text-xs text-slate-200">{insight.description}</p>
    </div>
  );
}
