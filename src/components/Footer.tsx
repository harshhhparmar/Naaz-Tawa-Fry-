import React from 'react';
import { RESTAURANT_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-orange-100 font-bold tracking-tighter">
                N
              </div>
              <span className="text-xl font-black tracking-wider uppercase text-white">
                Naaz Tawa Fry
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto md:mx-0">
              {RESTAURANT_INFO.tagline}. Authentic flavors, premium quality, and unforgettable memories in Ahmedabad.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-zinc-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#menu" className="text-zinc-400 hover:text-white transition-colors text-sm">Menu</a></li>
              <li><a href="#thaal" className="text-zinc-400 hover:text-white transition-colors text-sm">Thaal Specials</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>{RESTAURANT_INFO.address}</li>
              <li>Phone: <a href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{RESTAURANT_INFO.phone}</a></li>
              <li>Hours: {RESTAURANT_INFO.timings}</li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {currentYear} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p>Designed for premium dining experience.</p>
        </div>
      </div>
    </footer>
  );
}
