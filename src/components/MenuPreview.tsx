import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES } from '../data';
import { Download } from 'lucide-react';

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].category);

  const currentCategoryData = MENU_CATEGORIES.find(c => c.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#FFFDF8]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-red-700"></span>
              <span className="text-red-700 font-bold tracking-widest uppercase text-sm">Discover</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our <span className="text-red-700">Menu</span>
            </h2>
          </div>
          <button className="flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 py-3 rounded-full font-bold uppercase tracking-wide text-sm transition-all">
            <Download size={16} />
            Download PDF
          </button>
        </div>

        {/* Menu Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-12 pb-2">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`whitespace-nowrap px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.category 
                  ? 'bg-red-700 text-white shadow-md' 
                  : 'bg-white text-slate-600 hover:bg-red-50 hover:text-red-700 border border-slate-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
            >
              {currentCategoryData?.items.map((item, index) => (
                <div key={index} className="flex justify-between items-baseline border-b border-slate-100 pb-4 group">
                  <div className="pr-4">
                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-red-700 transition-colors">{item.name}</h4>
                  </div>
                  <div className="text-lg font-black text-slate-900 shrink-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-12 text-center">
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-colors">
              View Complete Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
