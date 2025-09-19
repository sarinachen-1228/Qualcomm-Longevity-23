"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ShopPage() {
  const categories = [
    { name: "Supplements", icon: "💊", count: "24 items" },
    { name: "Fitness Gear", icon: "🏋️", count: "18 items" },
    { name: "Wellness", icon: "🧘", count: "32 items" },
    { name: "Nutrition", icon: "🥗", count: "15 items" },
  ]

  const featuredProducts = [
    {
      name: "Omega-3 Premium",
      description: "High-quality fish oil supplement",
      price: "$29.99",
      rating: "4.8",
      image: "💊",
    },
    {
      name: "Smart Water Bottle",
      description: "Track your hydration goals",
      price: "$49.99",
      rating: "4.6",
      image: "💧",
    },
    {
      name: "Sleep Optimization Kit",
      description: "Improve your sleep quality",
      price: "$79.99",
      rating: "4.9",
      image: "😴",
    },
    {
      name: "Protein Powder",
      description: "Plant-based protein blend",
      price: "$39.99",
      rating: "4.7",
      image: "🥤",
    },
  ]

  return (
    <div className="min-h-screen bg-white p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Wellness Shop</h1>
          <p className="text-gray-600">Curated products for your health</p>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Featured Products</h2>
        <div className="grid gap-4">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="bg-white border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-600">⭐ {product.rating}</span>
                  </div>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Add to Cart</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Personalized Recommendations */}
      <Card className="bg-blue-50 border border-blue-200 p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Personalized for You</h3>
        <p className="text-sm text-blue-700 mb-3">
          Based on your health profile, we recommend focusing on sleep optimization and protein intake.
        </p>
        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
          View Recommendations
        </Button>
      </Card>
    </div>
  )
}
