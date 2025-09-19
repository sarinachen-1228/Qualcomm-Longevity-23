"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Send,
  Menu,
  User,
  BarChart3,
  ShoppingBag,
  Target,
  Heart,
  Activity,
  Apple,
  Moon,
  Dumbbell,
  X,
  ChevronRight,
} from "lucide-react"
import { ProfileSchedule } from "@/components/profile/profile-schedule"
import { InsightsPage } from "@/components/insights/insights-page"
import { ShopPage } from "@/components/shop/shop-page"
import { ActionRoutines } from "@/components/chat/action-routines"

interface Message {
  id: string
  type: "ai" | "user"
  content: string
  timestamp: Date
}

interface ActionItem {
  id: string
  title: string
  description: string
  priority: "high" | "medium" | "low"
  category: string
  icon: any
  illustration: string
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [expandedAction, setExpandedAction] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const actionItems: ActionItem[] = [
    {
      id: "1",
      title: "Morning Hydration",
      description: "Start your day with 2 glasses of water",
      priority: "high",
      category: "Nutrition",
      icon: Heart,
      illustration: "/placeholder-juawr.png",
    },
    {
      id: "2",
      title: "10-Min Meditation",
      description: "Reduce stress with mindfulness",
      priority: "medium",
      category: "Mental Health",
      icon: Moon,
      illustration: "/placeholder-90oxs.png",
    },
    {
      id: "3",
      title: "Vitamin D Walk",
      description: "15 minutes of sunlight exposure",
      priority: "medium",
      category: "Physical Health",
      icon: Activity,
      illustration: "/placeholder-czrla.png",
    },
    {
      id: "4",
      title: "Healthy Snack",
      description: "Choose nutrient-dense options",
      priority: "low",
      category: "Nutrition",
      icon: Apple,
      illustration: "/placeholder-890z7.png",
    },
    {
      id: "5",
      title: "Strength Training",
      description: "20 minutes of resistance exercises",
      priority: "medium",
      category: "Fitness",
      icon: Dumbbell,
      illustration: "/placeholder-luh9e.png",
    },
  ]

  const actionReasons = {
    "1": "Hydration 15% below optimal yesterday",
    "2": "Elevated cortisol detected, reduce stress",
    "3": "Limited sun exposure this week",
    "4": "Blood sugar fluctuations detected today",
    "5": "Muscle mass metrics need improvement",
  }

  const actionSummaries = {
    "1": "Your hydration levels dropped 15% below optimal yesterday. Proper hydration supports cellular function, energy levels, and cognitive performance. Starting with 2 glasses of water helps kickstart your metabolism and prepares your body for the day ahead.",
    "2": "Your stress biomarkers show elevated cortisol levels. A 10-minute meditation session can reduce cortisol by up to 23% and improve focus throughout the day. This practice will help regulate your nervous system and improve sleep quality.",
    "3": "You've had limited sun exposure this week, affecting your vitamin D synthesis. A 15-minute walk provides essential UV exposure for vitamin D production, which supports bone health, immune function, and mood regulation.",
    "4": "Your continuous glucose monitor detected blood sugar fluctuations today. Choosing nutrient-dense snacks with fiber and protein helps stabilize glucose levels, preventing energy crashes and supporting metabolic health.",
    "5": "Your muscle mass metrics indicate room for improvement. Regular strength training increases lean muscle mass, boosts metabolism, and supports healthy aging. Just 20 minutes can make a significant impact on your long-term health.",
  }

  const sidebarTabs = [
    { id: "actions", label: "Actions", icon: Target },
    { id: "insights", label: "Insights", icon: BarChart3 },
    { id: "shop", label: "Shop", icon: ShoppingBag },
    { id: "profile", label: "Profile", icon: User },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const initialMessage: Message = {
      id: "initial-ai-message",
      type: "ai",
      content:
        "Hi! How are you? I've been monitoring your biometrics and noticed your sleep quality dropped 20% this week and your stress levels are elevated. Your heart rate variability suggests you might be feeling tired or a bit down. How are you feeling today?",
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }, [])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content:
          "Based on your current health metrics and lifestyle patterns, here are some personalized recommendations to help optimize your wellness journey today.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  const handleAcceptAction = (actionId: string) => {
    const action = actionItems.find((a) => a.id === actionId)
    if (action) {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: `Perfect! I've added "${action.title}" to your daily routine. I'll track your progress and send reminders to help you stay on track.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, newMessage])
      setExpandedAction(null)
    }
  }

  const handleActionDetail = (actionId: string) => {
    setExpandedAction(null)
    setActiveTab("actions")
  }

  if (activeTab === "actions") {
    return <ActionRoutines onBack={() => setActiveTab(null)} />
  }
  if (activeTab === "insights") {
    return (
      <div className="h-screen bg-gray-50">
        <div className="p-4 bg-white border-b">
          <Button variant="ghost" onClick={() => setActiveTab(null)} className="mb-2">
            ← Back to Chat
          </Button>
        </div>
        <InsightsPage />
      </div>
    )
  }
  if (activeTab === "shop") {
    return (
      <div className="h-screen bg-gray-50">
        <div className="p-4 bg-white border-b">
          <Button variant="ghost" onClick={() => setActiveTab(null)} className="mb-2">
            ← Back to Chat
          </Button>
        </div>
        <ShopPage />
      </div>
    )
  }
  if (activeTab === "profile") {
    return (
      <div className="h-screen bg-gray-50">
        <div className="p-4 bg-white border-b">
          <Button variant="ghost" onClick={() => setActiveTab(null)} className="mb-2">
            ← Back to Chat
          </Button>
        </div>
        <ProfileSchedule />
      </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-b from-purple-500 via-purple-600 via-blue-600 to-black relative overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-80 sm:w-64 bg-white/90 backdrop-blur-xl border-r border-white/30 transform transition-transform duration-300 z-50 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Menu</h3>
          <div className="space-y-1 sm:space-y-2">
            {sidebarTabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => {
                    setActiveTab(tab.id)
                    setShowSidebar(false)
                  }}
                  className="w-full justify-start text-gray-700 hover:bg-gray-100/50 h-12 sm:h-10 text-base sm:text-sm"
                >
                  <IconComponent className="w-5 h-5 sm:w-4 sm:h-4 mr-3" />
                  {tab.label}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" onClick={() => setShowSidebar(false)} />
      )}

      {/* Expanded action modal */}
      {expandedAction && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 max-w-sm w-full mx-4 shadow-2xl border border-white/40">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={actionItems.find((a) => a.id === expandedAction)?.illustration || "/placeholder.svg"}
                  alt=""
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {actionItems.find((a) => a.id === expandedAction)?.title}
                  </h3>
                  <p className="text-sm text-gray-600">{actionItems.find((a) => a.id === expandedAction)?.category}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedAction(null)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {actionSummaries[expandedAction as keyof typeof actionSummaries]}
              </p>

              <div className="bg-blue-50/80 rounded-xl p-3">
                <p className="text-xs text-blue-800 font-medium">Why now?</p>
                <p className="text-sm text-blue-700 mt-1">
                  {actionReasons[expandedAction as keyof typeof actionReasons]}
                </p>
              </div>

              <div className="flex space-x-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => handleActionDetail(expandedAction)}
                  className="flex-1 text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  Details
                </Button>
                <Button
                  onClick={() => handleAcceptAction(expandedAction)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 px-3 sm:px-4 pt-8 sm:pt-12 pb-28 sm:pb-32 overflow-y-auto pl-6 pr-6">
          <div className="max-w-2xl mx-auto px-0">
            {/* Greeting Section */}
            {messages.length <= 1 && (
              <div className="mb-8 sm:mb-12 space-y-6 sm:space-y-8">
                <div className="px-2 text-left">
                  <h1 className="sm:text-4xl font-medium text-white/90 leading-tight leading-5 text-6xl">
                    Good Evening,
                  </h1>
                  <h2 className="sm:text-4xl font-bold text-white leading-tight text-6xl">Alex</h2>
                </div>
              </div>
            )}

            {/* Chat Messages */}
            <div className="space-y-3 sm:space-y-4 mb-8">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl sm:px-4 sm:py-3 text-sm sm:text-base py-2.5 px-3.5 ${
                      message.type === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            {messages.length <= 1 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 px-1">
                  {actionItems.slice(0, 3).map((action) => (
                    <button
                      key={action.id}
                      onClick={() => setExpandedAction(action.id)}
                      className="flex-shrink-0 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 hover:bg-white/30 transition-all duration-200 w-[120px] sm:w-[140px] text-center group active:scale-95 shadow-lg"
                    >
                      <div className="mb-3">
                        {(() => {
                          const IconComponent = action.icon
                          return <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-white" />
                        })()}
                      </div>
                      <h3 className="font-medium text-sm mb-1 text-white font-sans">{action.title}</h3>
                      <p className="text-xs leading-tight text-white/80">Learn More</p>
                    </button>
                  ))}
                </div>

                {/* Second row of actions */}
                <div className="flex flex-wrap gap-2 sm:gap-3 px-2 justify-start">
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-3 sm:px-4 py-2 hover:bg-white/30 transition-all duration-200 text-xs sm:text-sm text-white active:scale-95 shadow-sm">
                    Check my progress
                  </button>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-3 sm:px-4 py-2 hover:bg-white/30 transition-all duration-200 text-xs sm:text-sm text-white active:scale-95 shadow-sm">
                    View health trends
                  </button>
                  <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-3 sm:px-4 py-2 hover:bg-white/30 transition-all duration-200 text-xs sm:text-sm text-white active:scale-95 shadow-sm">
                    Set new goals
                  </button>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Box */}
        <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/10 backdrop-blur-xl border-white/20 py-9 border-t-0">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSidebar(true)}
                className="text-white hover:text-white p-2 rounded-full min-w-[44px] min-h-[44px] sm:min-w-[36px] sm:min-h-[36px] hover:bg-white/20 backdrop-blur-sm"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="flex-1 relative">
                <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-white/40">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask anything"
                    className="pr-12 bg-transparent border-none focus:ring-0 rounded-full shadow-none h-11 sm:h-10 text-base sm:text-sm text-gray-900 placeholder-gray-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-blue-500 hover:bg-blue-600 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
