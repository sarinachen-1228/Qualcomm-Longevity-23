"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface WelcomeScreenProps {
  onNext: () => void
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="h-screen bg-gradient-to-b from-purple-500 via-purple-600 to-black flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md mx-auto">
          <Card className="w-full bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
            <div className="p-6 text-center space-y-5">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm"></div>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-white text-balance">Welcome to Your Wellness Journey</h1>
                <p className="text-sm text-white/80 text-pretty">
                  Personalized health insights powered by AI, designed to help you thrive.
                </p>
              </div>

              <div className="space-y-3 pt-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-xs">HIPAA compliant & secure</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-xs">Connect your devices</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-xs">AI-powered insights</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="h-20 flex items-center px-6 bg-gradient-to-t from-black/50 to-transparent">
        <div className="w-full max-w-md mx-auto">
          <Button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
