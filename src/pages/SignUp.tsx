import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const SignUp = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, isLoading } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Simulate sign up process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, we'll sign them in after successful signup
      const success = await signIn(formData.email, formData.password);

      if (success) {
        toast({
          title: "Welcome to ProLearn!",
          description: "Your account has been created successfully.",
        });
        navigate("/");
      } else {
        setError("Failed to create account. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-element"></div>
        <div className="absolute bottom-20 left-40 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-element"></div>
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-element"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-slate-50/95 to-gray-100/95 backdrop-blur-xl relative overflow-hidden signin-card">
            {/* Card Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-transparent to-cyan-50/40"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/15 to-cyan-500/15 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/15 to-teal-500/15 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              {/* Responsive Layout */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Branding/Info (Hidden on small screens, visible on large) */}
                <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-start lg:items-center lg:bg-gradient-to-br lg:from-indigo-50/95 lg:to-cyan-50/95 lg:pt-20 lg:px-16 lg:pb-16 lg:relative lg:overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-teal-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="flex justify-center mb-0">
                      <img 
                        src="/PROLEARN.png" 
                        alt="ProLearn Logo" 
                        className="h-40 w-40 object-contain drop-shadow-2xl"
                      />
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-700 bg-clip-text text-transparent mb-4 leading-tight text-center">
                      Join ProLearn
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-md mx-auto font-medium">
                      Start your learning journey with expert-led courses and interactive content
                    </p>
                    
                    {/* Decorative Elements to Fill Empty Space */}
                    <div className="mt-12 space-y-6">
                      <div className="flex justify-center items-center space-x-8 opacity-40">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-300 to-cyan-300 rounded-full blur-sm"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full blur-sm"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full blur-sm"></div>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center space-x-2 text-sm text-gray-500 font-medium">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                          <span>Join 10,000+ learners worldwide</span>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center space-x-6 opacity-30">
                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-lg"></div>
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-lg"></div>
                        <div className="w-24 h-24 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 lg:py-8">
                  <CardHeader className="space-y-1 text-center pb-8 lg:hidden">
                    <div className="mx-auto mb-2 transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/PROLEARN.png" 
                        alt="ProLearn Logo" 
                        className="h-28 w-28 object-contain drop-shadow-2xl"
                      />
                    </div>
                    <CardTitle className="text-4xl font-bold bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-700 bg-clip-text text-transparent mb-4">
                      Join ProLearn
                    </CardTitle>
                    <CardDescription className="text-gray-700 text-lg leading-relaxed font-medium">
                      Create your account to start learning
                    </CardDescription>
                  </CardHeader>
                  
                  <CardHeader className="space-y-1 text-center pb-8 hidden lg:block">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-cyan-800 bg-clip-text text-transparent">
                      Create Account
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill in your details to get started
                    </CardDescription>
                  </CardHeader>
          
                  <CardContent className="px-12 pb-12 pt-8">
                    <form onSubmit={handleSubmit} className="space-y-8 signin-form">
                      {error && (
                        <Alert variant="destructive" className="border-red-200 bg-red-50/50 backdrop-blur-sm">
                          <AlertDescription className="text-red-700">{error}</AlertDescription>
                        </Alert>
                      )}

                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <User className="h-4 w-4 text-blue-500" />
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="h-16 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                            disabled={isLoading}
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <User className="h-4 w-4 text-blue-500" />
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="h-16 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-blue-500" />
                          Email Address
                        </Label>
                        <div className="relative group">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-12 h-16 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-blue-300"
                            disabled={isLoading}
                          />
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Password Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <Label htmlFor="password" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Lock className="h-4 w-4 text-blue-500" />
                            Password
                          </Label>
                          <div className="relative group">
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Create password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="pl-12 pr-12 h-16 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-blue-300"
                              disabled={isLoading}
                            />
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1 rounded-lg hover:bg-gray-100"
                              disabled={isLoading}
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Lock className="h-4 w-4 text-blue-500" />
                            Confirm Password
                          </Label>
                          <div className="relative group">
                            <Input
                              id="confirmPassword"
                              name="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm password"
                              value={formData.confirmPassword}
                              onChange={handleInputChange}
                              className="pl-12 pr-12 h-16 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group-hover:border-blue-300"
                              disabled={isLoading}
                            />
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300 p-1 rounded-lg hover:bg-gray-100"
                              disabled={isLoading}
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 pt-2">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-lg transition-all duration-300"
                        />
                        <Label htmlFor="terms" className="text-sm text-gray-600 font-medium cursor-pointer">
                          I agree to the{" "}
                          <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl relative overflow-hidden group signin-button"
                        disabled={isLoading}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Creating Account...
                            </>
                          ) : (
                            <>
                              <User className="h-5 w-5" />
                              Create Account
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Button>
                    </form>

                    <div className="mt-8 text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                          to="/signin"
                          className="text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 hover:underline"
                        >
                          Sign in here
                        </Link>
                      </p>
                    </div>

                    {/* Decorative Bottom Elements */}
                    <div className="mt-12 relative">
                      <div className="flex justify-center items-center space-x-8 opacity-30">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-200 to-cyan-200 rounded-full blur-sm"></div>
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-200 to-teal-200 rounded-full blur-sm"></div>
                        <div className="w-20 h-20 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-full blur-sm"></div>
                      </div>
                      <div className="absolute inset-0 flex justify-center items-center">
                        <div className="text-xs text-gray-400 font-medium">
                          Secure • Reliable • Professional
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
