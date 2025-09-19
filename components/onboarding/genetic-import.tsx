"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface GeneticImportProps {
  onNext: () => void
}

export function GeneticImport({ onNext }: GeneticImportProps) {
  const [selectedProvider, setSelectedProvider] = useState<string>("")

  const providers = [
    { id: "23andme", name: "23andMe", icon: "🧬", description: "Import genetic health reports" },
    { id: "ancestrydna", name: "AncestryDNA", icon: "🌿", description: "Health insights from ancestry data" },
    { id: "myheritage", name: "MyHeritage", icon: "🔬", description: "Genetic health analysis" },
    { id: "upload", name: "Upload Raw Data", icon: "📄", description: "Upload your own genetic files" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
        <div className="p-8 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">Genomic Profile</h2>
            <p className="text-white/80 text-pretty">
              Import your genetic data for personalized health insights and recommendations.
            </p>
          </div>

          <div className="space-y-3">
            {providers.map((provider) => (
              <div
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className={`flex items-center space-x-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                  selectedProvider === provider.id
                    ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/50"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                <span className="text-2xl">{provider.icon}</span>
                <div className="flex-1">
                  <h3 className="font-medium text-white">{provider.name}</h3>
                  <p className="text-xs text-white/60">{provider.description}</p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                    selectedProvider === provider.id
                      ? "bg-gradient-to-r from-emerald-400 to-teal-400 border-emerald-400"
                      : "border-white/30"
                  }`}
                >
                  {selectedProvider === provider.id && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-500/10 border border-amber-400/20 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <span className="text-amber-400 text-lg">⚠️</span>
              <div>
                <h4 className="text-sm font-medium text-amber-200">Privacy Notice</h4>
                <p className="text-xs text-amber-200/80 mt-1">
                  Your genetic data is encrypted and never shared with third parties. You maintain full control and can
                  delete it anytime.
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={onNext}
              variant="outline"
              className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Skip for Now
            </Button>
            <Button
              onClick={onNext}
              disabled={!selectedProvider}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-xl shadow-lg"
            >
              Import Data
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
