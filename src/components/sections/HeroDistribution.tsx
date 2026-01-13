'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroDistribution() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] overflow-hidden pt-20 pb-20 min-h-[600px] relative">
      <div className="max-w-[1400px] w-full relative px-10 z-10">
        <div className="grid grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start pl-10"
          >
            <h1 className="text-[64px] leading-[1.1] font-bold text-[#453d27] mb-6">
              Elevating Pet Care <br/>
              Distribution
            </h1>
            
            <p className="text-[#a08e55] text-[16px] mb-10 max-w-[450px] leading-relaxed font-semibold">
              Power your business to customers, connecting pet care and producers on one platform.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0d223a] border border-[#060d22] rounded-[8px] px-10 py-4 text-[#85846d] text-[14px] font-bold shadow-md"
            >
              View Catalog
            </motion.button>

            <div className="mt-20">
                <h3 className="text-[25px] font-bold text-[#424240] mb-4">Featured Brands</h3>
                <p className="text-[14px] text-[#a09f9e] mb-8">Our most brand-focused production and featured brands.</p>
                <div className="flex gap-8 grayscale opacity-60">
                    <Image src="/images/aa92eb81-94a6-4142-9eb5-7c2df0e63c10.png" width={40} height={40} alt="brand" />
                    <Image src="/images/89576889-e0fb-4a72-a223-16242a19dbbf.png" width={40} height={40} alt="brand" />
                    <Image src="/images/ba7d96bd-5847-4211-92ef-072a74150799.png" width={40} height={40} alt="brand" className="hidden" />
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[650px] w-full"
          >
             {/* Large illustrative background from Figma for this page */}
             <div className="absolute inset-0 bg-[url('/images/ac5f45e7-a162-41ab-96b6-9342d063d5aa.png')] bg-contain bg-no-repeat bg-right-center"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
