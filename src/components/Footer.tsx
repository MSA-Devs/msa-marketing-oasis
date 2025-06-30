
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold mb-4">MSA</div>
            <p className="text-gray-300 leading-relaxed">
              Marketing Students Association at the University of Nairobi. 
              Empowering the next generation of marketing professionals.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-blue-300 transition-colors">About MSA</a></li>
              <li><a href="#programs" className="hover:text-blue-300 transition-colors">Programs</a></li>
              <li><a href="#events" className="hover:text-blue-300 transition-colors">Events</a></li>
              <li><a href="#team" className="hover:text-blue-300 transition-colors">Leadership</a></li>
              <li><a href="#membership" className="hover:text-blue-300 transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Study Materials</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Career Center</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Industry Reports</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Mentorship</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-sm">University of Nairobi, School of Business</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm">info@msa-uon.ac.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm">+254 700 123 456</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 px-6 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Marketing Students Association, University of Nairobi. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
