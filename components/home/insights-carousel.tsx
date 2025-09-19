"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InsightsCarousel() {
  const [currentInsight, setCurrentInsight] = useState(0)

  const insights = [
    {
      title: "Sleep Quality Improving",
      description: "Your deep sleep increased by 15% this week. Keep up your bedtime routine!",
      metric: "+15%",
      color: "from-purple-500 to-pink-500",
      icon: "😴",
      trend: "up",
    },
    {
      title: "Heart Rate Variability",
      description: "Your HRV suggests good recovery. Consider adding more cardio to your routine.",
      metric: "42ms",
      color: "from-red-500 to-orange-500",
      icon: "❤️",
      trend: "stable",
    },
    {
      title: "Activity Streak",
      description: "7 days of hitting your step goal! You're building great habits.",
      metric: "7 days",
      color: "from-green-500 to-emerald-500",
      icon: "🔥",
      trend: "up",
    },
    {
      title: "Nutrition Balance",
      description: "Your protein intake is optimal, but consider adding more fiber-rich foods.",
      metric: "85%",
      color: "from-blue-500 to-cyan-500",
      icon: "🥗",
      trend: "stable",
    },
  ]

  const nextInsight = () => {
    setCurrentInsight((prev) => (prev + 1) % insights.length)
  }

  const prevInsight = () => {
    setCurrentInsight((prev) => (prev - 1 + insights.length) % insights.length)
  }

  const insight = insights[currentInsight]

  return (
    <div className="space-y-4">
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-xl flex items-center justify-center`}>
            <span className="text-xl">{insight.icon}</span>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold bg-gradient-to-r ${insight.color} bg-clip-text text-transparent`}>
              {insight.metric}
            </div>
            <div className="text-xs text-blue-600">{insight.trend === "up" ? "↗️ Trending up" : "➡️ Stable"}</div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-blue-800">{insight.title}</h3>
          <p className="text-blue-700 text-sm leading-relaxed">{insight.description}</p>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          onClick={prevInsight}
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800 hover:bg-white/10"
        >
          ← Previous
        </Button>

        <div className="flex space-x-2">
          {insights.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentInsight ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextInsight}
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800 hover:bg-white/10"
        >
          Next →
        </Button>
      </div>
    </div>
  )
}
