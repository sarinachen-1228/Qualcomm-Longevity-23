"use client"

import { Button } from "@/components/ui/button"
import { Home, BarChart3, ShoppingBag, User } from "lucide-react"

interface BottomNavigationProps {
  currentScreen: string
  onScreenChange: (screen: string) => void
}

export function BottomNavigation({ currentScreen, onScreenChange }: BottomNavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "insights", label: "Insights", icon: BarChart3 },
    { id: "shop", label: "Shop", icon: ShoppingBag },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/20 shadow-2xl">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const IconComponent = item.icon
          return (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => onScreenChange(item.id)}
              className={`flex flex-col items-center space-y-1 py-3 px-3 rounded-xl transition-all duration-200 ${
                currentScreen === item.id
                  ? "bg-blue-500/10 text-blue-600 backdrop-blur-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          )
        })}
      </div>
    </div>
  )
}
