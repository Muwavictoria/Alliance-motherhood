'use client'

import { useState } from 'react'
import { Menu, X, Heart, Phone, Mail, MapPin } from 'lucide-react'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-blue-50 min-h-screen">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Alliance for Safe Motherhood And</h1>
                <p className="text-sm text-gray-600">Women&apos;s Medical Centre</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#mission" className="text-gray-700 hover:text-pink-600 transition-colors">Mission</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors">Services</a>
              <a href="#programs" className="text-gray-700 hover:text-pink-600 transition-colors">Programs</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
              <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
                Donate Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-pink-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-pink-600 py-2">Home</a>
                <a href="#mission" className="text-gray-700 hover:text-pink-600 py-2">Mission</a>
                <a href="#services" className="text-gray-700 hover:text-pink-600 py-2">Services</a>
                <a href="#programs" className="text-gray-700 hover:text-pink-600 py-2">Programs</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-600 py-2">Contact</a>
                <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors mt-2">
                  Donate Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Safe Motherhood for
              <span className="text-pink-600"> Every Woman</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Promoting safe pregnancy, childbirth and maternal health through education, 
              advocacy and support to mothers and families in our community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg">
                Our Services
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors">
                Contact Us
              </button>
            </div>


          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center">
                <Heart className="h-16 w-16 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services Available</h3>
                <p className="text-gray-600 mb-6">
                  24/7 maternal health support and emergency care for expecting mothers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Antenatal Care</span>
                    <span className="text-pink-600 font-bold">Daily</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Ultrasound & X-ray</span>
                    <span className="text-blue-600 font-bold">Daily</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Emergency Care</span>
                    <span className="text-green-600 font-bold">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-300 rounded-full"></div>
        <div className="absolute top-40 right-40 w-20 h-20 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-300 rounded-full"></div>
      </div>
    </div>
  )
}
