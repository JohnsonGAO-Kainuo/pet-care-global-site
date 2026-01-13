'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfb] py-16">
      <div className="w-[800px] border border-[#f8f9f7] bg-[#fdfdfb] p-6 flex flex-col md:flex-row gap-8 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 relative h-[220px] w-full"
        >
          <Image 
            src="/images/e8bbc787-ee73-4f77-9532-4fa4668eb09a.png" 
            fill 
            alt="About Us" 
            className="object-cover rounded-sm"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start"
        >
          <h2 className="text-[25px] font-bold text-[#353534] mb-3">About Us</h2>
          
          <p className="text-[10px] font-bold text-[#9a9b9c] mb-3 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          <p className="text-[10px] text-[#9f9f9e] mb-6 leading-relaxed">
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <button className="flex items-center justify-end bg-[url('/images/d4b46d0e-4f24-48bc-b159-ea8e1abacd87.png')] bg-contain bg-no-repeat w-[94px] h-[34px] text-[#896c26] text-[11px] font-bold pr-4 pb-1 hover:brightness-105 transition-all">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}
