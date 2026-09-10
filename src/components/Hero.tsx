import React from 'react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden bg-zinc-950">
      {/* Animated Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-950 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2000" 
          alt="Rich Mughlai Food Spread" 
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <div className="container mx-auto px-4 z-20 relative text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-red-600 hidden sm:block"></span>
            <span className="text-red-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm flex items-center gap-2">
              <UtensilsCrossed size={16} />
              {RESTAURANT_INFO.cuisines}
            </span>
            <span className="w-12 h-[1px] bg-red-600 hidden sm:block"></span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-4 drop-shadow-2xl">
            {RESTAURANT_INFO.name}
          </h1>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic font-medium tracking-wide mb-8 drop-shadow-md">
            "{RESTAURANT_INFO.tagline}"
          </h2>
          
          <p className="text-zinc-300 text-base md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the authentic taste of Ahmedabad. Premium tawa specials, rich Mughlai gravies, 
            and fiery tandoori delights prepared with centuries-old recipes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mx-auto max-w-md sm:max-w-none">
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all shadow-[0_8px_30px_rgba(185,28,28,0.4)] hover:shadow-[0_8px_40px_rgba(185,28,28,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Explore Menu
              <ChevronRight size={20} />
            </a>
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Call to Order
            </a>
          </div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 inline-flex flex-wrap justify-center gap-6 md:gap-12 border-t border-white/10 pt-8"
          >
            {[
              { label: 'Free Delivery', value: RESTAURANT_INFO.minOrder.split(' for')[0] + '+' },
              { label: 'Timings', value: '12 PM - 12 AM' },
              { label: 'Location', value: 'Ahmedabad' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-white font-black text-lg md:text-xl mb-1 tracking-tight">{stat.value}</div>
                <div className="text-orange-400/80 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
