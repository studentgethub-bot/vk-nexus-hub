import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Trophy, BookOpen } from "lucide-react";

const JeeGate = () => {
  const examSections = [
    {
      icon: Target,
      title: "JEE Preparation",
      subjects: [
        { name: "Physics", topics: ["Mechanics", "Electrodynamics", "Modern Physics"] },
        { name: "Chemistry", topics: ["Physical", "Organic", "Inorganic"] },
        { name: "Mathematics", topics: ["Calculus", "Algebra", "Coordinate Geometry"] },
      ],
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "GATE Preparation",
      subjects: [
        { name: "Engineering Math", topics: ["Linear Algebra", "Calculus", "Probability"] },
        { name: "Core Subjects", topics: ["Data Structures", "Algorithms", "OS"] },
        { name: "Aptitude", topics: ["Numerical", "Verbal", "Reasoning"] },
      ],
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen pt-16 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">JEE/GATE Preparation</h1>
          <p className="text-muted-foreground">
            Comprehensive resources for competitive exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {examSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <section.icon className={`h-10 w-10 mb-2 ${section.color}`} />
                <CardTitle className="text-2xl">{section.title}</CardTitle>
                <CardDescription>Subject-wise breakdown and topics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.subjects.map((subject, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-foreground mb-2">{subject.name}</h4>
                      <ul className="space-y-1">
                        {subject.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <Trophy className="h-10 w-10 mb-2" />
              <CardTitle className="text-2xl">Previous Year Papers</CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Solve past exam papers to understand patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Last 10 years question papers</li>
                <li>• Detailed solutions with explanations</li>
                <li>• Topic-wise analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardHeader>
              <BookOpen className="h-10 w-10 mb-2" />
              <CardTitle className="text-2xl">Mock Tests</CardTitle>
              <CardDescription className="text-accent-foreground/90">
                Practice with timed mock examinations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Full-length practice tests</li>
                <li>• Performance analytics</li>
                <li>• Adaptive difficulty levels</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-2xl">Study Strategy</CardTitle>
            <CardDescription>Tips for effective preparation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Create a realistic study schedule covering all topics
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Practice</h4>
                <p className="text-sm text-muted-foreground">
                  Solve problems regularly and take mock tests
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Revision</h4>
                <p className="text-sm text-muted-foreground">
                  Regular revision and concept reinforcement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JeeGate;
