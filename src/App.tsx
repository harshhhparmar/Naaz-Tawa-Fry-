/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDishes from './components/FeaturedDishes';
import ThaalSpecial from './components/ThaalSpecial';
import MenuPreview from './components/MenuPreview';
import WhyNaaz from './components/WhyNaaz';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF8] font-sans selection:bg-red-200 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <ThaalSpecial />
        <MenuPreview />
        <WhyNaaz />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
