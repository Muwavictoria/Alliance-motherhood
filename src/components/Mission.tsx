import { Target, Eye, Heart, Shield, Award, Users, Scale } from 'lucide-react'

export default function Mission() {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Caring for mothers with dignity and love."
    },
    {
      icon: Shield,
      title: "Integrity", 
      description: "Serving with honesty and accountability."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in maternal care."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with communities and partners."
    },
    {
      icon: Scale,
      title: "Equity",
      description: "Ensuring no mother is left behind."
    }
  ]

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Target className="h-12 w-12 text-pink-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              To promote safe pregnancy, childbirth and maternal health by providing 
              education, advocacy and support to mothers and families.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Eye className="h-12 w-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              A society where every mother has access to safe, respectful and 
              quality maternal healthcare.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our values guide everything we do in our mission to support mothers and families
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-pink-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-xl mb-8 opacity-90">
            Together, we can ensure every mother receives the care and support she deserves
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Volunteer With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
