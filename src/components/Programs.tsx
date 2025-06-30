
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Globe, Award } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum support, study groups, and academic resources to help students excel in their marketing studies.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "Industry Partnerships",
      description: "Connect with leading marketing professionals and companies for internships, mentorship, and career opportunities.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "Global Networking",
      description: "Build connections with marketing students and professionals worldwide through our international programs.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Workshops, seminars, and hands-on projects to develop practical marketing skills and industry expertise.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A new paradigm for custom business software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine the flexibility of code platforms with the speed of low-code solutions to deliver 
            exceptional marketing education and professional development opportunities.
          </p>
          <Button className="mt-8 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3">
            Learn more
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${program.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
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
