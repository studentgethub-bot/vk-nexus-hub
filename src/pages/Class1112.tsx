import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, FlaskConical, Laptop } from "lucide-react";
import AdminFileUpload from "@/components/AdminFileUpload";
import FileList from "@/components/FileList";
import { useAuth } from "@/hooks/useAuth";

const Class1112 = () => {
  const { isAdmin, loading } = useAuth();
  
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
              <CardHeader className="relative overflow-hidden group">
                <stream.icon className={`h-10 w-10 mb-2 ${stream.color} transition-transform duration-300 group-hover:scale-110 relative z-10`} />
                <CardTitle className="text-2xl relative z-10 group-hover:scale-105 transition-transform duration-300">{stream.name}</CardTitle>
                <CardDescription className="relative z-10">Advanced concepts and problem solving</CardDescription>
                
                {/* Animated background symbols */}
                {stream.name === "Mathematics" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">∂</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">∞</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">∫</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">λ</span>
                  </div>
                )}
                
                {stream.name === "Physics" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">⚡</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">⚛</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">🔬</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">🌊</span>
                  </div>
                )}
                
                {stream.name === "Chemistry" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">🧪</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">⚗</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">H₂O</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">⚛</span>
                  </div>
                )}
                
                {stream.name === "Computer Science" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <span className="absolute top-4 left-10 text-4xl animate-[float_3s_ease-in-out_infinite]">{'<>'}</span>
                    <span className="absolute top-12 right-8 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">💻</span>
                    <span className="absolute bottom-8 left-16 text-2xl animate-[float_3.5s_ease-in-out_infinite_1s]">{ }</span>
                    <span className="absolute bottom-4 right-12 text-3xl animate-[float_4.5s_ease-in-out_infinite_1.5s]">01</span>
                  </div>
                )}
              </CardHeader>
            </Card>
          ))}
        </div>

        {!loading && isAdmin && (
          <div className="mt-8">
            <AdminFileUpload category="class-11-12" title="Upload Study Materials for Class 11-12" />
          </div>
        )}

        <div className="mt-8">
          <FileList category="class-11-12" title="Study Materials" />
        </div>
      </div>
    </div>
  );
};

export default Class1112;
