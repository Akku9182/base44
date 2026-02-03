const formatAmount = (amount) => {
  const sign = amount < 0 ? "-" : "+";
  return `${sign}$${Math.abs(amount).toFixed(2)}`;
};

export default function TransactionList({ transactions }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent transactions</h3>
        <div className="flex gap-2 text-xs text-slate-400">
          <span className="rounded-full border px-2 py-1">Date</span>
          <span className="rounded-full border px-2 py-1">Category</span>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {transactions.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-xs text-slate-400">{item.category} · {item.date}</p>
            </div>
            <span className={item.amount < 0 ? "text-rose-500" : "text-emerald-500"}>
              {formatAmount(item.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
