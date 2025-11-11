import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, FlaskConical, Laptop } from "lucide-react";

const Class1112 = () => {
  const streams = [
    {
      icon: Calculator,
      name: "Mathematics",
      topics: ["Calculus", "Vectors", "3D Geometry", "Probability", "Linear Programming"],
      color: "text-primary",
    },
    {
      icon: FlaskConical,
      name: "Physics",
      topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
      color: "text-accent",
    },
    {
      icon: FlaskConical,
      name: "Chemistry",
      topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"],
      color: "text-success",
    },
    {
      icon: Laptop,
      name: "Computer Science",
      topics: ["Python Programming", "Data Structures", "Databases", "Web Development"],
      color: "text-info",
    },
  ];

  return (
    <div className="min-h-screen pt-16 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Classes 11-12</h1>
          <p className="text-muted-foreground">Advanced topics and board exam preparation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {streams.map((stream, index) => (
            <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <stream.icon className={`h-10 w-10 mb-2 ${stream.color} transition-transform duration-300 hover:scale-110`} />
                <CardTitle className="text-2xl">{stream.name}</CardTitle>
                <CardDescription>Advanced concepts and problem solving</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {stream.topics.map((topic, idx) => (
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

        <Card className="mt-8 bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Board Exam Preparation</CardTitle>
            <CardDescription className="text-primary-foreground/90">
              Comprehensive resources for CBSE, ICSE, and State Board examinations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Previous year question papers
              </li>
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Sample papers and mock tests
              </li>
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Detailed solutions and explanations
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Class1112;
