"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, ImageIcon, User, BarChart3, ShoppingBag, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

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
}

interface ActionsChatProps {
  onNavigate?: (screen: string) => void
}

export function ActionsChat({ onNavigate }: ActionsChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Good Morning, Alex! 🌅\n\nBased on your recent activity, here's your health summary:\n• Sleep: 7.2 hours (Good quality)\n• Steps: 8,450 yesterday\n• Heart Rate: Avg 72 bpm\n• Hydration: 6/8 glasses\n\nI've prepared some personalized actions to help you optimize your wellness today:",
      timestamp: new Date(),
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [showSidebar, setShowSidebar] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [currentActionIndex, setCurrentActionIndex] = useState(0)

  const actionItems: ActionItem[] = [
    {
      id: "1",
      title: "Morning Hydration Boost",
      description: "Drink 2 glasses of water to kickstart your metabolism",
      priority: "high",
      category: "Nutrition",
    },
    {
      id: "2",
      title: "10-Minute Meditation",
      description: "Your stress levels were elevated yesterday. Try a quick mindfulness session",
      priority: "medium",
      category: "Mental Health",
    },
    {
      id: "3",
      title: "Vitamin D Check",
      description: "You haven't been outside much. Consider a 15-minute walk in sunlight",
      priority: "medium",
      category: "Physical Health",
    },
    {
      id: "4",
      title: "Sleep Schedule Adjustment",
      description: "Your bedtime has been inconsistent. Aim for 10:30 PM tonight",
      priority: "high",
      category: "Sleep",
    },
  ]

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "home", label: "Routines", icon: Calendar },
    { id: "insights", label: "Insights", icon: BarChart3 },
    { id: "shop", label: "Shop", icon: ShoppingBag },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
          "I understand your question. Let me analyze your health data and provide personalized recommendations based on your current metrics and goals.",
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
        content: `Great choice! I've added "${action.title}" to your daily routine. I'll send you a reminder and track your progress. This action will help improve your ${action.category.toLowerCase()}.`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, newMessage])
    }
  }

  const nextAction = () => {
    setCurrentActionIndex((prev) => (prev + 1) % actionItems.length)
  }

  const prevAction = () => {
    setCurrentActionIndex((prev) => (prev - 1 + actionItems.length) % actionItems.length)
  }

  const currentAction = actionItems[currentActionIndex]

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white/70 backdrop-blur-xl border-r border-gray-200/50 transform transition-transform duration-300 z-50 ${showSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Navigation</h3>
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => {
                    onNavigate?.(item.id)
                    setShowSidebar(false)
                  }}
                  className="w-full justify-start text-gray-700 hover:bg-gray-100/50"
                >
                  <IconComponent className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setShowSidebar(false)} />
      )}

      {/* Main Chat Area */}
      <div className="flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 pt-6 pb-32">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white/70 backdrop-blur-sm border border-gray-200/50 text-gray-800"
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}

            {/* Action Items Carousel */}
            {messages.length === 1 && (
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 mx-auto max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Recommended Actions</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" onClick={prevAction}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={nextAction}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div
                    className={`p-4 rounded-xl border-l-4 ${
                      currentAction.priority === "high"
                        ? "border-red-400 bg-red-50/50"
                        : currentAction.priority === "medium"
                          ? "border-yellow-400 bg-yellow-50/50"
                          : "border-green-400 bg-green-50/50"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{currentAction.title}</h4>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-600">
                        {currentAction.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{currentAction.description}</p>
                    <Button
                      onClick={() => handleAcceptAction(currentAction.id)}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Accept Action
                    </Button>
                  </div>

                  <div className="flex justify-center space-x-2">
                    {actionItems.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentActionIndex ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>

        {/* Floating Input */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 p-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSidebar(true)}
                className="text-gray-600 hover:text-gray-800"
              >
                <ImageIcon className="w-5 h-5" />
              </Button>
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about your health, request actions, or get insights..."
                  className="pr-12 bg-white/70 backdrop-blur-sm border-gray-200/50 focus:border-blue-300 rounded-full"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 p-0 bg-blue-500 hover:bg-blue-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
