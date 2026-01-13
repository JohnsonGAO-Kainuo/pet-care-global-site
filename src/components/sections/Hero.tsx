'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative w-full pt-[120px] pb-20 px-10 bg-[#fdfdfc] overflow-hidden min-h-screen flex items-center justify-center">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none">
          {/* Abstract shapes or pattern if needed, keeping it clean for now */}
       </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <div className="bg-[#f7c93c] border border-[#ecc961] px-4 py-1 mb-6">
             <span className="text-[#977b25] text-[9px]">B2B Market homepage for Pet Wholesale sector</span>
          </div>

          <h1 className="text-[48px] leading-[1.2] font-bold text-[#343435] mb-4">
            Your Trusted <br/>
            Partner in Pet <br/>
            Supply
          </h1>
          
          <p className="text-[#9f9f9f] text-[12px] mb-8 max-w-md">
            Your global gateway to premium pet care distribution and connecting pet care brands with markets.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f6c942] border border-[#edd688] rounded-[6px] px-8 py-3 text-[#876b22] text-[11px] font-bold"
          >
            Contact Sales
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Hero Image */}
          <Image 
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba7d96bd-5847-4211-92ef-072a74150799"
            alt="Pet Care"
            width={500}
            height={400}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
