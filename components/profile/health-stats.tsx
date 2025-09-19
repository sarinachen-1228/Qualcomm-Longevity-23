"use client"

import { Card } from "@/components/ui/card"

export function HealthStats() {
  const weeklyStats = [
    { label: "Steps", current: "58,247", previous: "52,180", change: "+12%", color: "from-blue-400 to-cyan-400" },
    { label: "Sleep", current: "52.5h", previous: "49.2h", change: "+7%", color: "from-purple-400 to-pink-400" },
    { label: "Active Minutes", current: "287", previous: "245", change: "+17%", color: "from-red-400 to-orange-400" },
    {
      label: "Calories Burned",
      current: "12,450",
      previous: "11,890",
      change: "+5%",
      color: "from-green-400 to-emerald-400",
    },
  ]

  const monthlyGoals = [
    { goal: "Walk 300k steps", progress: 78, color: "from-blue-500 to-cyan-500" },
    { goal: "Sleep 8h average", progress: 92, color: "from-purple-500 to-pink-500" },
    { goal: "Workout 20 days", progress: 65, color: "from-red-500 to-orange-500" },
    { goal: "Meditate daily", progress: 45, color: "from-green-500 to-emerald-500" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Health Statistics</h2>

      {/* Weekly Stats */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">This Week vs Last Week</h3>
        <div className="grid grid-cols-2 gap-4">
          {weeklyStats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white">{stat.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white">{stat.current}</div>
                <div className="text-xs text-white/60">Previous: {stat.previous}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Monthly Goals */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Monthly Goals</h3>
        <div className="space-y-4">
          {monthlyGoals.map((goal, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-xl border-white/20 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-white">{goal.goal}</span>
                <span className="text-sm text-white/70">{goal.progress}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className={`bg-gradient-to-r ${goal.color} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Health Trends */}
      <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Health Trends</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-400/20 rounded-xl">
            <div className="flex items-center space-x-3">
              <span className="text-green-400 text-xl">📈</span>
              <div>
                <div className="font-medium text-white">Sleep Quality Improving</div>
                <div className="text-sm text-white/70">+15% deep sleep this month</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-400/20 rounded-xl">
            <div className="flex items-center space-x-3">
              <span className="text-blue-400 text-xl">💪</span>
              <div>
                <div className="font-medium text-white">Fitness Consistency</div>
                <div className="text-sm text-white/70">7-day workout streak</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
