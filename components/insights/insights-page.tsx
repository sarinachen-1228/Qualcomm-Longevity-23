"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InsightsPage() {
  const insights = [
    {
      title: "Sleep Quality Improved",
      description: "Your average sleep quality has increased by 15% this week",
      trend: "+15%",
      color: "blue",
    },
    {
      title: "Activity Goal Reached",
      description: "You've hit your daily step goal 6 out of 7 days",
      trend: "86%",
      color: "green",
    },
    {
      title: "Heart Rate Variability",
      description: "Your HRV shows good recovery patterns",
      trend: "Good",
      color: "purple",
    },
    {
      title: "Nutrition Balance",
      description: "Protein intake is optimal, consider more fiber",
      trend: "Balanced",
      color: "orange",
    },
  ]

  const actions = [
    { title: "Schedule Workout", description: "Based on your energy levels", icon: "💪" },
    { title: "Meal Planning", description: "Optimize your nutrition", icon: "🥗" },
    { title: "Sleep Optimization", description: "Improve your rest quality", icon: "😴" },
    { title: "Stress Management", description: "Mindfulness recommendations", icon: "🧘" },
  ]

  return (
    <div className="min-h-screen bg-white p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Your Insights</h1>
          <p className="text-gray-600">Personalized health analytics</p>
        </div>
      </div>

      {/* Health Insights */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Health Trends</h2>
        <div className="grid gap-4">
          {insights.map((insight, index) => (
            <Card key={index} className="bg-white border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    insight.color === "blue"
                      ? "bg-blue-50 text-blue-700"
                      : insight.color === "green"
                        ? "bg-green-50 text-green-700"
                        : insight.color === "purple"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-orange-50 text-orange-700"
                  }`}
                >
                  {insight.trend}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Recommended Actions</h2>
        <div className="grid gap-3">
          {actions.map((action, index) => (
            <Card key={index} className="bg-white border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Start
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
