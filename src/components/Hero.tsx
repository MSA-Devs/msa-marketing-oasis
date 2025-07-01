
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden font-inter">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center space-x-3 bg-purple-500/20 backdrop-blur-sm px-5 py-3 rounded-full border border-purple-400/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-purple-200 text-sm font-medium font-poppins">David</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white font-poppins">
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
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-xl font-semibold shadow-xl font-inter">
                Start Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl font-semibold font-inter"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Floating Profiles with Circling Lines */}
          <div className="relative h-[600px] lg:h-[650px]">
            {/* Central Circle with Enhanced Stats */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center z-30 shadow-2xl">
              <div className="text-white text-5xl font-bold font-poppins">20k+</div>
              <div className="text-white/70 text-sm font-medium font-inter">Specialists</div>
              <div className="mt-2 flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>

            {/* Enhanced Floating Profile Circles */}
            <div className="absolute top-16 right-20 w-20 h-20 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b605?w=80&h=80&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-40 left-12 w-16 h-16 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-300 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-40 right-12 w-20 h-20 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-500 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-20 left-20 w-14 h-14 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-700 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-24 left-40 w-12 h-12 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-1000 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-32 left-40 w-18 h-18 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-1200 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=72&h=72&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-48 right-40 w-16 h-16 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-1500 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=64&h=64&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Enhanced Connecting Lines Animation with Multiple Circles */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
              
              {/* Outer rotating circle */}
              <circle cx="50%" cy="50%" r="140" fill="none" stroke="url(#lineGradient1)" strokeWidth="1.5" strokeDasharray="8,4">
                <animateTransform attributeName="transform" type="rotate" values="0 50% 50%;360 50% 50%" dur="25s" repeatCount="indefinite"/>
              </circle>
              
              {/* Middle rotating circle */}
              <circle cx="50%" cy="50%" r="100" fill="none" stroke="url(#lineGradient2)" strokeWidth="1" strokeDasharray="6,3">
                <animateTransform attributeName="transform" type="rotate" values="360 50% 50%;0 50% 50%" dur="20s" repeatCount="indefinite"/>
              </circle>
              
              {/* Inner rotating circle */}
              <circle cx="50%" cy="50%" r="70" fill="none" stroke="url(#lineGradient3)" strokeWidth="0.8" strokeDasharray="4,2">
                <animateTransform attributeName="transform" type="rotate" values="0 50% 50%;360 50% 50%" dur="15s" repeatCount="indefinite"/>
              </circle>
              
              {/* Connecting lines to profiles */}
              <g stroke="url(#lineGradient1)" strokeWidth="0.5" opacity="0.6">
                <line x1="50%" y1="50%" x2="85%" y2="20%">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="50%" x2="15%" y2="35%">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                </line>
                <line x1="50%" y1="50%" x2="85%" y2="75%">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="1s"/>
                </line>
                <line x1="50%" y1="50%" x2="20%" y2="85%">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                </line>
                <line x1="50%" y1="50%" x2="35%" y2="25%">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="2s"/>
                </line>
                <line x1="50%" y1="50%" x2="35%" y2="75%">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                </line>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Partner Logos */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center space-x-16 opacity-50">
            <div className="text-white font-semibold text-lg font-poppins">Dreamure</div>
            <div className="text-white font-semibold text-lg font-poppins">SWITCH.WIN</div>
            <div className="text-white font-semibold text-lg font-poppins flex items-center">
              <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
              Sphere
            </div>
            <div className="text-white font-semibold text-lg font-poppins">PinSpace</div>
            <div className="text-white font-semibold text-lg font-poppins">Visionix</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
