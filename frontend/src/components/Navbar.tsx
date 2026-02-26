import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleBecomeMechanic = () => {
    const msg = encodeURIComponent(
      'Hi QuickRepair, main mechanic banana chahta hoon. Mera naam ______, phone ______, service ______.'
    );
    window.open(`https://wa.me/8447978940?text=${msg}`, '_blank');
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Contact', action: () => scrollToSection('contact') },
    { label: 'Become Mechanic', action: handleBecomeMechanic, highlight: true },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-lg' : 'bg-navy/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 focus:outline-none"
              aria-label="QuickRepair Home"
            >
              <span className="text-2xl">🔧</span>
              <span className="font-extrabold text-xl tracking-tight">
                <span className="text-brand-yellow">Quick</span>
                <span className="text-brand-orange">Repair</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.slice(0, 4).map(item => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-gray-300 hover:text-brand-yellow transition-colors text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBecomeMechanic}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
              >
                Become Mechanic
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2 rounded-md hover:bg-navy-light transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-navy-dark shadow-2xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-navy-light">
          <span className="font-extrabold text-lg">
            <span className="text-brand-yellow">Quick</span>
            <span className="text-brand-orange">Repair</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white p-1"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col py-4">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={item.action}
              className={`text-left px-6 py-4 text-base font-medium transition-colors border-b border-navy-light/30 ${
                item.highlight
                  ? 'text-brand-orange hover:bg-brand-orange/10'
                  : 'text-gray-200 hover:text-brand-yellow hover:bg-navy-light/50'
              }`}
            >
              {item.label === 'Become Mechanic' ? '🔧 ' : ''}{item.label}
            </button>
          ))}
        </nav>
        <div className="px-6 pt-4">
          <p className="text-gray-400 text-xs">📞 8447978940</p>
          <p className="text-gray-400 text-xs mt-1">⏰ 8 AM – 10 PM | Emergency 24x7</p>
        </div>
      </div>
    </>
  );
}
