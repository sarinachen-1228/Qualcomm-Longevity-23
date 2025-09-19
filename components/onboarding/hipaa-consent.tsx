"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface HipaaConsentProps {
  onNext: () => void
}

export function HipaaConsent({ onNext }: HipaaConsentProps) {
  const [consents, setConsents] = useState({
    dataCollection: false,
    healthRecords: false,
    thirdParty: false,
  })

  const allConsented = Object.values(consents).every(Boolean)

  const handleConsentChange = (key: keyof typeof consents) => {
    setConsents((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="w-full max-w-lg bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
        <div className="p-8 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">Privacy & Consent</h2>
            <p className="text-white/80 text-pretty">
              We take your privacy seriously. Please review and consent to our data practices.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Checkbox
                id="dataCollection"
                checked={consents.dataCollection}
                onCheckedChange={() => handleConsentChange("dataCollection")}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="dataCollection" className="text-sm font-medium text-white cursor-pointer">
                  Data Collection & Processing
                </label>
                <p className="text-xs text-white/70">
                  Allow collection of health metrics and wellness data for personalized insights.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Checkbox
                id="healthRecords"
                checked={consents.healthRecords}
                onCheckedChange={() => handleConsentChange("healthRecords")}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="healthRecords" className="text-sm font-medium text-white cursor-pointer">
                  Health Records Integration
                </label>
                <p className="text-xs text-white/70">
                  Connect with healthcare providers and import medical records securely.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Checkbox
                id="thirdParty"
                checked={consents.thirdParty}
                onCheckedChange={() => handleConsentChange("thirdParty")}
                className="mt-1"
              />
              <div className="space-y-1">
                <label htmlFor="thirdParty" className="text-sm font-medium text-white cursor-pointer">
                  Third-Party Integrations
                </label>
                <p className="text-xs text-white/70">
                  Connect with fitness trackers, lab results, and other health services.
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={onNext}
            disabled={!allConsented}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-200"
          >
            Continue
          </Button>
        </div>
      </Card>
    </div>
  )
}
