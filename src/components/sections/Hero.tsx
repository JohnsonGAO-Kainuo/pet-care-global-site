'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] overflow-hidden pt-10 pb-10">
      <div className="w-[800px] relative">
        <div className="grid grid-cols-2 gap-4 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start pl-8"
          >
            <div className="bg-[#f7c93c] border border-[#ecc961] px-3 py-1 mb-4">
               <span className="text-[#977b25] text-[10px]">B2B Market homepage for Pet Wholesale sector</span>
            </div>

            <h1 className="text-[34px] leading-[1.2] font-bold text-[#343435] mb-3">
              Your Trusted <br/>
              Partner in Pet <br/>
              Supply
            </h1>
            
            <p className="text-[#9f9f9f] text-[10px] mb-6 max-w-[280px] leading-relaxed">
              Your global gateway to premium pet care distribution and connecting pet care brands with markets.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f6c942] border border-[#edd688] rounded-[6px] px-6 py-2 text-[#876b22] text-[11px] font-bold"
            >
              Contact Sales
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[330px] w-full"
          >
            <Image 
              src="/images/ba7d96bd-5847-4211-92ef-072a74150799"
              alt="Pet Care"
              fill
              className="object-contain object-center"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
