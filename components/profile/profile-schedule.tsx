"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProfileHeader } from "./profile-header"
import { ScheduleView } from "./schedule-view"
import { HealthStats } from "./health-stats"
import { SettingsPanel } from "./settings-panel"

export function ProfileSchedule() {
  const [activeTab, setActiveTab] = useState<"schedule" | "stats" | "settings">("schedule")

  const tabs = [
    { id: "schedule", label: "Schedule", icon: "📅" },
    { id: "stats", label: "Stats", icon: "📊" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ]

  return (
    <div className="min-h-screen p-6 space-y-6">
      <ProfileHeader />

      {/* Tab Navigation */}
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-2">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              variant="ghost"
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </Button>
          ))}
        </div>
      </Card>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "schedule" && <ScheduleView />}
        {activeTab === "stats" && <HealthStats />}
        {activeTab === "settings" && <SettingsPanel />}
      </div>
    </div>
  )
}
