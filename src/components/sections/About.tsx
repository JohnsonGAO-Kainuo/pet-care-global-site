'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-24 bg-[#fdfdfb] flex justify-center items-center">
      <div className="max-w-5xl mx-auto px-10 w-full border border-[#f8f9f7] bg-[#fdfdfb] p-10 flex flex-col md:flex-row gap-10 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 relative h-[300px] w-full"
        >
          <Image 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8bbc787-ee73-4f77-9532-4fa4668eb09a" 
            fill 
            alt="About Us" 
            className="object-cover rounded-md"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start"
        >
          <h2 className="text-[25px] font-bold text-[#353534] mb-4">About Us</h2>
          
          <p className="text-[10px] font-bold text-[#9a9b9c] mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          <p className="text-[10px] text-[#9f9f9e] mb-8 leading-relaxed">
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <button className="flex items-center justify-center bg-[url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b46d0e-4f24-48bc-b159-ea8e1abacd87')] bg-contain bg-no-repeat w-[94px] h-[34px] text-[#896c26] text-[11px] font-bold pl-4 pb-1 hover:brightness-110 transition-all">
            Learn More
          </button>
        </motion.div>

      </div>
    </section>
  );
}
