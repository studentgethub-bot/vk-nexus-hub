import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, FileText, GraduationCap, Brain } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Calculator,
      title: "Expense Tracker",
      description: "Track your daily expenses with ease and insights",
      path: "/expense-tracker",
      color: "text-primary",
    },
    {
      icon: FileText,
      title: "Notes Manager",
      description: "Save and organize your notes, files, and documents",
      path: "/notes",
      color: "text-accent",
    },
    {
      icon: BookOpen,
      title: "Classes 9-10",
      description: "Study materials and resources for high school",
      path: "/class-9-10",
      color: "text-success",
    },
    {
      icon: GraduationCap,
      title: "Classes 11-12",
      description: "Advanced topics and exam preparation",
      path: "/class-11-12",
      color: "text-info",
    },
    {
      icon: Brain,
      title: "JEE/GATE Prep",
      description: "Competitive exam preparation resources",
      path: "/jee-gate",
      color: "text-warning",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Welcome to VK Learning Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your all-in-one platform for learning, tracking expenses, and managing notes.
            Built for students, by students.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/expense-tracker">
              <Button size="lg" className="font-semibold">
                Get Started
              </Button>
            </Link>
            <Link to="/notes">
              <Button size="lg" variant="outline" className="font-semibold">
                Explore Notes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Features & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.path}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <feature.icon className={`h-12 w-12 mb-4 ${feature.color}`} />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full">
                      Explore →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl mb-2">Ready to get started?</CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Join thousands of students who are already using VK Learning Hub
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/login">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Sign In Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
