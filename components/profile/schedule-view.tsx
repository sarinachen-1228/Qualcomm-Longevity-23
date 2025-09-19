"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ScheduleView() {
  const todaySchedule = [
    {
      time: "7:00 AM",
      activity: "Morning Meditation",
      type: "mindfulness",
      status: "completed",
      color: "from-purple-500 to-pink-500",
      icon: "🧘",
    },
    {
      time: "8:30 AM",
      activity: "Healthy Breakfast",
      type: "nutrition",
      status: "completed",
      color: "from-green-500 to-emerald-500",
      icon: "🥗",
    },
    {
      time: "12:00 PM",
      activity: "Lunch & Walk",
      type: "activity",
      status: "upcoming",
      color: "from-blue-500 to-cyan-500",
      icon: "🚶",
    },
    {
      time: "3:00 PM",
      activity: "Hydration Check",
      type: "wellness",
      status: "upcoming",
      color: "from-cyan-500 to-blue-500",
      icon: "💧",
    },
    {
      time: "6:00 PM",
      activity: "Evening Workout",
      type: "fitness",
      status: "scheduled",
      color: "from-red-500 to-orange-500",
      icon: "💪",
    },
    {
      time: "10:00 PM",
      activity: "Sleep Routine",
      type: "recovery",
      status: "scheduled",
      color: "from-indigo-500 to-purple-500",
      icon: "😴",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-400/50 bg-green-500/10"
      case "upcoming":
        return "border-blue-400/50 bg-blue-500/10"
      case "scheduled":
        return "border-white/20 bg-white/5"
      default:
        return "border-white/20 bg-white/5"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅"
      case "upcoming":
        return "⏰"
      case "scheduled":
        return "📅"
      default:
        return "📅"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Today's Schedule</h2>
        <Button
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
        >
          Add Activity
        </Button>
      </div>

      <div className="space-y-3">
        {todaySchedule.map((item, index) => (
          <Card key={index} className={`backdrop-blur-xl border ${getStatusColor(item.status)} p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}
                >
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.activity}</h3>
                  <p className="text-sm text-white/70 capitalize">{item.type}</p>
                </div>
              </div>

              <div className="text-right space-y-1">
                <div className="text-sm font-medium text-white">{item.time}</div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs">{getStatusIcon(item.status)}</span>
                  <span className="text-xs text-white/60 capitalize">{item.status}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Weekly Overview */}
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">This Week</h3>
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs text-white/60 mb-2">{day}</div>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${
                  index === 2
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : index < 2
                      ? "bg-green-500/20 text-green-300"
                      : "bg-white/10 text-white/60"
                }`}
              >
                {index + 15}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
