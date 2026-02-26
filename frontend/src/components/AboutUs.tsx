import React from 'react';
import { ShieldCheck, Clock, Banknote, BadgeCheck } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    emoji: '✅',
    title: 'Verified Mechanics',
    desc: 'All our mechanics are background-checked, trained, and verified for your safety and peace of mind.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: Clock,
    emoji: '⏱️',
    title: '10 Min Guarantee',
    desc: 'We guarantee a mechanic at your doorstep within 10 minutes of booking. No waiting, no delays.',
    color: 'text-brand-yellow',
    bg: 'bg-yellow-50',
  },
  {
    icon: Banknote,
    emoji: '💵',
    title: 'Cash on Delivery',
    desc: 'Pay only after the job is done. No advance payment required — complete trust and transparency.',
    color: 'text-brand-orange',
    bg: 'bg-orange-50',
  },
  {
    icon: BadgeCheck,
    emoji: '🚫',
    title: 'No Hidden Charges',
    desc: 'Fixed prices displayed upfront. What you see is what you pay — zero surprise charges ever.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
            About <span className="text-brand-orange">QuickRepair</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            QuickRepair is Mahipalpur's most trusted home service platform. We connect you with
            skilled, verified mechanics in under 10 minutes — so you never have to wait for help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, emoji, title, desc, color, bg }) => (
            <div
              key={title}
              className="rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <Icon size={30} className={color} />
              </div>
              <h4 className="font-extrabold text-navy text-lg mb-2">{title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 bg-navy rounded-2xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: '500+', label: 'Happy Customers' },
            { value: '10 Min', label: 'Avg Response Time' },
            { value: '50+', label: 'Verified Mechanics' },
            { value: '6', label: 'Service Areas' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-yellow">{stat.value}</div>
              <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
