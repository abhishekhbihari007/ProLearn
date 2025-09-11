import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import InstructorApplication from "./pages/InstructorApplication";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home key="home" />} />
            <Route path="/about" element={<About key="about" />} />
            <Route path="/courses" element={<Courses key="courses" />} />
            <Route path="/instructors" element={<Instructors key="instructors" />} />
            <Route path="/contact" element={<Contact key="contact" />} />
            <Route path="/signin" element={<SignIn key="signin" />} />
            <Route path="/signup" element={<SignUp key="signup" />} />
            <Route path="/become-instructor" element={<InstructorApplication key="instructor-application" />} />
            <Route path="/checkout" element={<Checkout key="checkout" />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy key="privacy-policy" />} />
            <Route path="/terms-of-service" element={<TermsOfService key="terms-of-service" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound key="notfound" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
