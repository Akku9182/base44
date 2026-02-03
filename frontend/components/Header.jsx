import { Bell, ChevronDown, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl bg-savvy-navy px-8 py-6 text-white shadow-lg lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm text-slate-300">Welcome back,</p>
        <h1 className="text-2xl font-semibold">Jordan Carter</h1>
      </div>
      <div className="flex flex-1 items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 lg:max-w-md">
        <Search size={18} />
        <input
          className="w-full bg-transparent placeholder:text-slate-300 focus:outline-none"
          placeholder="Search transactions, goals, or budgets"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
          <Bell size={18} />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-savvy-teal" />
          <span className="text-sm">Pro Plan</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}
