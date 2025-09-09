import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ChevronRight, TrendingUp } from "lucide-react";

const Courses = () => {
  const featuredCourses = [
    {
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Sarah Chen",
      category: "Technology",
      level: "Intermediate",
      duration: "8 weeks",
      students: 2456,
      rating: 4.8,
      price: "$89",
      trending: true,
      image: "bg-gradient-to-br from-purple-500 to-blue-500",
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "Michael Rodriguez",
      category: "Marketing",
      level: "Beginner",
      duration: "6 weeks",
      students: 3821,
      rating: 4.9,
      price: "$69",
      trending: false,
      image: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      title: "Financial Analysis & Investment",
      instructor: "Prof. James Wilson",
      category: "Finance",
      level: "Advanced",
      duration: "10 weeks",
      students: 1892,
      rating: 4.7,
      price: "$99",
      trending: true,
      image: "bg-gradient-to-br from-green-500 to-teal-500",
    },
  ];

  const categories = [
    "All Courses",
    "Technology",
    "Business",
    "Design",
    "Marketing",
    "Finance",
    "Personal Development",
  ];

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
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredCourses.map((course, index) => (
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
                    <Badge variant="secondary">{course.level}</Badge>
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
