import React from 'react';
import { motion } from 'motion/react';
import { FEATURED_DISHES } from '../data';
import { ArrowRight } from 'lucide-react';

export default function FeaturedDishes() {
  return (
    <section className="py-24 bg-[#FFFDF8] relative">
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-red-700"></span>
              <span className="text-red-700 font-bold tracking-widest uppercase text-sm">Chef's Recommendations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Signature <span className="text-red-700">Dishes</span>
            </h2>
          </div>
          <a href="#menu" className="group flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wide text-sm hover:text-red-700 transition-colors">
            View Full Menu
            <span className="bg-red-100 text-red-700 p-2 rounded-full group-hover:bg-red-700 group-hover:text-white transition-colors">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_DISHES.map((dish, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(185,28,28,0.1)] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur text-slate-900 px-4 py-1.5 rounded-full font-bold shadow-lg">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dish.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
