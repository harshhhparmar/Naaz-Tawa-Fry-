/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import ThaalSpecial from './components/ThaalSpecial';
import MenuPreview from './components/MenuPreview';
import WhyNaaz from './components/WhyNaaz';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] font-sans selection:bg-red-200 selection:text-red-900 pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <ThaalSpecial />
        <MenuPreview />
        <WhyNaaz />
        <ContactCTA />
      </main>
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a 
          href="#menu" 
          className="flex-1 flex flex-col items-center justify-center py-3 text-slate-600 font-semibold text-xs gap-1 border-r border-slate-200 hover:bg-slate-50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          <span>Menu</span>
        </a>
        <a 
          href={`tel:+918980966194`}
          className="flex-1 flex flex-col items-center justify-center py-3 text-white font-bold text-xs gap-1 bg-red-700 hover:bg-red-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}
