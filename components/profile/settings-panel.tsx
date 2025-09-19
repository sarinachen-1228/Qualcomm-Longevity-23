"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export function SettingsPanel() {
  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    workoutAlerts: true,
    sleepReminders: false,
    mealTracking: true,
    weeklyReports: true,
  })

  const [privacy, setPrivacy] = useState({
    shareData: false,
    anonymousAnalytics: true,
    healthInsights: true,
  })

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const togglePrivacy = (key: keyof typeof privacy) => {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Settings</h2>

      {/* Notifications */}
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                <div className="text-sm text-white/60">
                  {key === "dailyReminders" && "Get daily wellness tips and reminders"}
                  {key === "workoutAlerts" && "Notifications for scheduled workouts"}
                  {key === "sleepReminders" && "Bedtime and wake-up reminders"}
                  {key === "mealTracking" && "Meal logging and nutrition reminders"}
                  {key === "weeklyReports" && "Weekly progress and insights summary"}
                </div>
              </div>
              <Switch checked={value} onCheckedChange={() => toggleNotification(key as keyof typeof notifications)} />
            </div>
          ))}
        </div>
      </Card>

      {/* Privacy */}
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Privacy & Data</h3>
        <div className="space-y-4">
          {Object.entries(privacy).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                <div className="text-sm text-white/60">
                  {key === "shareData" && "Share anonymized data for research"}
                  {key === "anonymousAnalytics" && "Help improve the app with usage data"}
                  {key === "healthInsights" && "Allow AI to analyze your health patterns"}
                </div>
              </div>
              <Switch checked={value} onCheckedChange={() => togglePrivacy(key as keyof typeof privacy)} />
            </div>
          ))}
        </div>
      </Card>

      {/* Account Actions */}
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10">
            Export Health Data
          </Button>
          <Button variant="outline" className="w-full bg-white/5 border-white/20 text-white hover:bg-white/10">
            Reset Preferences
          </Button>
          <Button variant="outline" className="w-full bg-red-500/20 border-red-400/30 text-red-300 hover:bg-red-500/30">
            Delete Account
          </Button>
        </div>
      </Card>

      {/* Connected Devices */}
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Connected Devices</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-400/20 rounded-xl">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⌚</span>
              <div>
                <div className="font-medium text-white">Apple Watch</div>
                <div className="text-sm text-green-400">Connected</div>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="text-white/70 hover:text-white">
              Disconnect
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <div>
                <div className="font-medium text-white">Fitbit Charge 5</div>
                <div className="text-sm text-white/60">Not connected</div>
              </div>
            </div>
            <Button size="sm" className="bg-blue-500/30 hover:bg-blue-500/40 text-white">
              Connect
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
