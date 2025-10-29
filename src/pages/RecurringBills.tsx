import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, AlertCircle, CheckCircle2 } from "lucide-react";

const bills = [
  { id: 1, name: "Netflix", amount: 15.99, dueDate: "1st", status: "paid", category: "Entertainment", nextDue: "2025-02-01" },
  { id: 2, name: "Spotify", amount: 9.99, dueDate: "5th", status: "paid", category: "Entertainment", nextDue: "2025-02-05" },
  { id: 3, name: "Electric Company", amount: 125.00, dueDate: "15th", status: "upcoming", category: "Utilities", nextDue: "2025-02-15" },
  { id: 4, name: "Internet", amount: 79.99, dueDate: "20th", status: "upcoming", category: "Utilities", nextDue: "2025-01-20" },
  { id: 5, name: "Phone Bill", amount: 65.00, dueDate: "25th", status: "upcoming", category: "Utilities", nextDue: "2025-01-25" },
  { id: 6, name: "Gym Membership", amount: 49.99, dueDate: "10th", status: "paid", category: "Health", nextDue: "2025-02-10" },
  { id: 7, name: "Adobe Creative Cloud", amount: 54.99, dueDate: "12th", status: "upcoming", category: "Software", nextDue: "2025-02-12" },
  { id: 8, name: "Amazon Prime", amount: 14.99, dueDate: "8th", status: "paid", category: "Shopping", nextDue: "2025-02-08" },
];

const totalMonthly = bills.reduce((sum, bill) => sum + bill.amount, 0);
const upcomingBills = bills.filter(b => b.status === "upcoming");

const RecurringBills = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Recurring Bills & Subscriptions</h2>
        <p className="text-muted-foreground">Manage your recurring payments</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Monthly</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalMonthly.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">{bills.length} active subscriptions</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming</CardTitle>
            <AlertCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingBills.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Bills due this month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Paid</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bills.length - upcomingBills.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Completed this month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle>All Recurring Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-medium text-lg">{bill.name}</p>
                    <Badge 
                      variant={bill.status === "paid" ? "outline" : "secondary"}
                      className={bill.status === "paid" ? "border-success text-success" : ""}
                    >
                      {bill.status === "paid" ? (
                        <><CheckCircle2 className="h-3 w-3 mr-1" /> Paid</>
                      ) : (
                        <><AlertCircle className="h-3 w-3 mr-1" /> Upcoming</>
                      )}
                    </Badge>
                    <Badge variant="outline">{bill.category}</Badge>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>Due: {bill.dueDate} of each month</span>
                    <span>Next payment: {bill.nextDue}</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <div className="text-2xl font-bold">${bill.amount.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">/month</div>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecurringBills;
