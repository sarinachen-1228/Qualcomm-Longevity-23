"use client"
import { Button } from "@/components/ui/button"

interface AuthScreenProps {
  onAuthComplete: () => void
}

export function AuthScreen({ onAuthComplete }: AuthScreenProps) {
  const handleOAuthLogin = (provider: string) => {
    console.log(`[v0] OAuth login with ${provider}`)
    // Simulate successful OAuth login
    setTimeout(() => {
      onAuthComplete()
    }, 1000)
  }

  return (
    <div className="h-screen bg-gradient-to-b from-cyan-200 via-blue-300 to-blue-100 flex flex-col overflow-hidden">
      <div className="h-[60vh] flex items-center justify-center px-4">
        
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">WELLNESS AI</h1>
      </div>

      <div className="h-32 flex flex-col items-center justify-center px-4 space-y-3 bg-gradient-to-t from-blue-200/50 to-transparent">
        <div className="w-full max-w-sm space-y-3">
          <Button
            onClick={() => handleOAuthLogin("login")}
            className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium py-3"
          >
            LOGIN
          </Button>
          <Button
            onClick={() => handleOAuthLogin("signup")}
            className="w-full bg-white/20 backdrop-blur-md text-blue-900 border border-blue-300 hover:bg-white/30 font-medium py-3"
            variant="outline"
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  )
}
