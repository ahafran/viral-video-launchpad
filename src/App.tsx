import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AIProvider } from "@/contexts/AIContext";
import ThemeToggle from "@/components/ThemeToggle";
import AIChat from "@/components/AIChat";
import Index from "./pages/Index";
import Guarantee from "./pages/Guarantee";
import PlanBasic from "./pages/PlanBasic";
import PlanStandard from "./pages/PlanStandard";
import PlanPremium from "./pages/PlanPremium";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AIProvider>
          <TooltipProvider>
            <Router>
              <ThemeToggle />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/guarantee" element={<Guarantee />} />
                <Route path="/plan-basic" element={<PlanBasic />} />
                <Route path="/plan-standard" element={<PlanStandard />} />
                <Route path="/plan-premium" element={<PlanPremium />} />
              </Routes>
              <AIChat />
              <Toaster />
            </Router>
          </TooltipProvider>
        </AIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
