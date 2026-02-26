import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const SERVICE_AREAS = [
  'Mahipalpur Extension',
  'Mahipalpur Village',
  'Aerocity',
  'Vasant Kunj',
  'RK Puram',
  'Kapashera',
];

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-3">
            Contact <span className="text-brand-orange">Us</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Reach out anytime — we're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Phone */}
          <a
            href="tel:8447978940"
            className="contact-card group"
          >
            <div className="w-14 h-14 bg-brand-orange/10 group-hover:bg-brand-orange rounded-2xl flex items-center justify-center mb-4 transition-all duration-200">
              <Phone size={26} className="text-brand-orange group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-bold text-navy mb-1">Call Us</h4>
            <p className="text-brand-orange font-semibold text-lg">8447978940</p>
            <p className="text-gray-400 text-xs mt-1">Tap to call directly</p>
          </a>

          {/* Email */}
          <a
            href="mailto:quickrepair@help.in"
            className="contact-card group"
          >
            <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-500 rounded-2xl flex items-center justify-center mb-4 transition-all duration-200">
              <Mail size={26} className="text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-bold text-navy mb-1">Email Us</h4>
            <p className="text-blue-500 font-medium text-sm break-all">quickrepair@help.in</p>
            <p className="text-gray-400 text-xs mt-1">We reply within 2 hours</p>
          </a>

          {/* Working Hours */}
          <div className="contact-card group">
            <div className="w-14 h-14 bg-green-50 group-hover:bg-green-500 rounded-2xl flex items-center justify-center mb-4 transition-all duration-200">
              <Clock size={26} className="text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-bold text-navy mb-1">Working Hours</h4>
            <p className="text-green-600 font-semibold">8 AM – 10 PM</p>
            <p className="text-brand-orange font-semibold text-sm">Emergency 24x7</p>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8447978940"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group"
          >
            <div className="w-14 h-14 bg-green-50 group-hover:bg-green-500 rounded-2xl flex items-center justify-center mb-4 transition-all duration-200">
              <MessageCircle size={26} className="text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-bold text-navy mb-1">WhatsApp</h4>
            <p className="text-green-600 font-semibold">8447978940</p>
            <p className="text-gray-400 text-xs mt-1">Chat with us instantly</p>
          </a>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-2xl p-6 shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
              <MapPin size={20} className="text-brand-orange" />
            </div>
            <h4 className="font-extrabold text-navy text-lg">Service Areas</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map(area => (
              <span
                key={area}
                className="bg-navy text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-orange transition-colors duration-200 cursor-default"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
