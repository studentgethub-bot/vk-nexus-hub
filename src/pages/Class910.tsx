import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, FlaskConical, Globe } from "lucide-react";

const Class910 = () => {
  const subjects = [
    {
      icon: Calculator,
      name: "Mathematics",
      topics: ["Algebra", "Geometry", "Trigonometry", "Statistics"],
      color: "text-primary",
    },
    {
      icon: FlaskConical,
      name: "Science",
      topics: ["Physics", "Chemistry", "Biology"],
      color: "text-accent",
    },
    {
      icon: Globe,
      name: "Social Studies",
      topics: ["History", "Geography", "Civics", "Economics"],
      color: "text-success",
    },
    {
      icon: BookOpen,
      name: "Languages",
      topics: ["English", "Hindi", "Sanskrit"],
      color: "text-info",
    },
  ];

  return (
    <div className="min-h-screen pt-16 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Classes 9-10</h1>
          <p className="text-muted-foreground">Study materials and resources for high school students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <subject.icon className={`h-10 w-10 mb-2 ${subject.color}`} />
                <CardTitle className="text-2xl">{subject.name}</CardTitle>
                <CardDescription>Core topics and concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subject.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-muted/50">
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>
              We're working on adding comprehensive study materials, practice questions, and video tutorials
              for all subjects. Stay tuned!
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Class910;
