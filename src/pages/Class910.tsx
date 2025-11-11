import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, FlaskConical, Globe } from "lucide-react";

const Class910 = () => {
  const subjects = [
    {
      icon: Calculator,
      name: "Mathematics",
      topics: ["Number Systems", "Algebra", "Geometry", "Trigonometry", "Statistics", "Probability", "Coordinate Geometry", "Mensuration"],
      color: "text-primary",
    },
    {
      icon: FlaskConical,
      name: "Science",
      topics: ["Physics - Motion & Laws", "Physics - Energy & Work", "Chemistry - Atoms & Molecules", "Chemistry - Acids & Bases", "Biology - Cell Structure", "Biology - Genetics", "Environmental Science"],
      color: "text-accent",
    },
    {
      icon: Globe,
      name: "Social Studies (SST)",
      topics: ["History - World Wars", "History - Indian Freedom Struggle", "Geography - Climate & Resources", "Geography - Agriculture & Industries", "Civics - Democracy & Constitution", "Economics - Development & Sectors"],
      color: "text-success",
    },
    {
      icon: BookOpen,
      name: "English",
      topics: ["Reading Comprehension", "Writing Skills", "Grammar & Vocabulary", "Literature - Prose", "Literature - Poetry", "Letter & Essay Writing"],
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
            <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <subject.icon className={`h-10 w-10 mb-2 ${subject.color} transition-transform duration-300 hover:scale-110`} />
                <CardTitle className="text-2xl">{subject.name}</CardTitle>
                <CardDescription>Core topics and concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {subject.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer group">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-200"></span>
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
