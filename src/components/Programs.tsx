
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Globe, Award } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum support, study groups, and academic resources to help students excel in their marketing studies.",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop&crop=center"
    },
    {
      icon: Briefcase,
      title: "Industry Partnerships",
      description: "Connect with leading marketing professionals and companies for internships, mentorship, and career opportunities.",
      color: "from-teal-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop&crop=center"
    },
    {
      icon: Globe,
      title: "Global Networking",
      description: "Build connections with marketing students and professionals worldwide through our international programs.",
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop&crop=center"
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Workshops, seminars, and hands-on projects to develop practical marketing skills and industry expertise.",
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Marketing Education Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine academic excellence with practical industry experience to deliver 
            exceptional marketing education and professional development opportunities.
          </p>
          <Button className="mt-8 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3">
            Explore Programs
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
