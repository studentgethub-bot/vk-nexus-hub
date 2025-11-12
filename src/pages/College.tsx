import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Code, FlaskConical, Briefcase } from "lucide-react";
import AdminFileUpload from "@/components/AdminFileUpload";
import FileList from "@/components/FileList";
import { useAuth } from "@/hooks/useAuth";

const College = () => {
  const { isAdmin, loading } = useAuth();
  
  const resources = [
    {
      icon: Code,
      title: "Programming & Development",
      topics: [
        "Data Structures & Algorithms",
        "Web Development (MERN Stack)",
        "Mobile App Development",
        "System Design",
      ],
      color: "text-primary",
    },
    {
      icon: FlaskConical,
      title: "Core Engineering",
      topics: [
        "Engineering Mathematics",
        "Digital Electronics",
        "Circuit Analysis",
        "Signal Processing",
      ],
      color: "text-accent",
    },
    {
      icon: Book,
      title: "Theory Subjects",
      topics: [
        "Operating Systems",
        "Database Management",
        "Computer Networks",
        "Software Engineering",
      ],
      color: "text-success",
    },
    {
      icon: Briefcase,
      title: "Career Development",
      topics: [
        "Interview Preparation",
        "Resume Building",
        "Technical Writing",
        "Soft Skills",
      ],
      color: "text-info",
    },
  ];

  return (
    <div className="min-h-screen pt-16 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">College Resources</h1>
          <p className="text-muted-foreground">
            Study materials for engineering and professional courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <resource.icon className={`h-10 w-10 mb-2 ${resource.color}`} />
                <CardTitle className="text-2xl">{resource.title}</CardTitle>
                <CardDescription>Essential topics and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.topics.map((topic, idx) => (
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

        {!loading && isAdmin && (
          <div className="mt-8">
            <AdminFileUpload category="college" title="Upload College Resources" />
          </div>
        )}

        <div className="mt-8">
          <FileList category="college" title="College Resources" />
        </div>
      </div>
    </div>
  );
};

export default College;
