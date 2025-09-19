"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PreferencesSetupProps {
  onComplete: () => void
}

export function PreferencesSetup({ onComplete }: PreferencesSetupProps) {
  const [preferences, setPreferences] = useState({
    dietaryRestrictions: [] as string[],
    fitnessGoals: [] as string[],
    medications: [] as string[],
    conditions: [] as string[],
  })

  const dietaryOptions = [
    { id: "vegetarian", label: "Vegetarian", icon: "🥬" },
    { id: "vegan", label: "Vegan", icon: "🌱" },
    { id: "keto", label: "Ketogenic", icon: "🥑" },
    { id: "paleo", label: "Paleo", icon: "🥩" },
    { id: "gluten-free", label: "Gluten-Free", icon: "🌾" },
    { id: "dairy-free", label: "Dairy-Free", icon: "🥛" },
  ]

  const fitnessGoals = [
    { id: "weight-loss", label: "Weight Loss", icon: "⚖️" },
    { id: "muscle-gain", label: "Muscle Gain", icon: "💪" },
    { id: "endurance", label: "Endurance", icon: "🏃" },
    { id: "flexibility", label: "Flexibility", icon: "🧘" },
    { id: "general-health", label: "General Health", icon: "❤️" },
  ]

  const togglePreference = (category: keyof typeof preferences, value: string) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
        <div className="p-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">Your Preferences</h2>
            <p className="text-white/80 text-pretty">
              Tell us about your dietary needs and fitness goals for personalized recommendations.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Dietary Restrictions</h3>
              <div className="grid grid-cols-2 gap-3">
                {dietaryOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => togglePreference("dietaryRestrictions", option.id)}
                    className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                      preferences.dietaryRestrictions.includes(option.id)
                        ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/50"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg">{option.icon}</span>
                    <span className="text-sm font-medium text-white">{option.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Fitness Goals</h3>
              <div className="grid grid-cols-2 gap-3">
                {fitnessGoals.map((goal) => (
                  <div
                    key={goal.id}
                    onClick={() => togglePreference("fitnessGoals", goal.id)}
                    className={`flex items-center space-x-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                      preferences.fitnessGoals.includes(goal.id)
                        ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/50"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg">{goal.icon}</span>
                    <span className="text-sm font-medium text-white">{goal.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={onComplete}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-200"
          >
            Complete Setup
          </Button>
        </div>
      </Card>
    </div>
  )
}
