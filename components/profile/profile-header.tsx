"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProfileHeader() {
  return (
    <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-blue-800">Alex Johnson</h1>
          <p className="text-blue-600">Wellness Journey: 47 days</p>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm text-blue-700">Active</span>
            </div>
            <div className="text-sm text-blue-600">Last sync: 2 min ago</div>
          </div>
        </div>

        <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-blue-700 hover:bg-white/20">
          Edit Profile
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-800">8.2k</div>
          <div className="text-sm text-blue-600">Avg Steps</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-800">7.5h</div>
          <div className="text-sm text-blue-600">Avg Sleep</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-800">92%</div>
          <div className="text-sm text-blue-600">Goal Rate</div>
        </div>
      </div>
    </Card>
  )
}
