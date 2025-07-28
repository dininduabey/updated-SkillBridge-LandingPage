import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import QualificationsPage from "./pages/QualificationsPage";
import QualificationsFormPage from "./pages/QualificationsFormPage";
import PostJobPage from "./pages/PostJobPage";
import LoadingPage from "./pages/LoadingPage";
import BlankPage from "./pages/BlankPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/qualifications" element={<Layout><QualificationsPage /></Layout>} />
          <Route path="/qualifications-form" element={<Layout><QualificationsFormPage /></Layout>} />
          <Route path="/post-job" element={<Layout><PostJobPage /></Layout>} />
          <Route path="/job-matching" element={<LoadingPage title="Finding Perfect Matches" message="We're analyzing your profile and matching you with the best job opportunities." />} />
          <Route path="/job-details" element={<LoadingPage title="Loading Job Details" message="Please wait while we load the complete job information." />} />
          <Route path="/logout" element={<BlankPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
