import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data';
import { ChefHat, Leaf, Users, Truck } from 'lucide-react';

const ICONS = [ChefHat, Leaf, Users, Truck];

export default function WhyNaaz() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Why <span className="text-red-700">Naaz Tawa Fry?</span>
          </h2>
          <p className="text-slate-500">
            We don't just serve food; we serve memories. Our commitment to quality and authentic taste makes us Ahmedabad's favorite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((feature, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[#FFFDF8] hover:bg-red-50/50 transition-colors border border-orange-900/5 group"
              >
                <div className="w-16 h-16 mx-auto bg-red-100 text-red-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
