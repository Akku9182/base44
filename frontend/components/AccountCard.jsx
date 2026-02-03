export default function AccountCard({ account }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{account.name}</p>
          <p className="text-xs text-slate-400">{account.type} · **** {account.last4}</p>
        </div>
        <span className="text-sm font-semibold">${account.balance.toLocaleString()}</span>
      </div>
      <button className="mt-3 w-full rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-500 hover:bg-slate-50">
        Sync transactions
      </button>
    </div>
  );
}
