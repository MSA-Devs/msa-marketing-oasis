
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A new paradigm for custom
            <br />
            business software
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We combine the latest business intelligence and modern business intelligence to deliver 
            exceptional software solutions that transform the way you work.
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">
            Get Started
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Service cards */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Call Manager Service
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Streamline your customer communications with our advanced call management system. 
                      Track calls, manage contacts, and improve customer satisfaction.
                    </p>
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=120&fit=crop&crop=center" 
                        alt="Call management interface" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Modern Design
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Clean, intuitive interfaces that enhance user experience and drive engagement. 
                      Our designs are built with modern aesthetics and functionality in mind.
                    </p>
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=120&fit=crop&crop=center" 
                        alt="Modern design interface" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Development section */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Rapid Development
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">User Experience</span>
                    <span className="text-gray-900 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Performance</span>
                    <span className="text-gray-900 font-medium">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Security</span>
                    <span className="text-gray-900 font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Our development process focuses on rapid prototyping and iterative improvements 
                  to deliver high-quality solutions quickly and efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Analytics Dashboard
                </h3>
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center" 
                    alt="Analytics dashboard" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Comprehensive analytics and reporting tools to help you make data-driven decisions 
                  and track your business performance effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
