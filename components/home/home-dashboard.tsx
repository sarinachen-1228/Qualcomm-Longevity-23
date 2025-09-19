"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ActionTiles } from "./action-tiles"
import { InsightsCarousel } from "./insights-carousel"
import { HealthMetrics } from "./health-metrics"
import { QuickChat } from "./quick-chat"
import { Utensils, Dumbbell, Moon, Activity } from "lucide-react"

export function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good morning, Alex</h1>
          <p className="text-gray-600">Here's your wellness overview</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-lg">
          <div className="w-8 h-8 bg-white/30 rounded-full backdrop-blur-sm"></div>
        </div>
      </div>

      <QuickChat />

      {/* Health Metrics */}
      <HealthMetrics />

      {/* Action Tiles */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended Actions</h2>
        <ActionTiles />
      </div>

      {/* Insights Carousel */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Insights</h2>
        <InsightsCarousel />
      </div>

      {/* Quick Actions */}
      <Card className="bg-white/80 backdrop-blur-xl border border-white/20 p-6 shadow-2xl rounded-2xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 hover:bg-blue-100/80 h-12 rounded-xl flex items-center gap-2">
            <Utensils className="w-4 h-4" />
            Log Meal
          </Button>
          <Button className="bg-green-50/80 backdrop-blur-sm border border-green-200/50 text-green-700 hover:bg-green-100/80 h-12 rounded-xl flex items-center gap-2">
            <Dumbbell className="w-4 h-4" />
            Track Workout
          </Button>
          <Button className="bg-purple-50/80 backdrop-blur-sm border border-purple-200/50 text-purple-700 hover:bg-purple-100/80 h-12 rounded-xl flex items-center gap-2">
            <Moon className="w-4 h-4" />
            Log Sleep
          </Button>
          <Button className="bg-orange-50/80 backdrop-blur-sm border border-orange-200/50 text-orange-700 hover:bg-orange-100/80 h-12 rounded-xl flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Check Vitals
          </Button>
        </div>
      </Card>
    </div>
  )
}
