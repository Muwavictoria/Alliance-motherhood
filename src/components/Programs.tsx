import { Calendar, Clock, Stethoscope, Camera, Users, Shield, Search } from 'lucide-react'

export default function Programs() {
  const weeklySchedule = [
    {
      day: "Monday",
      service: "Gynaecology Clinic Day",
      icon: Stethoscope,
      description: "Specialized women's health consultations and treatments",
      color: "from-pink-500 to-rose-500"
    },
    {
      day: "Tuesday", 
      service: "General Consultations",
      icon: Users,
      description: "Comprehensive health check-ups and medical consultations",
      color: "from-blue-500 to-indigo-500"
    },
    {
      day: "Wednesday",
      service: "Ultrasound Scan & X-ray",
      icon: Camera,
      description: "Advanced imaging services for maternal and general health",
      color: "from-purple-500 to-violet-500"
    },
    {
      day: "Thursday",
      service: "Family Planning Day",
      icon: Shield,
      description: "Contraception counseling and family planning services",
      color: "from-green-500 to-emerald-500"
    },
    {
      day: "Friday",
      service: "Cervical Cancer Screening",
      icon: Search,
      description: "Early detection and prevention screening services",
      color: "from-orange-500 to-amber-500"
    }
  ]

  const dailyServices = [
    "Antenatal Care",
    "Ultrasound Services", 
    "X-ray Services",
    "Emergency Maternal Care",
    "Health Education",
    "Counseling Support"
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured healthcare programs designed to meet the diverse needs of mothers and families
          </p>
        </div>

        {/* Daily Services Banner */}
        <div className="bg-gradient-to-r from-pink-600 to-blue-600 rounded-2xl p-8 mb-16 text-white">
          <div className="text-center mb-8">
            <Clock className="h-16 w-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-3xl font-bold mb-2">Daily Services Available</h3>
            <p className="text-xl opacity-90">Essential maternal health services available every day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dailyServices.map((service, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="w-3 h-3 bg-white rounded-full mx-auto mb-2"></div>
                <span className="font-semibold">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Weekly Specialized Programs</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each day of the week features specialized services to address specific healthcare needs
            </p>
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
            {weeklySchedule.map((program, index) => {
              const IconComponent = program.icon
              return (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full hover:-translate-y-2">
                    <div className={`bg-gradient-to-r ${program.color} rounded-xl p-4 mb-4`}>
                      <IconComponent className="h-8 w-8 text-white mx-auto" />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{program.day}</h4>
                      <h5 className="text-lg font-semibold text-pink-600 mb-3">{program.service}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Program Features */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Program Features</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our programs are designed with flexibility and accessibility in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-pink-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
              <p className="text-gray-600 text-sm">Appointments available to fit your schedule</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Care</h4>
              <p className="text-gray-600 text-sm">Qualified healthcare professionals</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Safe Environment</h4>
              <p className="text-gray-600 text-sm">Clean, safe, and welcoming facilities</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Care</h4>
              <p className="text-gray-600 text-sm">Holistic approach to maternal health</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Book an appointment or learn more about our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg">
              Book Appointment
            </button>
            <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
