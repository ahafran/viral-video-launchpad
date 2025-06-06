import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { Suspense, lazy } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy loading компонентов для code splitting
const Index = lazy(() => import("./pages/Index"));
const Guarantee = lazy(() => import("./pages/Guarantee"));
const PlanBasic = lazy(() => import("./pages/PlanBasic"));
const PlanStandard = lazy(() => import("./pages/PlanStandard"));
const PlanPremium = lazy(() => import("./pages/PlanPremium"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 минут кэширования
      gcTime: 10 * 60 * 1000, // 10 минут в памяти
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Router>
            <ThemeToggle />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/guarantee" element={<Guarantee />} />
                <Route path="/plan-basic" element={<PlanBasic />} />
                <Route path="/plan-standard" element={<PlanStandard />} />
                <Route path="/plan-premium" element={<PlanPremium />} />
              </Routes>
            </Suspense>
            <Toaster />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
