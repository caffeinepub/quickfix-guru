import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'quickrepair-mahipalpur');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🔧</span>
              <span className="font-extrabold text-xl">
                <span className="text-brand-yellow">Quick</span>
                <span className="text-brand-orange">Repair</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              10 Minute Service at Your Doorstep. Serving Mahipalpur and surrounding areas with
              verified, professional mechanics.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:8447978940" className="flex items-center gap-2 hover:text-brand-orange transition-colors group">
                <Phone size={14} className="text-brand-orange shrink-0" />
                <span>8447978940</span>
              </a>
              <a href="mailto:quickrepair@help.in" className="flex items-center gap-2 hover:text-brand-orange transition-colors group">
                <Mail size={14} className="text-brand-orange shrink-0" />
                <span>quickrepair@help.in</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-orange shrink-0" />
                <span>Mahipalpur, Delhi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'About Us', id: 'about' },
                { label: 'Contact Us', id: 'contact' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-brand-yellow transition-colors hover:translate-x-1 transform inline-block"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: 'Plumber', price: '₹460' },
                { name: 'Electrician', price: '₹160' },
                { name: 'Fan / Cooler Repair', price: '₹190' },
                { name: 'AC Repair', price: '₹470' },
                { name: 'Mechanic (General)', price: '₹390' },
              ].map(s => (
                <li key={s.name} className="flex justify-between">
                  <span>{s.name}</span>
                  <span className="text-brand-orange font-semibold">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light pt-5 text-center text-xs text-gray-500 space-y-2">
          <p>© {year} QuickRepair. All rights reserved. | Mahipalpur, Delhi</p>
          <p className="flex items-center justify-center gap-1">
            Built with{' '}
            <Heart size={12} className="text-brand-orange fill-brand-orange mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline ml-0.5"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
