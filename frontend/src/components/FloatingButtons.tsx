import React from 'react';
import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-40">
      <a
        href="https://wa.me/8447978940"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-green-500 hover:bg-green-600 text-white"
        aria-label="WhatsApp"
      >
        <SiWhatsapp size={22} />
      </a>
      <a
        href="tel:8447978940"
        className="floating-btn bg-navy hover:bg-navy-light text-white"
        aria-label="Call"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
