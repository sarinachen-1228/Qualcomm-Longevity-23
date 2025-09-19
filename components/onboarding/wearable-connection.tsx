"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Watch, Smartphone, Activity, Zap, Heart } from "lucide-react"

interface WearableConnectionProps {
  onNext: () => void
}

export function WearableConnection({ onNext }: WearableConnectionProps) {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([])

  const devices = [
    { id: "apple-watch", name: "Apple Watch", icon: Watch, connected: false },
    { id: "fitbit", name: "Fitbit", icon: Activity, connected: false },
    { id: "garmin", name: "Garmin", icon: Heart, connected: false },
    { id: "oura", name: "Oura Ring", icon: Zap, connected: false },
    { id: "whoop", name: "WHOOP", icon: Smartphone, connected: false },
  ]

  const toggleDevice = (deviceId: string) => {
    setSelectedDevices((prev) => (prev.includes(deviceId) ? prev.filter((id) => id !== deviceId) : [...prev, deviceId]))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Card className="w-full max-w-lg bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl rounded-3xl">
        <div className="p-8 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10">
              <Watch className="w-8 h-8 text-white/80" />
            </div>
            <h2 className="text-2xl font-bold text-white">Connect Your Devices</h2>
            <p className="text-white/80 text-pretty">
              Link your wearables and health devices for comprehensive tracking.
            </p>
          </div>

          <div className="space-y-3">
            {devices.map((device) => {
              const IconComponent = device.icon
              return (
                <div
                  key={device.id}
                  onClick={() => toggleDevice(device.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-200 backdrop-blur-sm ${
                    selectedDevices.includes(device.id)
                      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white/80" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{device.name}</h3>
                      <p className="text-xs text-white/60">
                        {selectedDevices.includes(device.id) ? "Selected" : "Tap to connect"}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                      selectedDevices.includes(device.id)
                        ? "bg-gradient-to-r from-purple-400 to-pink-400 border-purple-400"
                        : "border-white/30"
                    }`}
                  >
                    {selectedDevices.includes(device.id) && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={onNext}
              variant="outline"
              className="flex-1 bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm rounded-xl"
            >
              Skip for Now
            </Button>
            <Button
              onClick={onNext}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg backdrop-blur-sm"
            >
              Continue
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
