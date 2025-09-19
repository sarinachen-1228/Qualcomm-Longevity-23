"use client"

import { useState } from "react"
import { AuthScreen } from "@/components/auth/auth-screen"
import { WelcomeScreen } from "@/components/onboarding/welcome-screen"
import { HipaaConsent } from "@/components/onboarding/hipaa-consent"
import { WearableConnection } from "@/components/onboarding/wearable-connection"
import { GeneticImport } from "@/components/onboarding/genetic-import"
import { PreferencesSetup } from "@/components/onboarding/preferences-setup"
import { ChatInterface } from "@/components/chat/chat-interface"

export default function WellnessApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentScreen, setCurrentScreen] = useState<string>("welcome")
  const [onboardingComplete, setOnboardingComplete] = useState(false)

  const handleAuthComplete = () => {
    setIsAuthenticated(true)
  }

  const handleScreenChange = (screen: string) => {
    setCurrentScreen(screen)
  }

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true)
    setCurrentScreen("home")
  }

  if (!isAuthenticated) {
    return <AuthScreen onAuthComplete={handleAuthComplete} />
  }

  if (!onboardingComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {currentScreen === "welcome" && <WelcomeScreen onNext={() => handleScreenChange("hipaa")} />}
        {currentScreen === "hipaa" && <HipaaConsent onNext={() => handleScreenChange("wearable")} />}
        {currentScreen === "wearable" && <WearableConnection onNext={() => handleScreenChange("genetic")} />}
        {currentScreen === "genetic" && <GeneticImport onNext={() => handleScreenChange("preferences")} />}
        {currentScreen === "preferences" && <PreferencesSetup onComplete={handleOnboardingComplete} />}
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <ChatInterface />
    </div>
  )
}
