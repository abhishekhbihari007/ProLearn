import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ChevronRight, TrendingUp, Award } from "lucide-react";
import { useState } from "react";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  

  const featuredCourses = [
    {
      title: "AI & Designing Technology",
      instructor: "Dr. Ananya Gupta",
      category: "Technology",
      level: "Advanced",
      duration: "12 months",
      students: 3240,
      rating: 4.9,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-blue-500 to-purple-500",
      certification: true,
    },
    {
      title: "AI & Arts",
      instructor: "Vikram Singh",
      category: "Technology",
      level: "Advanced",
      duration: "12 months",
      students: 2890,
      rating: 4.8,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-purple-500 to-pink-500",
      certification: true,
    },
    {
      title: "AI & Business",
      instructor: "Suresh Mehta",
      category: "Business",
      level: "Advanced",
      duration: "12 months",
      students: 2150,
      rating: 4.8,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-green-500 to-blue-500",
      certification: true,
    },
    {
      title: "AI & Management Studies",
      instructor: "Dr. Ananya Gupta",
      category: "Business",
      level: "Advanced",
      duration: "12 months",
      students: 1980,
      rating: 4.7,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-indigo-500 to-purple-500",
      certification: true,
    },
    {
      title: "AI & Law",
      instructor: "Dr. Rajesh Kumar",
      category: "Artificial Intelligence",
      level: "Advanced",
      duration: "12 months",
      students: 1650,
      rating: 4.6,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-red-500 to-orange-500",
      certification: true,
    },
    {
      title: "IP Law",
      instructor: "Dr. Priya Sharma",
      category: "Artificial Intelligence",
      level: "Advanced",
      duration: "12 months",
      students: 1420,
      rating: 4.5,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-amber-500 to-yellow-500",
      certification: true,
    },
    {
      title: "AI & Blockchain",
      instructor: "Vikram Singh",
      category: "Artificial Intelligence",
      level: "Advanced",
      duration: "12 months",
      students: 1890,
      rating: 4.8,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-cyan-500 to-blue-500",
      certification: true,
    },
    {
      title: "AI & Data Analytics",
      instructor: "Dr. Ananya Gupta",
      category: "Artificial Intelligence",
      level: "Advanced",
      duration: "12 months",
      students: 2230,
      rating: 4.9,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-emerald-500 to-teal-500",
      certification: true,
    },
    {
      title: "Digital Forensics",
      instructor: "Dr. Rajesh Kumar",
      category: "Healthcare",
      level: "Advanced",
      duration: "12 months",
      students: 1560,
      rating: 4.7,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-slate-500 to-gray-500",
      certification: true,
    },
    {
      title: "Medical Coding",
      instructor: "Dr. Priya Sharma",
      category: "Healthcare",
      level: "Advanced",
      duration: "12 months",
      students: 2780,
      rating: 4.8,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-rose-500 to-pink-500",
      certification: true,
    },
    {
      title: "Bioentrepreneurship",
      instructor: "Dr. Ananya Gupta",
      category: "Healthcare",
      level: "Advanced",
      duration: "12 months",
      students: 1920,
      rating: 4.6,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-lime-500 to-green-500",
      certification: true,
    },
    {
      title: "Industrial Fermentation Technology",
      instructor: "Dr. Rajesh Kumar",
      category: "Healthcare",
      level: "Advanced",
      duration: "12 months",
      students: 1680,
      rating: 4.7,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-orange-500 to-amber-500",
      certification: true,
    },
    {
      title: "XR Gaming",
      instructor: "Vikram Singh",
      category: "Emerging Technologies",
      level: "Advanced",
      duration: "12 months",
      students: 2100,
      rating: 4.8,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-violet-500 to-purple-500",
      certification: true,
    },
    {
      title: "AR and Mixed Reality",
      instructor: "Dr. Ananya Gupta",
      category: "Emerging Technologies",
      level: "Advanced",
      duration: "12 months",
      students: 1850,
      rating: 4.7,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-indigo-500 to-blue-500",
      certification: true,
    },
    {
      title: "Virtual & Augmented Reality Engineering",
      instructor: "Suresh Mehta",
      category: "Emerging Technologies",
      level: "Advanced",
      duration: "12 months",
      students: 1950,
      rating: 4.9,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-cyan-500 to-teal-500",
      certification: true,
    },
    {
      title: "Digital Marketing Strategy",
      instructor: "Dr. Priya Sharma",
      category: "Agriculture",
      level: "Advanced",
      duration: "12 months",
      students: 3200,
      rating: 4.8,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-pink-500 to-rose-500",
      certification: true,
    },
    {
      title: "Social Media Marketing",
      instructor: "Vikram Singh",
      category: "Agriculture",
      level: "Advanced",
      duration: "12 months",
      students: 2850,
      rating: 4.7,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-blue-500 to-indigo-500",
      certification: true,
    },
    {
      title: "Marketing Analytics",
      instructor: "Dr. Ananya Gupta",
      category: "Agriculture",
      level: "Advanced",
      duration: "12 months",
      students: 2450,
      rating: 4.9,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-emerald-500 to-green-500",
      certification: true,
    },
    {
      title: "Precision Agriculture",
      instructor: "Dr. Rajesh Kumar",
      category: "Agriculture",
      level: "Advanced",
      duration: "12 months",
      students: 2100,
      rating: 4.8,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-green-500 to-lime-500",
      certification: true,
    },
    {
      title: "Agriculture Drones",
      instructor: "Vikram Singh",
      category: "Agriculture",
      level: "Advanced",
      duration: "12 months",
      students: 1850,
      rating: 4.7,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-sky-500 to-blue-500",
      certification: true,
    },
    {
      title: "Agriculture Robotics",
      instructor: "Dr. Ananya Gupta",
      category: "Agriculture",
      level: "Advanced",
      duration: "12 months",
      students: 1950,
      rating: 4.9,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-orange-500 to-red-500",
      certification: true,
    },
    {
      title: "Agri Entrepreneurship",
      instructor: "Suresh Mehta",
      category: "Agriculture",
      level: "Advanced",
      duration: "12 months",
      students: 2200,
      rating: 4.6,
      price: "₹4,999",
      trending: true,
      image: "bg-gradient-to-br from-yellow-500 to-orange-500",
      certification: true,
    },
  ];

  const categories = [
    "All Courses",
    "Technology",
    "Business",
    "Agriculture",
    "Healthcare",
    "Emerging Technologies",
    "Artificial Intelligence",
  ];

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === "All Courses" 
    ? featuredCourses 
    : featuredCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Courses Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Our Courses</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our comprehensive catalog of expert-led courses designed to accelerate your career
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredCourses.map((course, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Course Image */}
                  <div className={`h-48 ${course.image} relative`}>
                    {course.trending && (
                      <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="text-sm opacity-90">{course.category}</p>
                        <p className="text-2xl font-bold">{course.title}</p>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>by {course.instructor}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {course.rating}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      {course.certification && (
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          <Award className="h-3 w-3 mr-1" />
                          Certification
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button variant="primary" className="group">
                      Enroll Now
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Browse All Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Upcoming Courses Banner */}
            <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Upcoming Courses</h3>
              <p className="mb-6 opacity-90">
                Stay tuned for new course announcements and early registration opportunities
              </p>
              <Button variant="secondary" size="lg">
                Get Notified
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
