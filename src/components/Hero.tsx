
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-purple-200 text-sm font-medium">David</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Unlock Top
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Marketing Talent
              </span>
              <br />
              You Thought Was
              <br />
              Out of Reach –
              <br />
              <span className="text-yellow-300">Now Just One</span>
              <br />
              <span className="text-yellow-300">Click Away!</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-xl">
                Start Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Profiles Animation */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Central Circle with Stats */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center z-20">
              <div className="text-white text-4xl font-bold">20k+</div>
              <div className="text-white/70 text-sm">Specialists</div>
            </div>

            {/* Floating Profile Circles */}
            <div className="absolute top-12 right-16 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden animate-bounce">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b605?w=64&h=64&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-32 left-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden animate-bounce delay-300">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-32 right-8 w-18 h-18 bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden animate-bounce delay-500">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=72&h=72&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-16 left-16 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden animate-bounce delay-700">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-20 left-32 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden animate-bounce delay-1000">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-24 left-32 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden animate-bounce delay-1200">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-40 right-32 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden animate-bounce delay-1500">
              <img 
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=56&h=56&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Connecting Lines Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              <circle cx="50%" cy="50%" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5">
                <animateTransform attributeName="transform" type="rotate" values="0 50% 50%;360 50% 50%" dur="20s" repeatCount="indefinite"/>
              </circle>
              <circle cx="50%" cy="50%" r="80" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="3,3">
                <animateTransform attributeName="transform" type="rotate" values="360 50% 50%;0 50% 50%" dur="15s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Partner Logos */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center space-x-12 opacity-40">
            <div className="text-white font-semibold">Dreamure</div>
            <div className="text-white font-semibold">SWITCH.WIN</div>
            <div className="text-white font-semibold flex items-center">
              <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
              Sphere
            </div>
            <div className="text-white font-semibold">PinSpace</div>
            <div className="text-white font-semibold">Visionix</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
