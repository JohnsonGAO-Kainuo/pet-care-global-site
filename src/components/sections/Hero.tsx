'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] overflow-hidden pt-20 pb-20">
      <div className="max-w-[1200px] w-full relative px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="bg-[#f7c93c] border border-[#ecc961] px-4 py-1.5 mb-10">
               <span className="text-[#977b25] text-[12px] font-bold tracking-[0.1em] uppercase">B2B Market homepage for Pet Wholesale sector</span>
            </div>

            <h1 className="text-[72px] leading-[1.05] font-bold text-[#343435] mb-8 tracking-[-0.02em]">
              Your Trusted <br/>
              Partner in Pet <br/>
              Supply
            </h1>
            
            <p className="text-[#9f9f9f] text-[18px] mb-12 max-w-[480px] leading-relaxed font-light">
              Your global gateway to premium pet care distribution and connecting pet care brands with markets.
            </p>

            <div className="flex gap-4">
                <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#f6c942] border border-[#edd688] rounded-[8px] px-12 py-4 text-[#876b22] text-[15px] font-bold shadow-[0_4px_14px_0_rgba(246,201,66,0.39)] hover:shadow-[0_6px_20px_rgba(246,201,66,0.23)] transition-all"
                >
                Contact Sales
                </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full group"
          >
            {/* Main Hero Image */}
            <Image 
              src="/images/ba7d96bd-5847-4211-92ef-072a74150799.png"
              alt="Pet Care"
              fill
              className="object-contain object-center drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
