
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Annual Marketing Summit 2024",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center",
      category: "events",
      date: "March 2024",
      location: "University of Nairobi",
      attendees: "200+"
    },
    {
      id: 2,
      title: "Digital Marketing Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center",
      category: "workshops",
      date: "February 2024",
      location: "Business School",
      attendees: "80+"
    },
    {
      id: 3,
      title: "Student Innovation Challenge",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&crop=center",
      category: "competitions",
      date: "January 2024",
      location: "Innovation Hub",
      attendees: "150+"
    },
    {
      id: 4,
      title: "Industry Networking Night",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=center",
      category: "networking",
      date: "March 2024",
      location: "Nairobi Hotel",
      attendees: "120+"
    },
    {
      id: 5,
      title: "Brand Strategy Masterclass",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop&crop=center",
      category: "workshops",
      date: "February 2024",
      location: "Conference Hall A",
      attendees: "90+"
    },
    {
      id: 6,
      title: "MSA Leadership Retreat",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&crop=center",
      category: "events",
      date: "December 2023",
      location: "Karen Country Club",
      attendees: "45+"
    },
    {
      id: 7,
      title: "Social Media Marketing Bootcamp",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      category: "workshops",
      date: "January 2024",
      location: "Digital Lab",
      attendees: "60+"
    },
    {
      id: 8,
      title: "Marketing Case Study Competition",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      category: "competitions",
      date: "November 2023",
      location: "Main Auditorium",
      attendees: "100+"
    },
    {
      id: 9,
      title: "Alumni Mentorship Program Launch",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop&crop=center",
      category: "networking",
      date: "October 2023",
      location: "Alumni Center",
      attendees: "85+"
    }
  ];

  const categories = [
    { key: "all", label: "All Events" },
    { key: "events", label: "Events" },
    { key: "workshops", label: "Workshops" },
    { key: "competitions", label: "Competitions" },
    { key: "networking", label: "Networking" }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">MSA Gallery</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our vibrant community through moments captured at events, workshops, 
            competitions, and networking sessions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              variant={activeFilter === category.key ? "default" : "outline"}
              className={`
                px-6 py-2 rounded-full transition-all duration-300
                ${activeFilter === category.key 
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg" 
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Events Hosted</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
            <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
            <div className="text-gray-600">Students Reached</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
            <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
            <div className="text-gray-600">Industry Partners</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 border-0">
            <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
            <div className="text-gray-600">Awards Won</div>
          </Card>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 capitalize">
                  {item.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-green-500" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{item.attendees} attendees</span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-gray-900 hover:bg-gray-800 group-hover:bg-blue-600 group-hover:hover:bg-blue-700 transition-colors">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-0">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Join Our Next Event
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Don't miss out on our upcoming workshops, networking sessions, and competitions. 
                Be part of the MSA community and accelerate your marketing career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                  View Upcoming Events
                </Button>
                <Button variant="outline" className="px-8 py-3 border-gray-300 hover:bg-gray-50">
                  Become a Member
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
