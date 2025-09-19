"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Target, CheckCircle2, Calendar } from "lucide-react"

interface ActionRoutinesProps {
  onBack: () => void
}

interface Routine {
  id: string
  title: string
  description: string
  time: string
  duration: string
  completed: boolean
  priority: "high" | "medium" | "low"
}

export function ActionRoutines({ onBack }: ActionRoutinesProps) {
  const routines: Routine[] = [
    {
      id: "1",
      title: "Morning Hydration",
      description: "Drink 2 glasses of water to kickstart metabolism",
      time: "7:00 AM",
      duration: "5 min",
      completed: false,
      priority: "high",
    },
    {
      id: "2",
      title: "Mindfulness Meditation",
      description: "10-minute guided meditation session",
      time: "8:30 AM",
      duration: "10 min",
      completed: false,
      priority: "medium",
    },
    {
      id: "3",
      title: "Vitamin D Walk",
      description: "15-minute outdoor walk for natural sunlight",
      time: "12:00 PM",
      duration: "15 min",
      completed: false,
      priority: "medium",
    },
    {
      id: "4",
      title: "Protein-Rich Lunch",
      description: "Consume 25g protein for muscle maintenance",
      time: "1:00 PM",
      duration: "30 min",
      completed: true,
      priority: "high",
    },
    {
      id: "5",
      title: "Evening Stretching",
      description: "Gentle stretching routine for flexibility",
      time: "7:00 PM",
      duration: "15 min",
      completed: false,
      priority: "low",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-400 bg-red-50/30"
      case "medium":
        return "border-yellow-400 bg-yellow-50/30"
      default:
        return "border-green-400 bg-green-50/30"
    }
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-gray-200/30 p-4">
        <div className="flex items-center space-x-3">
          <Button variant="default" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Today's Routines</h1>
            <p className="text-sm text-gray-600">Your personalized wellness schedule</p>
          </div>
        </div>
      </div>

      {/* Routines List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Progress Summary */}
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Today's Progress</h2>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-600">1/5 Complete</span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "20%" }}></div>
            </div>
          </div>

          {/* Routines */}
          {routines.map((routine) => (
            <div
              key={routine.id}
              className={`bg-white/60 backdrop-blur-sm border border-gray-200/30 rounded-2xl p-4 ${
                routine.completed ? "opacity-60" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3
                      className={`font-semibold ${routine.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                    >
                      {routine.title}
                    </h3>
                    {routine.completed && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{routine.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{routine.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{routine.duration}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full border-l-4 ${getPriorityColor(routine.priority)}`}>
                  <span className="text-xs font-medium text-gray-700 capitalize">{routine.priority}</span>
                </div>
              </div>
              {!routine.completed && (
                <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Mark Complete
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
