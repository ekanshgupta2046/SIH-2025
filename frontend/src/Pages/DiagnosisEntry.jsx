import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Plus, 
  Stethoscope, 
  BookOpen, 
  GitMerge, 
  Save,
  Sparkles
} from "lucide-react"

const mockTerminologies = [
  {
    system: "NAMASTE",
    code: "NAM-001",
    display: "Vata Dosha Imbalance",
    description: "Primary constitutional imbalance in Vata dosha affecting movement and nervous system"
  },
  {
    system: "WHO-Ayurveda",
    code: "WHO-AY-003",
    display: "Prana Vata Disorder",
    description: "Subdosha affecting respiratory and cardiac functions"
  },
  {
    system: "ICD-11-TM2",
    code: "TM2-001",
    display: "Traditional Medicine Constitutional Imbalance",
    description: "Constitutional imbalance as per traditional medicine systems"
  },
  {
    system: "ICD-11-Bio",
    code: "8E64.Z",
    display: "Anxiety disorder, unspecified",
    description: "Biomedical equivalent for anxiety-related symptoms"
  }
]

export default function DiagnosisEntry() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDiagnoses, setSelectedDiagnoses] = useState([])
  const [notes, setNotes] = useState("")

  const filteredTerminologies = mockTerminologies.filter(term =>
    term.display.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addDiagnosis = (terminology) => {
    if (!selectedDiagnoses.find(d => d.code === terminology.code)) {
      setSelectedDiagnoses([...selectedDiagnoses, terminology])
    }
  }

  const removeDiagnosis = (code) => {
    setSelectedDiagnoses(selectedDiagnoses.filter(d => d.code !== code))
  }

  const getSystemColor = (system) => {
    const colors = {
      "NAMASTE": "bg-accent",
      "WHO-Ayurveda": "bg-primary",
      "ICD-11-TM2": "bg-warning",
      "ICD-11-Bio": "bg-success"
    }
    return colors[system] || "bg-secondary"
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Diagnosis Entry</h1>
          <p className="text-muted-foreground">
            Search and select diagnoses from NAMASTE, WHO Ayurveda, and ICD-11 terminologies
          </p>
        </div>
        <Button variant="hero" size="lg">
          <Sparkles className="mr-2 h-4 w-4" />
          AI Suggestions
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Search Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Terminology Search
              </CardTitle>
              <CardDescription>
                Search across all integrated terminology systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search Terms</Label>
                <Input
                  id="search"
                  placeholder="Search diagnoses, symptoms, or codes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* System Filters */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer">All Systems</Badge>
                <Badge variant="outline" className="cursor-pointer">NAMASTE</Badge>
                <Badge variant="outline" className="cursor-pointer">WHO Ayurveda</Badge>
                <Badge variant="outline" className="cursor-pointer">ICD-11 TM2</Badge>
                <Badge variant="outline" className="cursor-pointer">ICD-11 Bio</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          <Card>
            <CardHeader>
              <CardTitle>Search Results ({filteredTerminologies.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredTerminologies.map((term) => (
                  <Card key={term.code} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getSystemColor(term.system)}>
                              {term.system}
                            </Badge>
                            <code className="text-xs bg-muted px-2 py-1 rounded">
                              {term.code}
                            </code>
                          </div>
                          <h4 className="font-medium text-sm mb-1">{term.display}</h4>
                          <p className="text-xs text-muted-foreground">{term.description}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => addDiagnosis(term)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Diagnoses */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="mr-2 h-5 w-5" />
                Selected Diagnoses
              </CardTitle>
              <CardDescription>
                Diagnoses to be added to patient record
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedDiagnoses.length > 0 ? (
                <div className="space-y-3">
                  {selectedDiagnoses.map((diagnosis) => (
                    <Card key={diagnosis.code} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getSystemColor(diagnosis.system)}>
                                {diagnosis.system}
                              </Badge>
                              <code className="text-xs bg-muted px-2 py-1 rounded">
                                {diagnosis.code}
                              </code>
                            </div>
                            <h4 className="font-medium text-sm">{diagnosis.display}</h4>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeDiagnosis(diagnosis.code)}
                          >
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No diagnoses selected</p>
                  <p className="text-sm">Search and add diagnoses from the left panel</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Dual Coding Suggestions */}
          {selectedDiagnoses.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitMerge className="mr-2 h-5 w-5" />
                  Dual Coding Suggestions
                </CardTitle>
                <CardDescription>
                  Recommended equivalent codes across systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg bg-accent/10">
                    <p className="text-sm font-medium mb-2">Suggested Mapping:</p>
                    <div className="text-xs space-y-1">
                      <p>NAMASTE: Vata Dosha Imbalance → ICD-11: Anxiety disorder</p>
                      <p>Confidence: 85%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Clinical Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Clinical Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Add clinical notes, observations, or additional context..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="medical" className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Save to FHIR ProblemList
            </Button>
            <Button variant="outline">
              Preview FHIR Bundle
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
