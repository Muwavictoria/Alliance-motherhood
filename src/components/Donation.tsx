import { Heart, Gift, Users, Target, ArrowRight, Star } from 'lucide-react'

export default function Donation() {
  const impactStats = [
    {
      number: "500+",
      label: "Mothers Supported",
      description: "Safe deliveries and maternal care"
    },
    {
      number: "1000+",
      label: "Health Screenings",
      description: "Preventive care and early detection"
    },
    {
      number: "50+",
      label: "Community Programs",
      description: "Education and outreach initiatives"
    },
    {
      number: "24/7",
      label: "Emergency Support",
      description: "Round-the-clock maternal care"
    }
  ]

  const donationOptions = [
    {
      amount: "$25",
      impact: "Provides prenatal vitamins for 5 mothers",
      popular: false
    },
    {
      amount: "$50", 
      impact: "Funds one complete antenatal check-up",
      popular: true
    },
    {
      amount: "$100",
      impact: "Supports emergency transportation for mothers",
      popular: false
    },
    {
      amount: "$250",
      impact: "Sponsors a complete maternal health workshop",
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 text-pink-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Give Today, Be the Reason Someone Smiles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation helps us provide essential maternal healthcare services to mothers 
            and families who need it most. Every contribution makes a difference.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold text-pink-600 mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Gift className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Make a Donation</h3>
              <p className="text-gray-600">Choose an amount that works for you</p>
            </div>

            {/* Donation Amount Options */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {donationOptions.map((option, index) => (
                <div 
                  key={index}
                  className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    option.popular 
                      ? 'border-pink-500 bg-pink-50' 
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Popular</span>
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">{option.amount}</div>
                    <p className="text-sm text-gray-600">{option.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  id="custom-amount"
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Donation Type */}
            <div className="mb-6">
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="donation-type" value="one-time" className="text-pink-600" defaultChecked />
                  <span className="text-gray-700">One-time donation</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="donation-type" value="monthly" className="text-pink-600" />
                  <span className="text-gray-700">Monthly donation</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
              <Heart className="h-5 w-5" />
              <span>Donate Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your donation is secure and helps save lives. Tax receipts available upon request.
            </p>
          </div>

          {/* Why Donate Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Your Donation Matters</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Save Lives</h4>
                    <p className="text-gray-600">
                      Your donation directly supports emergency maternal care, helping save the lives 
                      of mothers and babies during critical moments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Strengthen Communities</h4>
                    <p className="text-gray-600">
                      Support community outreach programs that educate families about maternal health 
                      and provide essential resources to underserved areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Create Lasting Impact</h4>
                    <p className="text-gray-600">
                      Fund training programs for community health workers and support sustainable 
                      healthcare initiatives that benefit future generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6">
              <div className="text-center">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;Thanks to the Alliance for Safe Motherhood, I received the care I needed during 
                  my pregnancy. Their support made all the difference for me and my baby.&rdquo;
                </p>
                <p className="font-semibold text-gray-900">- Sarah M., New Mother</p>
              </div>
            </div>

            {/* Other Ways to Help */}
            <div className="mt-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Help</h4>
              <div className="space-y-3">
                <button className="w-full text-left p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Volunteer Your Time</span>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Join our community programs and make a direct impact</p>
                </button>
                
                <button className="w-full text-left p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Spread Awareness</span>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Share our mission with friends and family</p>
                </button>
                
                <button className="w-full text-left p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Corporate Partnership</span>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-sm mt-1">Partner with us for sustainable impact</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
