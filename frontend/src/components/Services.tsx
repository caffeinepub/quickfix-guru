import React from 'react';
import { Wrench, Zap, Wind, Thermometer, Settings } from 'lucide-react';

const SERVICE_LIST = [
  {
    key: 'Plumber',
    icon: Wrench,
    price: 460,
    desc: 'Leaks, pipes, taps & drainage',
    emoji: '🔧',
  },
  {
    key: 'Electrician',
    icon: Zap,
    price: 160,
    desc: 'Wiring, switches & appliances',
    emoji: '⚡',
  },
  {
    key: 'Fan / Cooler Repair',
    icon: Wind,
    price: 190,
    desc: 'Fan, cooler service & repair',
    emoji: '🌀',
  },
  {
    key: 'AC Repair',
    icon: Thermometer,
    price: 470,
    desc: 'AC service, repair & installation',
    emoji: '❄️',
  },
  {
    key: 'Mechanic (General)',
    icon: Settings,
    price: 390,
    desc: 'General mechanical repairs',
    emoji: '⚙️',
  },
];

export default function Services() {
  const handleCardClick = (serviceName: string) => {
    const msg = encodeURIComponent(
      `Hi QuickRepair, I need ${serviceName} in Mahipalpur.`
    );
    window.open(`https://wa.me/8447978940?text=${msg}`, '_blank');
  };

  const whatsappGeneral = encodeURIComponent(
    'Hi QuickRepair, mujhe service chahiye Mahipalpur mein'
  );

  return (
    <section id="services" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-3">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Click any service to instantly book via WhatsApp. Fixed prices, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SERVICE_LIST.map(({ key, icon: Icon, price, desc, emoji }, index) => (
            <div
              key={key}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(key)}
              aria-label={`Book ${key} for ₹${price}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-brand-orange/10 group-hover:bg-brand-orange rounded-2xl flex items-center justify-center transition-all duration-200 shrink-0 text-2xl">
                  <span className="group-hover:hidden">{emoji}</span>
                  <Icon size={28} className="text-white hidden group-hover:block" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{key}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-brand-orange font-extrabold text-xl">₹{price}</span>
                  <span className="text-gray-400 text-xs ml-1">fixed</span>
                </div>
                <span className="bg-navy text-white text-xs px-4 py-2 rounded-full font-semibold group-hover:bg-brand-orange transition-colors duration-200 flex items-center gap-1">
                  📲 Book Now
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href={`https://wa.me/8447978940?text=${whatsappGeneral}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-pulse-btn inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-extrabold px-10 py-5 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          >
            📲 BOOK VIA WHATSAPP
          </a>
          <p className="text-gray-400 text-sm mt-3">
            Instant response · Cash on Delivery · No hidden charges
          </p>
        </div>
      </div>
    </section>
  );
}
