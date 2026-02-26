import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-light-gray overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
