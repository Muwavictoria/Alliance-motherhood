import { BookOpen, Baby, Users, MessageCircle, Stethoscope, Megaphone, HandHeart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Maternal Health Education",
      description: "Conduct workshops and seminars for expectant mothers on safe pregnancy, nutrition, and childbirth practices. Provide educational materials about maternal and newborn care.",
      features: ["Pregnancy workshops", "Nutrition guidance", "Educational materials", "Childbirth preparation"]
    },
    {
      icon: Baby,
      title: "Antenatal & Postnatal Support", 
      description: "Guidance on regular antenatal check-ups. Postnatal counseling to help mothers recover safely and care for their newborns.",
      features: ["Regular check-ups", "Recovery support", "Newborn care guidance", "Health monitoring"]
    },
    {
      icon: Users,
      title: "Community Outreach & Awareness",
      description: "Organize campaigns to raise awareness on safe motherhood and family planning. Partner with local communities to reach remote and underserved areas.",
      features: ["Awareness campaigns", "Family planning", "Remote area outreach", "Community partnerships"]
    },
    {
      icon: MessageCircle,
      title: "Counseling & Emotional Support",
      description: "Provide one-on-one or group counseling for mothers experiencing anxiety, depression, or complications. Offer peer support networks for sharing experiences and advice.",
      features: ["Individual counseling", "Group therapy", "Peer support networks", "Mental health care"]
    },
    {
      icon: Stethoscope,
      title: "Medical Referral Services",
      description: "Connect mothers to hospitals, clinics, and specialist care when needed. Help with transportation and guidance for mothers in emergency situations.",
      features: ["Hospital connections", "Specialist referrals", "Emergency transport", "Medical guidance"]
    },
    {
      icon: Megaphone,
      title: "Advocacy & Policy Engagement",
      description: "Work with government and NGOs to improve maternal healthcare policies. Advocate for maternal rights and accessibility of quality healthcare.",
      features: ["Policy advocacy", "Government collaboration", "Healthcare rights", "System improvement"]
    },
    {
      icon: HandHeart,
      title: "Volunteer & Community Programs",
      description: "Engage volunteers to assist in education campaigns and community support activities. Train community health workers to improve maternal care at the local level.",
      features: ["Volunteer programs", "Community training", "Health worker development", "Local capacity building"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive maternal healthcare services designed to support mothers and families at every stage
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-pink-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Service Highlights */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide holistic care that addresses not just medical needs, but emotional and social support too
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">24/7</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Available Support</h4>
              <p className="text-gray-600">Round-the-clock emergency care and support for expecting mothers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">100%</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Care</h4>
              <p className="text-gray-600">Every mother receives dignified, respectful, and loving care</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">Free</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Access</h4>
              <p className="text-gray-600">Many services available at no cost to underserved communities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
