import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const categories = [
  { name: "Groceries", budget: 1000, spent: 850, transactions: 24, color: "hsl(var(--chart-1))" },
  { name: "Dining", budget: 500, spent: 420, transactions: 18, color: "hsl(var(--chart-2))" },
  { name: "Transport", budget: 300, spent: 280, transactions: 12, color: "hsl(var(--chart-3))" },
  { name: "Utilities", budget: 400, spent: 340, transactions: 4, color: "hsl(var(--chart-4))" },
  { name: "Entertainment", budget: 200, spent: 190, transactions: 8, color: "hsl(var(--chart-5))" },
  { name: "Shopping", budget: 600, spent: 560, transactions: 15, color: "hsl(160 60% 50%)" },
  { name: "Healthcare", budget: 300, spent: 180, transactions: 3, color: "hsl(200 70% 50%)" },
];

const Categories = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
        <p className="text-muted-foreground">Track spending across different categories</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const percentage = (category.spent / category.budget) * 100;
          const isOverBudget = percentage > 100;
          
          return (
            <Card key={category.name} className="border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.transactions} transactions</p>
                  </div>
                  <div 
                    className="w-10 h-10 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Spent</span>
                    <span className="font-semibold">${category.spent.toFixed(2)}</span>
                  </div>
                  <Progress 
                    value={Math.min(percentage, 100)} 
                    className="h-2"
                    style={{
                      // @ts-ignore
                      '--progress-background': isOverBudget ? 'hsl(var(--destructive))' : category.color
                    }}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Budget</span>
                    <span className="font-semibold">${category.budget.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-border/50">
                  {isOverBudget ? (
                    <Badge variant="destructive" className="w-full justify-center">
                      Over budget by ${(category.spent - category.budget).toFixed(2)}
                    </Badge>
                  ) : (
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground">Remaining: </span>
                      <span className="text-sm font-semibold text-success">
                        ${(category.budget - category.spent).toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
