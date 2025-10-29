import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const merchants = [
  { name: "Whole Foods", category: "Groceries", totalSpent: 850, transactions: 12, avgTransaction: 70.83, lastTransaction: "2025-01-15" },
  { name: "Target", category: "Shopping", totalSpent: 680, transactions: 8, avgTransaction: 85.00, lastTransaction: "2025-01-12" },
  { name: "Amazon", category: "Shopping", totalSpent: 520, transactions: 15, avgTransaction: 34.67, lastTransaction: "2025-01-14" },
  { name: "Starbucks", category: "Dining", totalSpent: 240, transactions: 28, avgTransaction: 8.57, lastTransaction: "2025-01-12" },
  { name: "Shell Gas", category: "Transport", totalSpent: 280, transactions: 9, avgTransaction: 31.11, lastTransaction: "2025-01-13" },
  { name: "Netflix", category: "Entertainment", totalSpent: 15.99, transactions: 1, avgTransaction: 15.99, lastTransaction: "2025-01-14" },
  { name: "Spotify", category: "Entertainment", totalSpent: 9.99, transactions: 1, avgTransaction: 9.99, lastTransaction: "2025-01-13" },
  { name: "Electric Company", category: "Utilities", totalSpent: 125, transactions: 1, avgTransaction: 125.00, lastTransaction: "2025-01-11" },
];

const Merchants = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Merchants</h2>
        <p className="text-muted-foreground">Your spending breakdown by merchant</p>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle>All Merchants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {merchants.map((merchant) => (
              <div key={merchant.name} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-medium text-lg">{merchant.name}</p>
                    <Badge variant="outline">{merchant.category}</Badge>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>{merchant.transactions} transactions</span>
                    <span>Avg: ${merchant.avgTransaction.toFixed(2)}</span>
                    <span>Last: {merchant.lastTransaction}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${merchant.totalSpent.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">Total Spent</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Merchants;
