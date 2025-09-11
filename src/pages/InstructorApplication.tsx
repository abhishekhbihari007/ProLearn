import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, User, Mail, Briefcase, GraduationCap, FileText, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InstructorApplication = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    specialization: "",
    courseProposal: "",
    teachingExperience: "",
    motivation: "",
    portfolio: "",
    linkedin: "",
    website: ""
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      specialization: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    const requiredFields = ['firstName', 'lastName', 'email', 'experience', 'education', 'specialization', 'courseProposal', 'teachingExperience', 'motivation'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setError("Please fill in all required fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setIsLoading(true);
      
      // Simulate application submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      // Scroll to top when form is submitted
      window.scrollTo(0, 0);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in becoming an instructor. We'll review your application and get back to you within 5-7 business days.",
      });
      
    } catch (err) {
      setError("An error occurred while submitting your application. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-white to-emerald-100">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-xl text-center p-12">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Thank you for your interest in becoming a ProLearn instructor. We'll review your application and get back to you within 5-7 business days.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Application received and under review</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>You'll receive an email confirmation shortly</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Our team will contact you within 5-7 business days</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    Back to Home
                  </Button>
                </Link>
                <Link to="/instructors">
                  <Button variant="outline" className="px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    View Instructors
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

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
        <div className="w-full max-w-4xl">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link
              to="/instructors"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Instructors
            </Link>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-xl relative overflow-hidden">
            {/* Card Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-transparent to-cyan-50/40"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/15 to-cyan-500/15 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/15 to-teal-500/15 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <CardHeader className="text-center pb-8 pt-8">
                <div className="mx-auto">
                  <img 
                    src="/PROLEARN.png" 
                    alt="ProLearn Logo" 
                    className="h-40 w-40 object-contain drop-shadow-2xl mx-auto"
                  />
                  <CardTitle className="text-4xl font-bold bg-gradient-to-r from-indigo-900 via-indigo-700 to-cyan-700 bg-clip-text text-transparent mb-4 mt-0 leading-tight">
                    Become an Instructor
                  </CardTitle>
                </div>
                <CardDescription className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Share your expertise and help thousands of learners advance their skills. Join our community of subject matter experts.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <Alert variant="destructive" className="border-red-200 bg-red-50/50 backdrop-blur-sm">
                      <AlertDescription className="text-red-700">{error}</AlertDescription>
                    </Alert>
                  )}

                  {/* Personal Information */}
                  <div className="space-y-6 p-6 bg-gradient-to-r from-indigo-50/50 to-cyan-50/50 rounded-xl border border-indigo-100/50">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <User className="h-6 w-6 text-indigo-600" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-indigo-600" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-6 p-6 bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-xl border border-purple-100/50">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-indigo-600" />
                      Professional Information
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialization" className="text-sm font-semibold text-gray-700">
                        Area of Specialization *
                      </Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300">
                          <SelectValue placeholder="Select your specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                          <SelectItem value="ai-ml">Artificial Intelligence & Machine Learning</SelectItem>
                          <SelectItem value="devops">DevOps</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="business">Business & Entrepreneurship</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-sm font-semibold text-gray-700">
                        Years of Professional Experience *
                      </Label>
                      <Input
                        id="experience"
                        name="experience"
                        type="text"
                        placeholder="e.g., 5 years in software development"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="education" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-indigo-600" />
                        Education Background *
                      </Label>
                      <Input
                        id="education"
                        name="education"
                        type="text"
                        placeholder="e.g., Bachelor's in Computer Science, Master's in Data Science"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teachingExperience" className="text-sm font-semibold text-gray-700">
                        Teaching/Training Experience *
                      </Label>
                      <Textarea
                        id="teachingExperience"
                        name="teachingExperience"
                        placeholder="Describe your teaching, training, or mentoring experience..."
                        value={formData.teachingExperience}
                        onChange={handleInputChange}
                        className="min-h-24 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Course Proposal */}
                  <div className="space-y-6 p-6 bg-gradient-to-r from-cyan-50/50 to-teal-50/50 rounded-xl border border-cyan-100/50">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <FileText className="h-6 w-6 text-indigo-600" />
                      Course Proposal
                    </h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="courseProposal" className="text-sm font-semibold text-gray-700">
                        Course Title & Description *
                      </Label>
                      <Textarea
                        id="courseProposal"
                        name="courseProposal"
                        placeholder="Describe the course you'd like to teach, including learning objectives, target audience, and key topics..."
                        value={formData.courseProposal}
                        onChange={handleInputChange}
                        className="min-h-32 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation" className="text-sm font-semibold text-gray-700">
                        Why do you want to teach on ProLearn? *
                      </Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        placeholder="Share your motivation for teaching and how you can help learners achieve their goals..."
                        value={formData.motivation}
                        onChange={handleInputChange}
                        className="min-h-24 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  {/* Portfolio & Links */}
                  <div className="space-y-6 p-6 bg-gradient-to-r from-emerald-50/50 to-green-50/50 rounded-xl border border-emerald-100/50">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                      <Upload className="h-6 w-6 text-indigo-600" />
                      Portfolio & Links
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="text-sm font-semibold text-gray-700">
                          LinkedIn Profile
                        </Label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-sm font-semibold text-gray-700">
                          Personal Website/Portfolio
                        </Label>
                        <Input
                          id="website"
                          name="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolio" className="text-sm font-semibold text-gray-700">
                        Portfolio/Work Samples
                      </Label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        type="text"
                        placeholder="Links to your work samples, GitHub, or other relevant portfolios"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-sm font-semibold text-gray-700">
                        Resume/CV (Optional)
                      </Label>
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="h-12 border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 rounded-xl transition-all duration-300"
                        disabled={isLoading}
                      />
                      {selectedFile && (
                        <p className="text-sm text-green-600">File selected: {selectedFile.name}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full h-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl relative overflow-hidden group"
                      disabled={isLoading}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            <GraduationCap className="h-5 w-5" />
                            Submit Application
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InstructorApplication;
