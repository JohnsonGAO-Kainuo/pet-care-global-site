'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroDark() {
  return (
    <section className="w-full flex justify-center bg-[#0d213b] overflow-hidden pt-20 pb-20 min-h-[600px] relative">
      {/* Background Image/Pattern if any */}
      <div className="absolute inset-0 opacity-20">
         {/* Using one of the background images from Figma */}
         <Image src="/images/c08dba2f-c117-474d-bcc5-d2e5027ee6cf.png" fill alt="bg" className="object-cover" />
      </div>

      <div className="max-w-[1400px] w-full relative px-10 z-10">
        <div className="grid grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start pl-10"
          >
            <div className="bg-[#f7c93c] border border-[#ecc961] px-5 py-1.5 mb-8">
               <span className="text-[#977b25] text-[12px] font-medium uppercase tracking-wider">B2B Market homepage for Pet Wholesale sector</span>
            </div>

            <h1 className="text-[64px] leading-[1.1] font-bold text-white mb-6">
              Connecting Quality <br/>
              Brands with Global <br/>
              Markets
            </h1>
            
            <p className="text-[#d2d4d6] text-[16px] mb-10 max-w-[450px] leading-relaxed font-light">
              We provide integrated wholesale and distribution solutions for the global pet care industry.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f6c942] border border-[#edd688] rounded-[8px] px-10 py-4 text-[#876b22] text-[14px] font-bold shadow-md hover:shadow-xl transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[550px] w-full"
          >
            {/* The second page usually has a different visual focus, I'll use the placeholder if specific image not found */}
            <div className="w-full h-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <Image 
                    src="/images/ba7d96bd-5847-4211-92ef-072a74150799.png"
                    alt="Pet Care Global"
                    fill
                    className="object-contain"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
