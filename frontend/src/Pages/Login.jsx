import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Activity, Shield, Lock } from "lucide-react";

export default function Login() {
  const [abhaId, setAbhaId] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Activity className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">Healthcare EMR</h1>
          <p className="text-white/80 mt-2">Terminology Management System</p>
          <Badge variant="secondary" className="mt-3">
            ABHA OAuth 2.0 Authentication
          </Badge>
        </div>

        {/* Login Card */}
        <Card className="border-white/20 bg-white/95 backdrop-blur shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Secure Login
            </CardTitle>
            <CardDescription>
              Sign in with your ABHA ID to access the healthcare terminology system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* ABHA ID Input */}
            <div className="space-y-2">
              <Label htmlFor="abha-id">ABHA ID</Label>
              <Input
                id="abha-id"
                type="text"
                placeholder="Enter your 14-digit ABHA ID"
                value={abhaId}
                onChange={(e) => setAbhaId(e.target.value)}
                className="h-12"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(!!checked)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="consent"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I consent to data processing
                </Label>
                <p className="text-xs text-muted-foreground">
                  I agree to the processing of my health data in accordance with India's EHR Standards 2016 
                  and consent to terminology mapping between NAMASTE, WHO Ayurveda, and ICD-11 systems.
                </p>
              </div>
            </div>

            {/* Login Buttons */}
            <div className="space-y-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={!abhaId || !consent}
              >
                <Lock className="mr-2 h-4 w-4" />
                Sign in with ABHA OAuth 2.0
              </Button>
              
              <Button variant="outline" size="lg" className="w-full">
                Register New ABHA ID
              </Button>
            </div>

            {/* Role Selection Preview */}
            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground text-center mb-3">
                Available roles after authentication:
              </p>
              <div className="flex gap-2 justify-center">
                <Badge variant="outline">Clinician</Badge>
                <Badge variant="outline">Admin</Badge>
                <Badge variant="outline">Researcher</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-white/60 text-xs">
          <p>Powered by FHIR R4 • Compliant with India EHR Standards 2016</p>
          <p className="mt-1">Integrating NAMASTE, WHO Ayurveda & ICD-11 TM2 + Biomedicine</p>
        </div>
      </div>
    </div>
  );
}
