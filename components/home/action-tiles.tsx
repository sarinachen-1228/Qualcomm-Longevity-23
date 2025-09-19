"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ActionTiles() {
  const actions = [
    {
      title: "Take a 10-minute walk",
      description: "You've been sitting for 2 hours",
      priority: "high",
      color: "from-green-500 to-emerald-500",
      icon: "🚶",
      time: "Now",
    },
    {
      title: "Drink water",
      description: "Stay hydrated - 2 glasses behind goal",
      priority: "medium",
      color: "from-blue-500 to-cyan-500",
      icon: "💧",
      time: "5 min",
    },
    {
      title: "Meditation break",
      description: "Reduce stress with breathing exercises",
      priority: "low",
      color: "from-purple-500 to-pink-500",
      icon: "🧘",
      time: "10 min",
    },
    {
      title: "Healthy snack",
      description: "Your energy levels are dropping",
      priority: "medium",
      color: "from-orange-500 to-red-500",
      icon: "🥗",
      time: "Now",
    },
  ]

  const getPriorityBorder = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-400/50"
      case "medium":
        return "border-yellow-400/50"
      case "low":
        return "border-green-400/50"
      default:
        return "border-white/20"
    }
  }

  return (
    <div className="space-y-3">
      {actions.map((action, index) => (
        <Card key={index} className={`bg-white/10 backdrop-blur-xl border ${getPriorityBorder(action.priority)} p-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center`}
              >
                <span className="text-xl">{action.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-800">{action.title}</h3>
                <p className="text-sm text-blue-600">{action.description}</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="text-xs text-blue-600">{action.time}</div>
              <Button
                size="sm"
                className={`bg-gradient-to-r ${action.color} hover:opacity-90 text-white font-medium px-4 py-1 text-xs`}
              >
                Do it
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
