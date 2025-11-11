import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker";
import Notes from "./pages/Notes";
import Class910 from "./pages/Class910";
import Class1112 from "./pages/Class1112";
import College from "./pages/College";
import JeeGate from "./pages/JeeGate";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/class-9-10" element={<Class910 />} />
          <Route path="/class-11-12" element={<Class1112 />} />
          <Route path="/college" element={<College />} />
          <Route path="/jee-gate" element={<JeeGate />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
