export const summary = {
  totalBalance: 24890.45,
  income: 8200,
  expenses: 4620,
  savings: 4120
};

export const incomeExpenseData = [
  { name: "Income", value: 8200 },
  { name: "Expenses", value: 4620 },
  { name: "Savings", value: 4120 }
];

export const topCategories = [
  { name: "Housing", value: 1500 },
  { name: "Dining", value: 920 },
  { name: "Shopping", value: 640 },
  { name: "Travel", value: 540 },
  { name: "Utilities", value: 320 }
];

export const transactions = [
  {
    id: "1",
    title: "Spotify Subscription",
    category: "Entertainment",
    date: "2024-05-12",
    amount: -14.99
  },
  {
    id: "2",
    title: "Paycheck",
    category: "Salary",
    date: "2024-05-11",
    amount: 4200
  },
  {
    id: "3",
    title: "Whole Foods",
    category: "Groceries",
    date: "2024-05-10",
    amount: -86.4
  },
  {
    id: "4",
    title: "Uber Ride",
    category: "Transport",
    date: "2024-05-09",
    amount: -24.5
  }
];

export const accounts = [
  {
    id: "acc-1",
    name: "Primary Checking",
    type: "Bank",
    balance: 8420.33,
    last4: "5531"
  },
  {
    id: "acc-2",
    name: "Everyday Card",
    type: "Card",
    balance: 1280.12,
    last4: "9014"
  },
  {
    id: "acc-3",
    name: "Travel Wallet",
    type: "Wallet",
    balance: 640.9,
    last4: "2459"
  }
];

export const budgets = [
  { id: "bud-1", category: "Dining", spent: 420, limit: 500 },
  { id: "bud-2", category: "Shopping", spent: 320, limit: 400 },
  { id: "bud-3", category: "Travel", spent: 210, limit: 300 }
];

export const goals = [
  { id: "goal-1", name: "New Laptop", current: 920, target: 1500 },
  { id: "goal-2", name: "PS5", current: 260, target: 600 }
];

export const insights = [
  {
    id: "insight-1",
    title: "Predicted spend next 7 days",
    value: "$580",
    description: "Based on your weekly trend."
  },
  {
    id: "insight-2",
    title: "Overspending alert",
    value: "Dining +12%",
    description: "Consider lowering restaurant visits this week."
  },
  {
    id: "insight-3",
    title: "Suggested savings",
    value: "$120",
    description: "Move spare cash into Savings Vault."
  }
];
