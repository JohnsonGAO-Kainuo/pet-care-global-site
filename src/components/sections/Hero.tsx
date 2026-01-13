'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] overflow-hidden pt-20 pb-20">
      <div className="max-w-[1400px] w-full relative px-10">
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

            <h1 className="text-[64px] leading-[1.1] font-bold text-[#343435] mb-6">
              Your Trusted <br/>
              Partner in Pet <br/>
              Supply
            </h1>
            
            <p className="text-[#9f9f9f] text-[16px] mb-10 max-w-[450px] leading-relaxed font-light">
              Your global gateway to premium pet care distribution and connecting pet care brands with markets.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f6c942] border border-[#edd688] rounded-[8px] px-10 py-4 text-[#876b22] text-[14px] font-bold shadow-md hover:shadow-xl transition-all"
            >
              Contact Sales
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[550px] w-full"
          >
            <Image 
              src="/images/ba7d96bd-5847-4211-92ef-072a74150799.png"
              alt="Pet Care"
              fill
              className="object-contain object-right"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
