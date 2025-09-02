import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { 
  Activity, 
  Users, 
  FileText, 
  TrendingUp, 
  Stethoscope, 
  Search, 
  BarChart3,
  Shield,
  Globe,
  Award,
  CheckCircle
} from "lucide-react"

const encounterData = [
  { month: 'Jan', encounters: 245, dualCoded: 189 },
  { month: 'Feb', encounters: 267, dualCoded: 203 },
  { month: 'Mar', encounters: 289, dualCoded: 234 },
  { month: 'Apr', encounters: 312, dualCoded: 267 },
  { month: 'May', encounters: 334, dualCoded: 289 },
  { month: 'Jun', encounters: 356, dualCoded: 312 }
]

const systemData = [
  { name: 'Digestive', value: 32, color: '#8b5cf6' },
  { name: 'Respiratory', value: 28, color: '#06b6d4' },
  { name: 'Musculoskeletal', value: 25, color: '#10b981' },
  { name: 'Neurological', value: 15, color: '#f59e0b' }
]

export default function Dashboard() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-lg">
        <div className="flex justify-center">
          <img 
            src="/logoo.png" 
            alt="Government of India Emblem" 
            className="h-32 w-104  object-contain"
          />
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          National Healthcare EMR
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Government of India's Integrated Electronic Medical Records System
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Empowering healthcare through standardized terminology management and dual coding compliance
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary px-3 py-1">NAMASTE Compliant</Badge>
          <Badge variant="secondary" className="bg-secondary/10 text-secondary px-3 py-1">WHO Ayurveda</Badge>
          <Badge variant="secondary" className="bg-accent/10 text-accent px-3 py-1">ICD-11 TM2</Badge>
          <Badge variant="secondary" className="bg-muted text-muted-foreground px-3 py-1">ABHA Integrated</Badge>
        </div>
      </div>

      {/* Government Features */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="text-center hover-scale">
          <CardHeader>
            <Shield className="h-12 w-12 mx-auto text-primary" />
            <CardTitle>Secure & Compliant</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              ABHA authentication with full compliance to India's EHR Standards 2016
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center hover-scale">
          <CardHeader>
            <Globe className="h-12 w-12 mx-auto text-secondary" />
            <CardTitle>International Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              WHO-compliant terminology integration with traditional medicine systems
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center hover-scale">
          <CardHeader>
            <Award className="h-12 w-12 mx-auto text-accent" />
            <CardTitle>Digital India Initiative</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Part of Digital India's healthcare transformation mission
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Encounters</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,356</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Patients</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +8% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dual Coding Compliance</CardTitle>
            <CheckCircle className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">
              System uptime
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Encounters & Dual Coding</CardTitle>
            <CardDescription>
              Track encounters and dual coding compliance over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={encounterData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <Tooltip />
                <Bar dataKey="encounters" fill="hsl(var(--primary))" radius={4} />
                <Bar dataKey="dualCoded" fill="hsl(var(--secondary))" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Morbidity by System</CardTitle>
            <CardDescription>
              Distribution of conditions by body system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={systemData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {systemData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Healthcare Services</CardTitle>
          <CardDescription>Access core EMR functionality</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="h-auto p-6 flex flex-col gap-3" variant="outline" size="lg">
              <Search className="h-8 w-8 text-primary" />
              <div className="text-center">
                <div className="font-medium">Patient Search</div>
                <div className="text-sm text-muted-foreground">Search by ABHA ID</div>
              </div>
            </Button>
            <Button className="h-auto p-6 flex flex-col gap-3" variant="outline" size="lg">
              <Stethoscope className="h-8 w-8 text-secondary" />
              <div className="text-center">
                <div className="font-medium">Diagnosis Entry</div>
                <div className="text-sm text-muted-foreground">Multi-terminology coding</div>
              </div>
            </Button>
            <Button className="h-auto p-6 flex flex-col gap-3" variant="outline" size="lg">
              <BarChart3 className="h-8 w-8 text-accent" />
              <div className="text-center">
                <div className="font-medium">Analytics</div>
                <div className="text-sm text-muted-foreground">Health insights</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center py-8 border-t">
        <p className="text-sm text-muted-foreground">
          © 2024 Government of India | Ministry of Health and Family Welfare
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          National EMR System - Version 2.1 | Powered by Digital India Initiative
        </p>
      </div>
    </div>
  )
}
