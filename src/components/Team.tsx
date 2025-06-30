
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail, Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Emily Njoki",
      role: "President",
      bio: "Leading MSA's strategic initiatives and fostering industry partnerships.",
      initials: "EN"
    },
    {
      name: "Michael Kimani",
      role: "Vice President",
      bio: "Coordinating academic programs and student development activities.",
      initials: "MK"
    },
    {
      name: "Priscilla Auma",
      role: "Secretary",
      bio: "Managing communications and organizing community events.",
      initials: "PA"
    },
    {
      name: "Joseph Mwangi",
      role: "Treasurer",
      bio: "Overseeing financial operations and budget management.",
      initials: "JM"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our team is your team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated student leaders who make MSA a thriving community for marketing students 
            at the University of Nairobi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xl font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                    <Linkedin className="h-4 w-4 text-gray-600 hover:text-blue-600" />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-full transition-colors">
                    <Mail className="h-4 w-4 text-gray-600 hover:text-blue-600" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Leadership Team</h3>
            <p className="text-gray-600 mb-6">
              Interested in taking on a leadership role? We're always looking for passionate students 
              to help drive MSA's mission forward.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
