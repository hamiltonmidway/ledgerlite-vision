import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const transactions = [
  { id: 1, date: "2025-01-15", merchant: "Whole Foods", category: "Groceries", amount: -124.50, status: "completed" },
  { id: 2, date: "2025-01-15", merchant: "Salary Deposit", category: "Income", amount: 5000.00, status: "completed" },
  { id: 3, date: "2025-01-14", merchant: "Netflix", category: "Entertainment", amount: -15.99, status: "completed" },
  { id: 4, date: "2025-01-14", merchant: "Amazon", category: "Shopping", amount: -89.99, status: "pending" },
  { id: 5, date: "2025-01-13", merchant: "Shell Gas", category: "Transport", amount: -65.00, status: "completed" },
  { id: 6, date: "2025-01-13", merchant: "Spotify", category: "Entertainment", amount: -9.99, status: "completed" },
  { id: 7, date: "2025-01-12", merchant: "Starbucks", category: "Dining", amount: -8.45, status: "completed" },
  { id: 8, date: "2025-01-12", merchant: "Target", category: "Shopping", amount: -156.78, status: "completed" },
  { id: 9, date: "2025-01-11", merchant: "Electric Company", category: "Utilities", amount: -125.00, status: "completed" },
  { id: 10, date: "2025-01-10", merchant: "Uber", category: "Transport", amount: -23.50, status: "completed" },
];

const Transactions = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>
          <p className="text-muted-foreground">Manage and track all your transactions</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Transaction
        </Button>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <p className="font-medium">{transaction.merchant}</p>
                    <Badge variant={transaction.status === "pending" ? "secondary" : "outline"} className="text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {transaction.category} • {transaction.date}
                  </p>
                </div>
                <div className={`text-lg font-semibold ${transaction.amount > 0 ? 'text-success' : 'text-destructive'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount < 0 ? '-' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
