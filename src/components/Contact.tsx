import { Phone, Mail, MapPin, Globe, MessageCircle, Clock, Send } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+256 782 184 024", "+256 758 989 861"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@alliancesafemotherhood.org"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.allianceforsafemotherhood.org"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+256 782 184 024", "+256 758 989 861"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["KADAMA, P.O BOX 150, MBALE"],
      color: "from-red-500 to-pink-500"
    }
  ]

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@allianceforsafemotherhood",
      url: "https://instagram.com/allianceforsafemotherhood",
      color: "from-pink-500 to-purple-500"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments, emergencies, or any questions about our services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${contact.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h4>
                        {contact.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">
                            {contact.title === "Phone Numbers" || contact.title === "WhatsApp" ? (
                              <a href={`tel:${detail}`} className="hover:text-pink-600 transition-colors">
                                {detail}
                              </a>
                            ) : contact.title === "Email" ? (
                              <a href={`mailto:${detail}`} className="hover:text-pink-600 transition-colors">
                                {detail}
                              </a>
                            ) : contact.title === "Website" ? (
                              <a href={`https://${detail}`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${social.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900">{social.platform}</h5>
                        <a 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 transition-colors"
                        >
                          {social.handle}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form & Emergency Info */}
          <div>
            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white mb-8">
              <div className="text-center">
                <Phone className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Emergency Contact</h3>
                <p className="text-lg mb-4 opacity-90">24/7 Emergency Maternal Care</p>
                <div className="space-y-2">
                  <a href="tel:+256782184024" className="block text-xl font-bold hover:opacity-80 transition-opacity">
                    +256 782 184 024
                  </a>
                  <a href="tel:+256758989861" className="block text-xl font-bold hover:opacity-80 transition-opacity">
                    +256 758 989 861
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="antenatal">Antenatal Care</option>
                    <option value="gynaecology">Gynaecology Consultation</option>
                    <option value="ultrasound">Ultrasound & X-ray</option>
                    <option value="family-planning">Family Planning</option>
                    <option value="screening">Cervical Cancer Screening</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Office Hours */}
            <div className="mt-8 bg-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
                <h4 className="text-xl font-semibold text-gray-900">Office Hours</h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-3">
                  <span>Emergency Care:</span>
                  <span className="font-semibold text-red-600">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
