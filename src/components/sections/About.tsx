'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfb] py-32">
      <div className="max-w-[1200px] w-full border border-[#f8f9f7] bg-[#fdfdfb] p-16 flex flex-col lg:flex-row gap-20 items-center shadow-sm rounded-2xl">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl group"
        >
          <Image 
            src="/images/e8bbc787-ee73-4f77-9532-4fa4668eb09a.png" 
            fill 
            alt="About Us" 
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#343435]/20 to-transparent"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start"
        >
          <div className="text-[#f6c942] font-bold text-[14px] uppercase tracking-widest mb-4">Our Mission</div>
          <h2 className="text-[48px] font-bold text-[#353534] mb-8 tracking-tight">About Us</h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-[18px] font-medium text-[#9a9b9c] leading-relaxed">
                We are dedicated to providing the highest quality pet care products and distribution services globally.
            </p>
            <p className="text-[16px] text-[#9f9f9e] leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-[#896c26] text-[16px] font-bold group"
          >
            <span className="border-b-2 border-[#f6c942] pb-1 transition-all group-hover:border-transparent">Learn More About Our Team</span>
            <span className="text-[20px]">→</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
