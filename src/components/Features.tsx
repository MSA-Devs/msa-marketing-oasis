
import { CheckCircle, BarChart3, Users2, Lightbulb } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get the tools you need, tailored to the way you work
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                MSA provides comprehensive resources and support systems designed specifically for marketing students 
                at the University of Nairobi, helping you succeed in both academic and professional pursuits.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    Our members consistently achieve higher academic performance and secure better internship and job opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Data-Driven Approach</h3>
                  <p className="text-gray-600">
                    Learn modern marketing analytics and data interpretation skills that are essential in today's market.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users2 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Join a vibrant community of like-minded marketing students and industry professionals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Innovation Focus</h3>
                  <p className="text-gray-600">
                    Stay ahead of marketing trends with our focus on emerging technologies and innovative strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl p-8 h-[500px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto flex items-center justify-center">
                  <Users2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">MSA Community</h3>
                <p className="text-gray-600 max-w-sm">
                  Connect, learn, and grow with fellow marketing students and industry professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
