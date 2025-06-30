
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <nav className="flex items-center justify-between mb-16">
          <div className="text-2xl font-bold">MSA</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-300 transition-colors">About</a>
            <a href="#programs" className="hover:text-blue-300 transition-colors">Programs</a>
            <a href="#events" className="hover:text-blue-300 transition-colors">Events</a>
            <a href="#team" className="hover:text-blue-300 transition-colors">Team</a>
          </div>
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            Join MSA
          </Button>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              The future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                marketing is student
              </span>
              driven
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Empowering the next generation of marketing professionals through innovative programs, 
              industry connections, and hands-on experience at the University of Nairobi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center" 
              alt="Marketing students collaborating" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">500+ Members</p>
                  <p className="text-sm text-gray-300">Active Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
