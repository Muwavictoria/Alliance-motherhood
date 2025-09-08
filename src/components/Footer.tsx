import { Heart, Phone, Mail, MapPin, Globe, MessageCircle, Clock } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Mission", href: "#mission" },
    { name: "Services", href: "#services" },
    { name: "Programs", href: "#programs" },
    { name: "Contact", href: "#contact" }
  ]

  const services = [
    "Maternal Health Education",
    "Antenatal & Postnatal Support", 
    "Community Outreach",
    "Counseling Support",
    "Medical Referral Services",
    "Advocacy & Policy",
    "Volunteer Programs"
  ]

  const programs = [
    "Monday: Gynaecology Clinic",
    "Tuesday: General Consultations",
    "Wednesday: Ultrasound & X-ray",
    "Thursday: Family Planning",
    "Friday: Cervical Cancer Screening"
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-pink-500" />
              <div>
                <h3 className="text-xl font-bold">Alliance for Safe Motherhood</h3>
                <p className="text-sm text-gray-400">Women&apos;s Medical Centre</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Promoting safe pregnancy, childbirth and maternal health through education, 
              advocacy and support to mothers and families.
            </p>
            
            {/* Emergency Contact */}
            <div className="bg-red-600 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5" />
                <span className="font-semibold">24/7 Emergency</span>
              </div>
              <div className="space-y-1">
                <a href="tel:+256782184024" className="block hover:text-red-200 transition-colors">
                  +256 782 184 024
                </a>
                <a href="tel:+256758989861" className="block hover:text-red-200 transition-colors">
                  +256 758 989 861
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#donation" 
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  Donate Now
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & Programs</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">KADAMA, P.O BOX 150</p>
                  <p className="text-gray-300 text-sm">MBALE, UGANDA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-500" />
                <a 
                  href="mailto:info@alliancesafemotherhood.org" 
                  className="text-gray-300 text-sm hover:text-pink-400 transition-colors"
                >
                  info@alliancesafemotherhood.org
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-pink-500" />
                <a 
                  href="https://www.allianceforsafemotherhood.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-pink-400 transition-colors"
                >
                  www.allianceforsafemotherhood.org
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-pink-500" />
                <a 
                  href="https://instagram.com/allianceforsafemotherhood" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-pink-400 transition-colors"
                >
                  @allianceforsafemotherhood
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="font-semibold text-sm">Office Hours</span>
              </div>
              <div className="space-y-1 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Programs */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Weekly Specialized Programs</h4>
          <div className="grid md:grid-cols-5 gap-4">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-300">{program}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Alliance for Safe Motherhood and Women&apos;s Medical Centre. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Dedicated to ensuring every mother has access to safe, respectful and quality maternal healthcare.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-pink-400 text-sm font-semibold">Give today, and be the reason someone smiles</span>
              <Heart className="h-5 w-5 text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
