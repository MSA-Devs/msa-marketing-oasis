
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
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white font-poppins">
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

          {/* Right Content - Enhanced Floating Profiles with Advanced Circling Lines */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">
            {/* Central Circle with Enhanced Stats */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center z-30 shadow-2xl">
              <div className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-poppins">20k+</div>
              <div className="text-white/70 text-xs md:text-sm font-medium font-inter">Specialists</div>
              <div className="mt-2 flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>

            {/* Enhanced Floating Profile Circles with Responsive Positioning */}
            <div className="absolute top-8 md:top-16 right-12 md:right-20 w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b605?w=80&h=80&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-32 md:top-40 left-6 md:left-12 w-12 h-12 md:w-16 md:h-16 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-300 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-32 md:bottom-40 right-6 md:right-12 w-16 h-16 md:w-20 md:h-20 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-500 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-12 md:bottom-20 left-12 md:left-20 w-12 h-12 md:w-14 md:h-14 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-700 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=56&h=56&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-16 md:top-24 left-28 md:left-40 w-10 h-10 md:w-12 md:h-12 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-1000 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-24 md:bottom-32 left-28 md:left-40 w-14 h-14 md:w-18 md:h-18 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-1200 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=72&h=72&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-36 md:top-48 right-28 md:right-40 w-12 h-12 md:w-16 md:h-16 bg-white/15 backdrop-blur-md rounded-full border border-white/30 overflow-hidden animate-bounce delay-1500 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=64&h=64&fit=crop&crop=face" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Enhanced Connecting Lines Animation with Advanced Gradients and Responsiveness */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
              <defs>
                {/* Advanced Gradient Definitions */}
                <radialGradient id="pulseGradient1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8"/>
                  <stop offset="30%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6"/>
                  <stop offset="70%" stopColor="rgb(236, 72, 153)" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0.8"/>
                </radialGradient>
                
                <radialGradient id="pulseGradient2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.7"/>
                  <stop offset="40%" stopColor="rgb(147, 51, 234)" stopOpacity="0.5"/>
                  <stop offset="80%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.7"/>
                </radialGradient>
                
                <radialGradient id="pulseGradient3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6"/>
                </radialGradient>
                
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8">
                    <animate attributeName="stop-opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite"/>
                  </stop>
                  <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6">
                    <animate attributeName="stop-opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                  </stop>
                  <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.8">
                    <animate attributeName="stop-opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" begin="1s"/>
                  </stop>
                </linearGradient>
              </defs>
              
              {/* Responsive Outer rotating circle with enhanced gradient */}
              <circle cx="50%" cy="50%" r="120" fill="none" stroke="url(#pulseGradient1)" strokeWidth="2" strokeDasharray="12,6" className="md:block hidden">
                <animateTransform attributeName="transform" type="rotate" values="0 50% 50%;360 50% 50%" dur="30s" repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/>
              </circle>
              
              {/* Mobile version - smaller radius */}
              <circle cx="50%" cy="50%" r="90" fill="none" stroke="url(#pulseGradient1)" strokeWidth="1.5" strokeDasharray="8,4" className="md:hidden">
                <animateTransform attributeName="transform" type="rotate" values="0 50% 50%;360 50% 50%" dur="25s" repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
              </circle>
              
              {/* Enhanced Middle rotating circle */}
              <circle cx="50%" cy="50%" r="85" fill="none" stroke="url(#pulseGradient2)" strokeWidth="1.5" strokeDasharray="8,4" className="md:block hidden">
                <animateTransform attributeName="transform" type="rotate" values="360 50% 50%;0 50% 50%" dur="25s" repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" begin="1s"/>
              </circle>
              
              {/* Mobile middle circle */}
              <circle cx="50%" cy="50%" r="65" fill="none" stroke="url(#pulseGradient2)" strokeWidth="1" strokeDasharray="6,3" className="md:hidden">
                <animateTransform attributeName="transform" type="rotate" values="360 50% 50%;0 50% 50%" dur="20s" repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
              </circle>
              
              {/* Enhanced Inner rotating circle */}
              <circle cx="50%" cy="50%" r="55" fill="none" stroke="url(#pulseGradient3)" strokeWidth="1" strokeDasharray="6,3" className="md:block hidden">
                <animateTransform attributeName="transform" type="rotate" values="0 50% 50%;360 50% 50%" dur="20s" repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" begin="2s"/>
              </circle>
              
              {/* Mobile inner circle */}
              <circle cx="50%" cy="50%" r="40" fill="none" stroke="url(#pulseGradient3)" strokeWidth="0.8" strokeDasharray="4,2" className="md:hidden">
                <animateTransform attributeName="transform" type="rotate" values="0 50% 50%;360 50% 50%" dur="15s" repeatCount="indefinite"/>
                <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              
              {/* Enhanced Connecting lines to profiles with responsive positioning */}
              <g stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.7" className="md:block hidden">
                <line x1="50%" y1="50%" x2="85%" y2="20%">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="stroke-width" values="0.5;2;0.5" dur="4s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="50%" x2="15%" y2="35%">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite" begin="0.7s"/>
                  <animate attributeName="stroke-width" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="0.7s"/>
                </line>
                <line x1="50%" y1="50%" x2="85%" y2="75%">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite" begin="1.4s"/>
                  <animate attributeName="stroke-width" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="1.4s"/>
                </line>
                <line x1="50%" y1="50%" x2="20%" y2="85%">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite" begin="2.1s"/>
                  <animate attributeName="stroke-width" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="2.1s"/>
                </line>
                <line x1="50%" y1="50%" x2="35%" y2="25%">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite" begin="2.8s"/>
                  <animate attributeName="stroke-width" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="2.8s"/>
                </line>
                <line x1="50%" y1="50%" x2="35%" y2="75%">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite" begin="3.5s"/>
                  <animate attributeName="stroke-width" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="3.5s"/>
                </line>
                <line x1="50%" y1="50%" x2="75%" y2="40%">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="4s" repeatCount="indefinite" begin="1s"/>
                  <animate attributeName="stroke-width" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="1s"/>
                </line>
              </g>
              
              {/* Mobile connecting lines - adjusted positioning */}
              <g stroke="url(#connectionGradient)" strokeWidth="0.8" opacity="0.6" className="md:hidden">
                <line x1="50%" y1="50%" x2="80%" y2="25%">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="50%" y1="50%" x2="20%" y2="40%">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                </line>
                <line x1="50%" y1="50%" x2="80%" y2="70%">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" begin="1s"/>
                </line>
                <line x1="50%" y1="50%" x2="25%" y2="80%">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                </line>
                <line x1="50%" y1="50%" x2="40%" y2="30%">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" begin="2s"/>
                </line>
                <line x1="50%" y1="50%" x2="40%" y2="70%">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" begin="2.5s"/>
                </line>
              </g>
              
              {/* Pulsing connection points */}
              <g fill="url(#pulseGradient1)" opacity="0.8">
                <circle cx="85%" cy="20%" r="2" className="md:block hidden">
                  <animate attributeName="r" values="1;4;1" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="15%" cy="35%" r="2" className="md:block hidden">
                  <animate attributeName="r" values="1;4;1" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <circle cx="85%" cy="75%" r="2" className="md:block hidden">
                  <animate attributeName="r" values="1;4;1" dur="2s" repeatCount="indefinite" begin="1s"/>
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1s"/>
                </circle>
                <circle cx="20%" cy="85%" r="2" className="md:block hidden">
                  <animate attributeName="r" values="1;4;1" dur="2s" repeatCount="indefinite" begin="1.5s"/>
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.5s"/>
                </circle>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Partner Logos with Responsive Design */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center space-x-8 md:space-x-16 opacity-50 overflow-x-auto">
            <div className="text-white font-semibold text-base md:text-lg font-poppins whitespace-nowrap">Dreamure</div>
            <div className="text-white font-semibold text-base md:text-lg font-poppins whitespace-nowrap">SWITCH.WIN</div>
            <div className="text-white font-semibold text-base md:text-lg font-poppins flex items-center whitespace-nowrap">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full mr-2 md:mr-3"></div>
              Sphere
            </div>
            <div className="text-white font-semibold text-base md:text-lg font-poppins whitespace-nowrap">PinSpace</div>
            <div className="text-white font-semibold text-base md:text-lg font-poppins whitespace-nowrap">Visionix</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
