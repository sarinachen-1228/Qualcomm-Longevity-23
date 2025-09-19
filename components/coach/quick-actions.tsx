"use client"

import { Button } from "@/components/ui/button"

interface QuickActionsProps {
  onActionSelect: (action: string) => void
}

export function QuickActions({ onActionSelect }: QuickActionsProps) {
  const quickActions = [
    { label: "Workout suggestions", icon: "💪", color: "from-red-500 to-orange-500" },
    { label: "Meal planning", icon: "🥗", color: "from-green-500 to-emerald-500" },
    { label: "Sleep optimization", icon: "😴", color: "from-purple-500 to-pink-500" },
    { label: "Stress management", icon: "🧘", color: "from-blue-500 to-cyan-500" },
  ]

  return (
    <div>
      <h3 className="text-sm font-medium text-white/80 mb-3">Quick Actions</h3>
      <div className="flex flex-wrap gap-2">
        {quickActions.map((action, index) => (
          <Button
            key={index}
            onClick={() => onActionSelect(action.label)}
            variant="ghost"
            size="sm"
            className={`bg-gradient-to-r ${action.color} bg-opacity-20 border border-white/20 text-white hover:bg-opacity-30 transition-all duration-200`}
          >
            <span className="mr-2">{action.icon}</span>
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
