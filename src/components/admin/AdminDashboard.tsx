import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Image, Users, TrendingUp, Eye, Star } from "lucide-react";

const stats = [
  {
    title: "Total Articles",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: FileText,
    description: "Published articles"
  },
  {
    title: "Gallery Items",
    value: "156",
    change: "+8%",
    trend: "up", 
    icon: Image,
    description: "Photos and media"
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+24%",
    trend: "up",
    icon: Users,
    description: "Monthly active users"
  },
  {
    title: "Page Views",
    value: "12.5K",
    change: "+18%",
    trend: "up",
    icon: Eye,
    description: "This month"
  }
];

const recentActivity = [
  { action: "New article published", item: "MSA Digital Strategy Guide", time: "2 hours ago", type: "article" },
  { action: "Gallery updated", item: "Brand Photography Collection", time: "4 hours ago", type: "gallery" },
  { action: "User registered", item: "sarah.jones@email.com", time: "6 hours ago", type: "user" },
  { action: "Article edited", item: "Content Marketing Trends", time: "1 day ago", type: "article" },
  { action: "New testimonial", item: "5-star review from Marcus T.", time: "2 days ago", type: "review" }
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                  {stat.change}
                </Badge>
                <span className="text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-sm text-muted-foreground truncate">{activity.item}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <button className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Create New Article</p>
                  <p className="text-xs text-muted-foreground">Write and publish content</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <Image className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Upload to Gallery</p>
                  <p className="text-xs text-muted-foreground">Add new photos or media</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">View Analytics</p>
                  <p className="text-xs text-muted-foreground">Check performance metrics</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors text-left">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Manage Users</p>
                  <p className="text-xs text-muted-foreground">User accounts and permissions</p>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}