import React from 'react';

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappMsg = encodeURIComponent('Hi QuickRepair, mujhe service chahiye Mahipalpur mein');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 hero-gradient-anim" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 hero-float">
          🔧 <span className="text-brand-yellow">Quick</span><span className="text-brand-orange">Repair</span>{' '}
          <span className="text-white">Mahipalpur</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-4 font-medium">
          10 Minute Service at Your Doorstep
        </p>

        <p className="text-sm sm:text-base text-gray-300 mb-10 max-w-xl mx-auto">
          Professional plumbers, electricians, AC repair & more — available 8 AM to 10 PM.
          Emergency service 24x7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            View Services
          </button>
          <a
            href={`https://wa.me/8447978940?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
          >
            📲 Book via WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['⚡ 10 Min Response', '✅ Verified Mechanics', '💵 Cash on Delivery', '🚫 No Hidden Charges'].map(badge => (
            <span
              key={badge}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 rounded-full text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
