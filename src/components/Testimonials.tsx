
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Marketing Student, Class of 2024",
      content: "MSA has been instrumental in shaping my marketing career. The networking opportunities and practical workshops have given me skills that extend far beyond the classroom.",
      rating: 5,
      initials: "SW"
    },
    {
      name: "David Ochieng",
      role: "Former MSA President",
      content: "The leadership opportunities within MSA helped me develop confidence and management skills that I now use in my role as a Marketing Manager at a leading firm.",
      rating: 5,
      initials: "DO"
    },
    {
      name: "Grace Muthoni",
      role: "Digital Marketing Specialist",
      content: "Through MSA's industry partnerships, I secured an internship that turned into my dream job. The association truly bridges the gap between academia and industry.",
      rating: 5,
      initials: "GM"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the companies working more efficiently with MSA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our graduates and members are making significant impacts in marketing firms, startups, 
            and corporations across Kenya and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
