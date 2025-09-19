"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Stethoscope } from "lucide-react"

export function QuickChat() {
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!message.trim()) return

    setIsTyping(true)
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false)
      setMessage("")
    }, 2000)
  }

  return (
    <Card className="bg-white/80 backdrop-blur-xl border border-white/20 p-4 shadow-2xl rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
          <Stethoscope className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Doctor Asklepios</h3>
          <p className="text-sm text-gray-600">Your AI Health Assistant</p>
        </div>
      </div>

      {/* Recent message */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-2xl rounded-bl-md mb-4 max-w-[80%] shadow-lg">
        <p className="text-sm">Hey Alex! Your health score has improved by 12% this month. Keep up the great work!</p>
      </div>

      {isTyping && (
        <div className="bg-gray-100/80 backdrop-blur-sm p-3 rounded-2xl rounded-bl-md mb-4 max-w-[80%] border border-white/20">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      )}

      {/* Quick suggestions */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        <Button
          variant="outline"
          size="sm"
          className="whitespace-nowrap bg-white/50 backdrop-blur-sm border-white/30 text-gray-700 hover:bg-white/70 rounded-xl"
          onClick={() => setMessage("How's my health today?")}
        >
          Health check
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="whitespace-nowrap bg-white/50 backdrop-blur-sm border-white/30 text-gray-700 hover:bg-white/70 rounded-xl"
          onClick={() => setMessage("Any recommendations?")}
        >
          Get tips
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="whitespace-nowrap bg-white/50 backdrop-blur-sm border-white/30 text-gray-700 hover:bg-white/70 rounded-xl"
          onClick={() => setMessage("Schedule checkup")}
        >
          Schedule
        </Button>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything about your health..."
          className="flex-1 bg-white/50 backdrop-blur-sm border-white/30 rounded-xl"
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button
          onClick={handleSendMessage}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 rounded-xl shadow-lg"
          disabled={!message.trim() || isTyping}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  )
}
