import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { THAAL_SPECIALS } from '../data';
import { Users, ChevronDown, Utensils } from 'lucide-react';

export default function ThaalSpecial() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second one (Mini Thaal) by default

  return (
    <section id="thaal" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-red-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">Group Dining</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            The Royal <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Thaals</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Experience authentic Mughlai hospitality with our grand family-sized Thaals. 
            Perfect for sharing with your loved ones, offering unmatched value and variety.
          </p>
        </div>

        <div className="space-y-4">
          {THAAL_SPECIALS.map((thaal, index) => {
            const isOpen = openIndex === index;
            const isPopular = thaal.name === "Shahi Thaal" || thaal.name === "Silver Thaal";
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-zinc-900 border-orange-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {thaal.name}
                      </h3>
                      {isPopular && (
                        <span className="hidden sm:inline-block bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                      <Users size={16} className="text-orange-500" />
                      Serves {thaal.serves}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 md:gap-8 shrink-0">
                    <div className="text-2xl md:text-3xl font-black text-orange-400">
                      {thaal.price}
                    </div>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-full ${isOpen ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-zinc-400'}`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-white/5 mt-2">
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">What's Included</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {thaal.items.split(', ').map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm md:text-base leading-relaxed">
                              <Utensils size={16} className="text-red-500 shrink-0 mt-1 opacity-70" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 flex justify-end">
                           <button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:-translate-y-0.5">
                             Order {thaal.name}
                           </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
