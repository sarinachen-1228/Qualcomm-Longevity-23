"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "./chat-message"
import { QuickActions } from "./quick-actions"

interface Message {
  id: string
  content: string
  sender: "user" | "coach"
  timestamp: Date
  type?: "text" | "suggestion" | "insight"
}

export function AiCoachChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your AI wellness coach. I'm here to help you achieve your health goals. How are you feeling today?",
      sender: "coach",
      timestamp: new Date(),
      type: "text",
    },
    {
      id: "2",
      content:
        "Based on your recent activity, I noticed you've been sitting for extended periods. Would you like some movement suggestions?",
      sender: "coach",
      timestamp: new Date(),
      type: "suggestion",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const coachResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateCoachResponse(inputMessage),
        sender: "coach",
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, coachResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateCoachResponse = (userInput: string): string => {
    const responses = [
      "That's great to hear! Maintaining consistency is key to building healthy habits. What specific area would you like to focus on today?",
      "I understand how challenging that can be. Let's break it down into smaller, manageable steps. What feels most overwhelming right now?",
      "Your progress has been impressive! Based on your data, I'd recommend focusing on recovery today. How does that sound?",
      "That's a common concern. Let me suggest a personalized approach based on your health profile and recent activities.",
      "Excellent question! Your genetic data suggests you might respond well to certain types of exercise. Would you like specific recommendations?",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleQuickAction = (action: string) => {
    const quickMessage: Message = {
      id: Date.now().toString(),
      content: action,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }
    setMessages((prev) => [...prev, quickMessage])

    // Generate contextual response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: `Great choice! Let me provide you with personalized guidance for "${action}".`,
        sender: "coach",
        timestamp: new Date(),
        type: "suggestion",
      }
      setMessages((prev) => [...prev, response])
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-800">AI Wellness Coach</h1>
            <p className="text-sm text-blue-600">Always here to help you thrive</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <QuickActions onActionSelect={handleQuickAction} />
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isTyping && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white/20 rounded-full"></div>
            </div>
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white/60 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-white/10">
        <div className="flex space-x-3">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask your wellness coach anything..."
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400/50"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
