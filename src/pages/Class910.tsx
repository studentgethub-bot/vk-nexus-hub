import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, FlaskConical, Globe } from "lucide-react";
import AdminFileUpload from "@/components/AdminFileUpload";
import FileList from "@/components/FileList";
import { useAuth } from "@/hooks/useAuth";

const Class910 = () => {
  const { isAdmin, loading } = useAuth();
  
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
              <CardHeader className="relative overflow-hidden group">
                <subject.icon className={`h-10 w-10 mb-2 ${subject.color} transition-transform duration-300 group-hover:scale-110 relative z-10`} />
                <CardTitle className="text-2xl relative z-10 group-hover:scale-105 transition-transform duration-300">{subject.name}</CardTitle>
                <CardDescription className="relative z-10">Core topics and concepts</CardDescription>
                
                {/* Animated background symbols */}
                {subject.name === "Mathematics" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">∑</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">π</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">∫</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">√</span>
                  </div>
                )}
                
                {subject.name === "Science" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">⚛</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">🔬</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">⚡</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">🧪</span>
                  </div>
                )}
                
                {subject.name === "Social Studies (SST)" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">🌍</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">📜</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">🏛</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">⚖</span>
                  </div>
                )}
                
                {subject.name === "English" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">📖</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">✍</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">📝</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">💭</span>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                {!loading && isAdmin && (
                  <AdminFileUpload 
                    category={`class-9-10-${subject.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    title={`Upload for ${subject.name}`}
                  />
                )}
                <FileList 
                  category={`class-9-10-${subject.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  title={`${subject.name} Materials`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class910;
