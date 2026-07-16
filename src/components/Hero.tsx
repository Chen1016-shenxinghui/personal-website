import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ContactButton from './ContactButton';
import Magnet from './Magnet';
import { profileData } from '../data/profile';

const Hero: React.FC = () => {
  const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20"
      >
        <a href="#hero" className="text-[#D7E2EA] font-bold text-lg md:text-xl tracking-wider uppercase">
          {profileData.name}
        </a>
        <div className="hidden md:flex items-center justify-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full flex-1 flex flex-col justify-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center"
        >
          Hi, i&apos;m {profileData.name}
        </motion.h1>

        {/* Centered Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <Magnet padding={150} strength={3}>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#D7E2EA]/10">
              <img
                src="assets/portrait.jpg"
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent" />
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a environmental designer driven by crafting striking and unforgettable spaces
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton label="Contact Me" href="#contact" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;