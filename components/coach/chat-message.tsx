"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  content: string
  sender: "user" | "coach"
  timestamp: Date
  type?: "text" | "suggestion" | "insight"
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user"
  const isCoach = message.sender === "coach"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} space-x-3`}>
      {isCoach && (
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-4 h-4 bg-white/20 rounded-full"></div>
        </div>
      )}

      <div className={`max-w-[80%] ${isUser ? "order-first" : ""}`}>
        <Card
          className={`p-4 ${
            isUser
              ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30"
              : message.type === "suggestion"
                ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30"
                : message.type === "insight"
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30"
                  : "bg-white/10 border-white/20"
          } backdrop-blur-xl`}
        >
          <p className="text-white text-sm leading-relaxed">{message.content}</p>

          {message.type === "suggestion" && isCoach && (
            <div className="mt-3 flex space-x-2">
              <Button size="sm" className="bg-green-500/30 hover:bg-green-500/40 text-white text-xs">
                Try it
              </Button>
              <Button size="sm" variant="ghost" className="text-white/70 hover:text-white text-xs">
                Not now
              </Button>
            </div>
          )}
        </Card>

        <div className={`text-xs text-white/50 mt-1 ${isUser ? "text-right" : "text-left"}`}>
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>

      {isUser && (
        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-4 h-4 bg-white/20 rounded-full"></div>
        </div>
      )}
    </div>
  )
}
