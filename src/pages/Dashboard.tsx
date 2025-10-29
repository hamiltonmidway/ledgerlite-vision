import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingDown, Calendar, CreditCard } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Line, LineChart } from "recharts";

const monthlyData = [
  { month: "Jan", spending: 3240 },
  { month: "Feb", spending: 2890 },
  { month: "Mar", spending: 3650 },
  { month: "Apr", spending: 2980 },
  { month: "May", spending: 4120 },
  { month: "Jun", spending: 3890 },
];

const categoryData = [
  { category: "Groceries", amount: 850 },
  { category: "Dining", amount: 420 },
  { category: "Transport", amount: 280 },
  { category: "Utilities", amount: 340 },
  { category: "Entertainment", amount: 190 },
];

const recentTransactions = [
  { id: 1, merchant: "Whole Foods", category: "Groceries", amount: -124.50, date: "2025-01-15" },
  { id: 2, merchant: "Netflix", category: "Entertainment", amount: -15.99, date: "2025-01-14" },
  { id: 3, merchant: "Shell Gas", category: "Transport", amount: -65.00, date: "2025-01-13" },
  { id: 4, merchant: "Starbucks", category: "Dining", amount: -8.45, date: "2025-01-12" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Your financial overview at a glance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Monthly Spending"
          value="$3,890"
          change="+5.2% from last month"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Annual Spending"
          value="$42,670"
          change="+12.5% from last year"
          icon={Calendar}
          trend="up"
        />
        <StatCard
          title="Active Subscriptions"
          value="12"
          change="2 expiring soon"
          icon={CreditCard}
          trend="neutral"
        />
        <StatCard
          title="Avg Daily Spend"
          value="$129.67"
          change="-2.4% from last month"
          icon={TrendingDown}
          trend="down"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Monthly Spending Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="spending" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <XAxis 
                  dataKey="category" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill="hsl(var(--chart-2))" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{transaction.merchant}</p>
                  <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.date}</p>
                </div>
                <div className="text-lg font-semibold text-destructive">
                  ${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
