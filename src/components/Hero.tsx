import React from 'react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-orange-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/80 via-orange-950/60 to-orange-950/95 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=2000" 
          alt="Rich Mughlai Food Spread" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-red-500 hidden md:block"></span>
            <span className="text-red-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm flex items-center gap-2">
              <UtensilsCrossed size={14} />
              {RESTAURANT_INFO.cuisines}
            </span>
            <span className="w-12 h-[1px] bg-red-500 hidden md:block"></span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
            <span className="block">{RESTAURANT_INFO.name}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300 block text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-2 font-serif italic font-medium tracking-normal">
              "{RESTAURANT_INFO.tagline}"
            </span>
          </h1>
          
          <p className="text-orange-100/80 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the authentic taste of Ahmedabad. Premium tawa specials, rich Mughlai gravies, 
            and fiery tandoori delights prepared with centuries-old recipes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(185,28,28,0.4)] hover:shadow-[0_0_30px_rgba(185,28,28,0.6)] flex items-center justify-center gap-2"
            >
              Explore Menu
              <ChevronRight size={18} />
            </a>
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-2"
            >
              Call to Order
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8 w-full max-w-3xl">
            {[
              { label: 'Free Delivery', value: 'On ₹500+' },
              { label: 'Timings', value: RESTAURANT_INFO.timings },
              { label: 'Specialty', value: 'Tawa & Mughlai' },
              { label: 'Location', value: RESTAURANT_INFO.address },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-white font-bold mb-1 text-sm md:text-base">{stat.value}</div>
                <div className="text-orange-200/50 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
