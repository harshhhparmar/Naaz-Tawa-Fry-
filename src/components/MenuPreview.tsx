import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_CATEGORIES } from '../data';
import { Download } from 'lucide-react';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].category);

  const currentCategoryData = MENU_CATEGORIES.find(c => c.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-red-700"></span>
            <span className="text-red-700 font-bold tracking-[0.2em] uppercase text-sm">Our Offerings</span>
            <span className="w-12 h-[2px] bg-red-700"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-500">Menu</span>
          </h2>
        </div>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {MENU_CATEGORIES.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat.category
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="bg-[#FFFDF8] rounded-3xl p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-orange-900/5 min-h-[300px]">
          <div className="w-full flex flex-col justify-center">
            
            {/* Header for Half/Full if applicable */}
            {currentCategoryData?.items.some(item => item.fullPrice) && (
              <div className="hidden md:flex justify-end mb-4 pr-4 border-b border-orange-900/10 pb-2">
                <div className="flex gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest w-[160px] justify-between">
                  <span>Half</span>
                  <span>Full</span>
                </div>
              </div>
            )}

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4"
            >
              {currentCategoryData?.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-orange-900/5 pb-4 group">
                  <div className="pr-4">
                    <h4 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-red-700 transition-colors">{item.name}</h4>
                  </div>
                  
                  <div className="flex shrink-0">
                    {item.fullPrice ? (
                      <div className="flex items-center gap-6 md:gap-8 w-[120px] md:w-[160px] justify-between">
                        <div className="flex flex-col md:block text-right w-full">
                          <span className="md:hidden text-[10px] text-slate-400 uppercase leading-none mb-1">Half</span>
                          <span className="text-base md:text-lg font-bold text-slate-700">{item.price}</span>
                        </div>
                        <div className="flex flex-col md:block text-right w-full">
                          <span className="md:hidden text-[10px] text-slate-400 uppercase leading-none mb-1">Full</span>
                          <span className="text-base md:text-lg font-black text-slate-900">{item.fullPrice}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-base md:text-lg font-black text-slate-900">
                        {item.price}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-12 text-center flex justify-center">
          <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold tracking-wide transition-colors">
            <Download size={20} />
            Download PDF Menu
          </button>
        </div>
      </div>
    </section>
  );
}
