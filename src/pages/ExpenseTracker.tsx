import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: "income" | "expense";
}

const ExpenseTracker = () => {
  const { toast } = useToast();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");

  const categories = [
    "Food", "Transport", "Shopping", "Entertainment", "Bills", "Education", "Health", "Others"
  ];

  const addExpense = () => {
    if (!description || !amount || !category) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newExpense: Expense = {
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split("T")[0],
      type,
    };

    setExpenses([newExpense, ...expenses]);
    setDescription("");
    setAmount("");
    setCategory("");

    toast({
      title: "Added successfully",
      description: `${type === "income" ? "Income" : "Expense"} of ₹${amount} added`,
    });
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    toast({
      title: "Deleted",
      description: "Transaction removed successfully",
    });
  };

  const totalIncome = expenses
    .filter((exp) => exp.type === "income")
    .reduce((sum, exp) => sum + exp.amount, 0);

  const totalExpense = expenses
    .filter((exp) => exp.type === "expense")
    .reduce((sum, exp) => sum + exp.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="min-h-screen pt-16 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Expense Tracker</h1>
          <p className="text-muted-foreground">Track your income and expenses efficiently</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Wallet className="h-4 w-4 mr-2 text-primary" />
                <p className={`text-2xl font-bold ${balance >= 0 ? 'text-success' : 'text-destructive'}`}>
                  ₹{balance.toFixed(2)}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-success" />
                <p className="text-2xl font-bold text-success">₹{totalIncome.toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingDown className="h-4 w-4 mr-2 text-destructive" />
                <p className="text-2xl font-bold text-destructive">₹{totalExpense.toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Transaction Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add Transaction</CardTitle>
            <CardDescription>Record your income or expense</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Label htmlFor="type">Type</Label>
                  <Select value={type} onValueChange={(val) => setType(val as "income" | "expense")}>
                    <SelectTrigger id="type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={addExpense} className="whitespace-nowrap">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your transaction history</CardDescription>
          </CardHeader>
          <CardContent>
            {expenses.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No transactions yet. Add your first transaction above!
              </p>
            ) : (
              <div className="space-y-2">
                {expenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{expense.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {expense.category} • {expense.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p
                        className={`text-lg font-bold ${
                          expense.type === "income" ? "text-success" : "text-destructive"
                        }`}
                      >
                        {expense.type === "income" ? "+" : "-"}₹{expense.amount.toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteExpense(expense.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExpenseTracker;
