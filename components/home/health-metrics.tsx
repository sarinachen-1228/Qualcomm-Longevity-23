"use client"

import { Card } from "@/components/ui/card"

export function HealthMetrics() {
  const metrics = [
    {
      label: "Steps",
      value: "8,247",
      target: "10,000",
      percentage: 82,
      color: "from-blue-400 to-cyan-400",
      icon: "👟",
    },
    {
      label: "Sleep",
      value: "7h 23m",
      target: "8h",
      percentage: 92,
      color: "from-purple-400 to-pink-400",
      icon: "😴",
    },
    {
      label: "Heart Rate",
      value: "72 bpm",
      target: "Resting",
      percentage: 85,
      color: "from-red-400 to-orange-400",
      icon: "❤️",
    },
    {
      label: "Hydration",
      value: "6 glasses",
      target: "8 glasses",
      percentage: 75,
      color: "from-cyan-400 to-blue-400",
      icon: "💧",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl">{metric.icon}</span>
            <div className="text-right">
              <div className="text-lg font-bold" style={{ color: "#040720" }}>
                {metric.value}
              </div>
              <div className="text-xs" style={{ color: "#040720" }}>
                {metric.target}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: "#040720" }}>
                {metric.label}
              </span>
              <span className="text-xs" style={{ color: "#040720" }}>
                {metric.percentage}%
              </span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className={`bg-gradient-to-r ${metric.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${metric.percentage}%` }}
              ></div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
