import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Shield, 
  CheckCircle, 
  ArrowLeft,
  Award,
  Clock,
  Users,
  Star
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, enrollInCourse } = useAuth();
  const { toast } = useToast();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Get course data from location state
  const course = location.state?.course;

  // Redirect if no course data
  if (!course) {
    navigate("/courses");
    return null;
  }

  const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit/Debit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
      popular: true
    },
    {
      id: "upi",
      name: "UPI",
      icon: Smartphone,
      description: "Google Pay, PhonePe, Paytm, BHIM",
      popular: true
    },
    {
      id: "net-banking",
      name: "Net Banking",
      icon: Building2,
      description: "All major banks supported"
    },
    {
      id: "wallet",
      name: "Digital Wallet",
      icon: Shield,
      description: "Paytm Wallet, Mobikwik, Freecharge"
    }
  ];

  const handlePayment = async () => {
    if (!selectedPaymentMethod) {
      toast({
        title: "Select Payment Method",
        description: "Please choose a payment method to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to complete your purchase.",
        variant: "destructive",
      });
      navigate("/signin");
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Enroll user in course
      const success = await enrollInCourse(course.title);
      
      if (success) {
        toast({
          title: "Payment Successful!",
          description: `You have successfully enrolled in "${course.title}".`,
          variant: "default",
        });
        navigate("/courses");
      } else {
        toast({
          title: "Payment Failed",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/courses")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
            <p className="text-muted-foreground mt-2">Complete your course enrollment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Course Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Course Info */}
                  <div className="flex gap-4">
                    <div 
                      className={`w-24 h-24 rounded-lg ${course.image} bg-cover bg-center bg-no-repeat flex-shrink-0`}
                      style={{
                        backgroundImage: course.backgroundImage ? `url(${course.backgroundImage})` : undefined
                      }}
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-muted-foreground mb-3">by {course.instructor}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students.toLocaleString()} students
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Course Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Lifetime access to course content</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">24/7 student support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Mobile and desktop access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">30-day money-back guarantee</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Choose Payment Method</CardTitle>
                  <CardDescription>Select your preferred payment option</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <div
                          key={method.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            selectedPaymentMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedPaymentMethod(method.id)}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              selectedPaymentMethod === method.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-medium">{method.name}</h4>
                                {method.popular && (
                                  <Badge variant="secondary" className="text-xs">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {method.description}
                              </p>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              selectedPaymentMethod === method.id
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            }`}>
                              {selectedPaymentMethod === method.id && (
                                <div className="w-full h-full rounded-full bg-white scale-50" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Course Price</span>
                    <span className="font-medium">{course.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span className="font-medium">₹99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="font-medium">
                      ₹{Math.round((parseInt(course.price.replace(/[₹,]/g, '')) + 99) * 0.18)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                      ₹{Math.round((parseInt(course.price.replace(/[₹,]/g, '')) + 99) * 1.18)}
                    </span>
                  </div>

                  <Button 
                    className="w-full mt-6" 
                    size="lg"
                    onClick={handlePayment}
                    disabled={isProcessing || !selectedPaymentMethod}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Processing Payment...
                      </>
                    ) : (
                      `Pay ₹${Math.round((parseInt(course.price.replace(/[₹,]/g, '')) + 99) * 1.18)}`
                    )}
                  </Button>

                  <div className="text-center text-xs text-muted-foreground">
                    <p>🔒 Secure payment powered by Razorpay</p>
                    <p>30-day money-back guarantee</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
