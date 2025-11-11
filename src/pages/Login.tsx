import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();

  const handleGoogleLogin = () => {
    toast({
      title: "Google Sign-In",
      description: "Google authentication will be implemented with backend setup",
    });
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Sign in to access your expense tracker and notes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleGoogleLogin}
            className="w-full"
            size="lg"
          >
            <Chrome className="mr-2 h-5 w-5" />
            Continue with Google
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            <p>By continuing, you agree to our Terms of Service</p>
            <p>and Privacy Policy</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
