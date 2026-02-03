import Header from "../components/Header";
import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import TransactionList from "../components/TransactionList";
import GoalCard from "../components/GoalCard";
import BudgetCard from "../components/BudgetCard";
import InsightCard from "../components/InsightCard";
import AccountCard from "../components/AccountCard";
import {
  accounts,
  budgets,
  goals,
  incomeExpenseData,
  insights,
  summary,
  topCategories,
  transactions
} from "../lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen space-y-8 px-6 py-10 lg:px-12">
      <Header />

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total balance" value={`$${summary.totalBalance.toLocaleString()}`} trend="+4.2%" />
        <StatCard label="Monthly income" value={`$${summary.income.toLocaleString()}`} trend="+1.8%" />
        <StatCard label="Monthly expenses" value={`$${summary.expenses.toLocaleString()}`} trend="-2.3%" />
        <StatCard label="Savings" value={`$${summary.savings.toLocaleString()}`} trend="+6.1%" />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <ChartCard title="Income vs Expenses" data={incomeExpenseData} />
        <ChartCard title="Top spending categories" data={topCategories} />
        <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">AI insights</h3>
            <span className="text-xs text-slate-400">Next 7 days</span>
          </div>
          <div className="space-y-3">
            {insights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TransactionList transactions={transactions} />
        </div>
        <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Quick actions</h3>
            <span className="text-xs text-slate-400">Transfers & bills</span>
          </div>
          <div className="grid gap-3">
            {[
              "Transfer between accounts",
              "Pay bills",
              "Schedule payment",
              "Scan QR to pay"
            ].map((action) => (
              <button
                key={action}
                className="rounded-2xl border border-slate-100 px-4 py-3 text-left text-sm hover:border-savvy-teal"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Accounts & cards</h3>
            <button className="text-xs text-savvy-teal">Add account</button>
          </div>
          <div className="space-y-3">
            {accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Budgets</h3>
            <button className="text-xs text-savvy-teal">Edit budgets</button>
          </div>
          <div className="space-y-3">
            {budgets.map((budget) => (
              <BudgetCard key={budget.id} budget={budget} />
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Goals</h3>
            <button className="text-xs text-savvy-teal">Create goal</button>
          </div>
          <div className="space-y-3">
            {goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
