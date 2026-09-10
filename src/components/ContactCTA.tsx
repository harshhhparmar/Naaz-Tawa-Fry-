import React from 'react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data';
import { Phone, MapPin, Clock, Info } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-orange-950 text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="bg-red-900/20 border border-red-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Ready to <span className="text-orange-400">Order?</span>
            </h2>
            <p className="text-orange-100/80 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              Experience the best Mughlai and Tawa dishes in Ahmedabad. Call us now for reservations or free home delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
              <a 
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2"
              >
                <Phone size={20} className="animate-pulse" />
                Call {RESTAURANT_INFO.phone}
              </a>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_INFO.name + ' ' + RESTAURANT_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <Clock className="text-orange-400 mb-3" size={24} />
                <h4 className="font-bold text-white mb-1">Opening Hours</h4>
                <p className="text-orange-100/70 text-sm">{RESTAURANT_INFO.timings}</p>
                <p className="text-orange-100/70 text-sm">Open 7 days a week</p>
              </div>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <MapPin className="text-orange-400 mb-3" size={24} />
                <h4 className="font-bold text-white mb-1">Location</h4>
                <p className="text-orange-100/70 text-sm">{RESTAURANT_INFO.address}</p>
              </div>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <Info className="text-orange-400 mb-3" size={24} />
                <h4 className="font-bold text-white mb-1">Delivery</h4>
                <p className="text-orange-100/70 text-sm">{RESTAURANT_INFO.minOrder}</p>
                <p className="text-orange-100/70 text-sm">{RESTAURANT_INFO.deliveryArea}</p>
              </div>
              <div className="bg-black/20 p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                <h4 className="font-bold text-white mb-3">Order Online</h4>
                <div className="flex gap-3">
                  <a href={RESTAURANT_INFO.zomatoLink} className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform">Zomato</a>
                  <a href={RESTAURANT_INFO.swiggyLink} className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform">Swiggy</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
