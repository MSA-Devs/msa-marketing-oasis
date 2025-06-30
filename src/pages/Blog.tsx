import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Digital Marketing Trends for 2024: What Students Need to Know",
      excerpt: "Explore the latest digital marketing trends and how they impact career opportunities for marketing students.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Digital Marketing",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Your Personal Brand as a Marketing Student",
      excerpt: "Learn essential strategies for creating a strong personal brand that will set you apart in the competitive marketing industry.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&crop=center",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "Career Development",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Networking Events: Making Meaningful Connections",
      excerpt: "Discover how to maximize networking opportunities and build lasting professional relationships in the marketing field.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop&crop=center",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Networking",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Data Analytics in Modern Marketing: A Student's Guide",
      excerpt: "Understanding the role of data analytics in marketing decision-making and essential tools every student should know.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      author: "David Park",
      date: "March 8, 2024",
      category: "Analytics",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Social Media Marketing: Best Practices for Students",
      excerpt: "Master the art of social media marketing with practical tips and strategies that work in today's digital landscape.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      category: "Social Media",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Internship Success: Making the Most of Your Experience",
      excerpt: "Practical advice on how to excel in marketing internships and turn them into full-time opportunities.",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&h=400&fit=crop&crop=center",
      author: "Alex Kumar",
      date: "March 3, 2024",
      category: "Career Development",
      readTime: "5 min read"
    }
  ];

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">MSA Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and opportunities in marketing. 
            Written by students, for students.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Posts Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    {post.readTime}
                  </div>
                  <Button className="w-full mt-4 bg-gray-900 hover:bg-gray-800">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Stay in the Loop
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest marketing insights, 
                career tips, and MSA updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
