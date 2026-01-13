'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroDark() {
  return (
    <section className="w-full flex justify-center bg-[#0d213b] overflow-hidden pt-32 pb-32 min-h-[800px] relative">
      {/* Background Decorative Image */}
      <div className="absolute inset-0 opacity-[0.15]">
         <Image src="/images/c08dba2f-c117-474d-bcc5-d2e5027ee6cf.png" fill alt="bg" className="object-cover" />
      </div>

      <div className="max-w-[1200px] w-full relative px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="bg-[#f6c942]/10 border border-[#f6c942]/30 px-5 py-2 mb-10 rounded-full">
               <span className="text-[#f6c942] text-[12px] font-bold tracking-[0.2em] uppercase">Global Partnership Program</span>
            </div>

            <h1 className="text-[72px] leading-[1.05] font-bold text-white mb-8 tracking-[-0.03em]">
              Connecting Quality <br/>
              Brands with <br/>
              Global Markets
            </h1>
            
            <p className="text-[#bec5cd] text-[20px] mb-12 max-w-[500px] leading-relaxed font-light">
              We provide integrated wholesale and distribution solutions for the global pet care industry with precision and scale.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f6c942] hover:bg-[#f7d36a] rounded-[8px] px-12 py-5 text-[#0d213b] text-[16px] font-bold shadow-2xl transition-all"
            >
              Start Global Partnership
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[650px] w-full"
          >
            <div className="w-full h-full border border-white/10 rounded-[40px] bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-[0_0_100px_rgba(246,201,66,0.1)]">
                <Image 
                    src="/images/ba7d96bd-5847-4211-92ef-072a74150799.png"
                    alt="Pet Care Global"
                    fill
                    className="object-contain p-10"
                />
            </div>
            
            {/* Floating element decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f6c942]/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#33377c]/40 rounded-full blur-[80px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
