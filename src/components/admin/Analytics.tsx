import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Eye, Users, Clock, Globe } from "lucide-react";

const analyticsData = [
  {
    metric: "Page Views",
    value: "24,567",
    change: "+12.5%",
    trend: "up",
    period: "Last 30 days"
  },
  {
    metric: "Unique Visitors", 
    value: "8,432",
    change: "+8.2%",
    trend: "up",
    period: "Last 30 days"
  },
  {
    metric: "Avg. Session Duration",
    value: "3m 24s",
    change: "-2.1%", 
    trend: "down",
    period: "Last 30 days"
  },
  {
    metric: "Bounce Rate",
    value: "42.1%",
    change: "-5.3%",
    trend: "up",
    period: "Last 30 days"
  }
];

const topPages = [
  { page: "/", title: "Homepage", views: 8432, percentage: 34.3 },
  { page: "/blog/digital-strategy", title: "Digital Strategy Guide", views: 3421, percentage: 13.9 },
  { page: "/gallery", title: "Gallery", views: 2876, percentage: 11.7 },
  { page: "/blog/brand-identity", title: "Brand Identity Best Practices", views: 2234, percentage: 9.1 },
  { page: "/blog", title: "Blog Archive", views: 1876, percentage: 7.6 }
];

const trafficSources = [
  { source: "Organic Search", visitors: 4521, percentage: 53.6, color: "bg-green-500" },
  { source: "Direct", visitors: 2134, percentage: 25.3, color: "bg-blue-500" },
  { source: "Social Media", visitors: 1234, percentage: 14.6, color: "bg-purple-500" },
  { source: "Referral", visitors: 543, percentage: 6.4, color: "bg-orange-500" }
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Analytics</h2>
        <p className="text-muted-foreground">Track your website performance and user engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsData.map((data) => (
          <Card key={data.metric}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {data.metric}
              </CardTitle>
              {data.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{data.value}</div>
              <div className="flex items-center gap-2 mt-1">
                <Badge 
                  variant="secondary" 
                  className={data.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                >
                  {data.change}
                </Badge>
                <span className="text-xs text-muted-foreground">{data.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Top Pages
            </CardTitle>
            <CardDescription>Most visited pages this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{page.title}</p>
                      <p className="text-xs text-muted-foreground">{page.page}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{page.views.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{page.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{source.source}</span>
                    <span className="text-sm text-muted-foreground">{source.visitors.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Activity Summary
          </CardTitle>
          <CardDescription>Real-time insights and highlights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="text-sm text-muted-foreground">Active sessions</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-foreground">2.4s</div>
              <div className="text-sm text-muted-foreground">Avg. page load time</div>
            </div>
            <div className="p-4 rounded-lg bg-muted/30">
              <div className="text-2xl font-bold text-foreground">94.2%</div>
              <div className="text-sm text-muted-foreground">Uptime this month</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}