import React from 'react';
import { motion } from 'motion/react';
import { FEATURED_DISHES } from '../data';
import { ArrowRight } from 'lucide-react';

export default function FeaturedDishes() {
  return (
    <section className="py-24 bg-[#FFFDF8] relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-red-700"></span>
              <span className="text-red-700 font-bold tracking-[0.2em] uppercase text-sm">Chef's Recommendations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Signature <span className="text-red-700">Dishes</span>
            </h2>
          </div>
          <a href="#menu" className="group flex items-center gap-3 text-slate-900 font-bold uppercase tracking-wide text-sm hover:text-red-700 transition-colors">
            View Full Menu
            <span className="bg-red-100 text-red-700 p-2.5 rounded-full group-hover:bg-red-700 group-hover:text-white transition-all shadow-sm">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[600px]">
          {FEATURED_DISHES.slice(0, 5).map((dish, index) => {
            // Determine grid placement for editorial look
            let gridClass = "md:col-span-1 md:row-span-1 h-[300px] md:h-auto";
            if (index === 0) gridClass = "md:col-span-2 md:row-span-2 h-[400px] md:h-auto";
            else if (index === 1) gridClass = "md:col-span-2 md:row-span-1 h-[300px] md:h-auto";

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${gridClass} bg-slate-900`}
              >
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className={`font-bold text-white mb-1 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'} drop-shadow-md`}>
                      {dish.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-orange-400 font-black text-lg md:text-xl drop-shadow-md">{dish.price}</span>
                      <span className="bg-red-700/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
