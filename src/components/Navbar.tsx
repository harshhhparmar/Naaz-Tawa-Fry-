import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#thaal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-orange-950/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-orange-100 font-bold text-xl tracking-tighter border border-orange-500/30">
            N
          </div>
          <a href="#" className={`text-xl font-black tracking-wider uppercase ${isScrolled ? 'text-orange-50' : 'text-white drop-shadow-md'}`}>
            Naaz Tawa Fry
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-orange-400 ${
                    isScrolled ? 'text-orange-100/80' : 'text-white/90 drop-shadow-sm'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-red-900/50 hover:-translate-y-0.5"
          >
            <Phone size={16} className="animate-pulse" />
            Order Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-orange-100 p-2 transition-transform hover:scale-110"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-orange-950 shadow-2xl z-[70] md:hidden flex flex-col border-l border-white/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-xl font-black tracking-wider uppercase text-white">Menu</span>
                <button 
                  className="text-orange-100 p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col py-6 px-6 gap-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block text-orange-100/90 hover:text-white uppercase tracking-wider text-lg py-4 border-b border-white/5 font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-8">
                  <a 
                    href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 active:bg-red-800 transition-colors text-white px-5 py-4 rounded-xl text-base font-bold tracking-wide w-full shadow-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone size={18} className="animate-pulse" />
                    Call to Order
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
