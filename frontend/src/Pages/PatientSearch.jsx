import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  User, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail,
  FileText,
  Activity
} from "lucide-react";

const mockPatients = [
  {
    id: "1",
    name: "Rajesh Kumar",
    abhaId: "12-3456-7890-1234",
    age: 45,
    gender: "Male",
    location: "Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@email.com",
    lastVisit: "2024-01-15",
    conditions: ["Hypertension", "Diabetes Type 2", "Anxiety"],
    status: "Active"
  },
  {
    id: "2",
    name: "Priya Sharma",
    abhaId: "12-3456-7890-5678",
    age: 32,
    gender: "Female", 
    location: "Delhi",
    phone: "+91 87654 32109",
    email: "priya.sharma@email.com",
    lastVisit: "2024-01-20",
    conditions: ["Migraine", "PCOS"],
    status: "Active"
  }
];

export default function PatientSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.abhaId.includes(searchQuery)
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patient Search</h1>
          <p className="text-muted-foreground">
            Search patients by ABHA ID, name, or demographics
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Search Panel */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Search Patients
              </CardTitle>
              <CardDescription>
                Find patients using ABHA ID or personal details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">ABHA ID or Name</Label>
                <Input
                  id="search"
                  placeholder="Search by ABHA ID or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12"
                />
              </div>
              
              <Button variant="medical" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Advanced Search
              </Button>

              {/* Search Results */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm">Search Results ({filteredPatients.length})</h3>
                {filteredPatients.map((patient) => (
                  <Card 
                    key={patient.id} 
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {patient.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{patient.name}</p>
                          <p className="text-xs text-muted-foreground">{patient.abhaId}</p>
                        </div>
                        <Badge variant={patient.status === "Active" ? "default" : "secondary"}>
                          {patient.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patient Profile */}
        <div className="lg:col-span-2">
          {selectedPatient ? (
            <div className="space-y-6">
              {/* Patient Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="text-lg">
                        {selectedPatient.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{selectedPatient.name}</CardTitle>
                      <CardDescription className="text-base">
                        ABHA ID: {selectedPatient.abhaId}
                      </CardDescription>
                      <div className="flex gap-2 mt-2">
                        <Badge>{selectedPatient.age} years</Badge>
                        <Badge variant="outline">{selectedPatient.gender}</Badge>
                        <Badge variant="secondary">{selectedPatient.status}</Badge>
                      </div>
                    </div>
                    <Button variant="medical">
                      <FileText className="mr-2 h-4 w-4" />
                      New Encounter
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              {/* Patient Details */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Demographics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{selectedPatient.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{selectedPatient.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{selectedPatient.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-3 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Last visit: {selectedPatient.lastVisit}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Active Conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedPatient.conditions.map((condition, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                          <span className="text-sm">{condition}</span>
                          <Badge variant="outline">Active</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <Card className="h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium">No Patient Selected</h3>
                <p className="text-sm">Search and select a patient to view their profile</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
