
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

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Users className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Off-the-shelf tools</h3>
                  <p className="text-gray-300 text-sm">
                    Our marketing team has a vast selection of industry-standard tools and resources to help you excel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-500/20 rounded-lg">
                  <Target className="h-6 w-6 text-teal-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Low-code platform</h3>
                  <p className="text-gray-300 text-sm">
                    Create amazing marketing campaigns using modern digital tools and platforms with minimal technical barriers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Traditional development</h3>
                  <p className="text-gray-300 text-sm">
                    Master both traditional and cutting-edge marketing methodologies for a well-rounded education.
                  </p>
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
