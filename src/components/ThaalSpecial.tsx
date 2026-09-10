import React from 'react';
import { motion } from 'motion/react';
import { THAAL_SPECIALS } from '../data';
import { Users, CheckCircle2 } from 'lucide-react';

export default function ThaalSpecial() {
  return (
    <section id="thaal" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-red-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Family Dining</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            The Royal <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Thaal</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Experience true Mughlai hospitality with our massive family-sized Thaals. 
            Perfect for sharing with your loved ones, offering the best value and variety.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {THAAL_SPECIALS.map((thaal, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border ${index === 1 ? 'bg-red-950/40 border-red-500/30' : 'bg-white/5 border-white/10'} backdrop-blur-sm relative overflow-hidden group hover:border-red-500/50 transition-colors flex flex-col`}
            >
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
                <img src={thaal.image} alt={thaal.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                {index === 1 && (
                  <div className="absolute top-0 right-0 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg">
                    Most Popular
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold text-white mb-2">{thaal.name}</h3>
                <div className="flex items-center gap-2 text-zinc-400 mb-6 text-sm font-medium">
                  <Users size={16} />
                  Serves {thaal.serves}
                </div>
                
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-8 pb-8 border-b border-white/10">
                  {thaal.price}
                </div>

                <div className="space-y-4 mb-8 grow">
                  <p className="text-sm text-zinc-300 font-medium uppercase tracking-wider mb-2">Includes:</p>
                  <ul className="space-y-3">
                    {thaal.items.split(', ').map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-4 rounded-xl font-bold tracking-wide transition-all mt-auto ${
                  index === 1 
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}>
                  Order This Thaal
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
