import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  Filter,
  PieChart,
  Activity
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  LineChart,
  Line
} from "recharts";

const morbidityData = [
  { system: "Respiratory", namaste: 145, whoAyurveda: 89, icd11: 234 },
  { system: "Digestive", namaste: 198, whoAyurveda: 156, icd11: 187 },
  { system: "Nervous", namaste: 87, whoAyurveda: 67, icd11: 123 },
  { system: "Circulatory", namaste: 156, whoAyurveda: 134, icd11: 198 },
  { system: "Musculoskeletal", namaste: 98, whoAyurveda: 76, icd11: 145 },
];

const trendData = [
  { month: "Jan", encounters: 1247, dualCoding: 89 },
  { month: "Feb", encounters: 1356, dualCoding: 91 },
  { month: "Mar", encounters: 1298, dualCoding: 88 },
  { month: "Apr", encounters: 1445, dualCoding: 93 },
  { month: "May", encounters: 1523, dualCoding: 95 },
  { month: "Jun", encounters: 1634, dualCoding: 97 },
];

const systemUsageData = [
  { name: "NAMASTE", value: 35, color: "#10b981" },
  { name: "WHO Ayurveda", value: 28, color: "#2563eb" },
  { name: "ICD-11 TM2", value: 22, color: "#f59e0b" },
  { name: "ICD-11 Bio", value: 15, color: "#ef4444" },
];

export default function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Morbidity trends and terminology usage analytics
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="medical">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Encounters</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9,503</div>
            <p className="text-xs text-success">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dual Coding Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.3%</div>
            <p className="text-xs text-success">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Coverage</CardTitle>
            <PieChart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4/4</div>
            <p className="text-xs text-muted-foreground">All systems active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mapping Accuracy</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.7%</div>
            <p className="text-xs text-success">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +1.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Morbidity by System */}
        <Card>
          <CardHeader>
            <CardTitle>Morbidity Trends by System</CardTitle>
            <CardDescription>
              Distribution of health conditions across medical systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={morbidityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="system" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="namaste" fill="hsl(var(--accent))" name="NAMASTE" />
                <Bar dataKey="whoAyurveda" fill="hsl(var(--primary))" name="WHO Ayurveda" />
                <Bar dataKey="icd11" fill="hsl(var(--warning))" name="ICD-11" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* System Usage Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Terminology System Usage</CardTitle>
            <CardDescription>
              Distribution of diagnosis entries by terminology system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsPieChart>
                <RechartsPieChart
                  data={systemUsageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {systemUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </RechartsPieChart>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 mt-4">
              {systemUsageData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trend Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
          <CardDescription>
            Encounter volume and dual coding rate over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="encounters" fill="hsl(var(--primary))" name="Encounters" />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="dualCoding"
                stroke="hsl(var(--accent))"
                strokeWidth={3}
                name="Dual Coding %"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle>System Health & Performance</CardTitle>
          <CardDescription>
            Real-time status of integrated terminology systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">NAMASTE API</p>
                <p className="text-sm text-muted-foreground">Response: 120ms</p>
              </div>
              <Badge variant="default">Online</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">WHO Ayurveda</p>
                <p className="text-sm text-muted-foreground">Response: 85ms</p>
              </div>
              <Badge variant="default">Online</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">ICD-11 TM2</p>
                <p className="text-sm text-muted-foreground">Response: 95ms</p>
              </div>
              <Badge variant="default">Online</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">ICD-11 Bio</p>
                <p className="text-sm text-muted-foreground">Response: 78ms</p>
              </div>
              <Badge variant="default">Online</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
