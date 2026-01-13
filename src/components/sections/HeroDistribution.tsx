'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroDistribution() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] overflow-hidden pt-32 pb-32 min-h-[800px] relative">
      <div className="max-w-[1200px] w-full relative px-10 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-8">
                <div className="w-12 h-[2px] bg-[#f6c942]"></div>
                <span className="text-[#876b22] text-[14px] font-bold uppercase tracking-widest">Network Optimization</span>
            </div>

            <h1 className="text-[72px] leading-[1.05] font-extrabold text-[#453d27] mb-8 tracking-tight">
              Elevating Pet Care <br/>
              Distribution
            </h1>
            
            <p className="text-[#a08e55] text-[20px] mb-12 max-w-[500px] leading-relaxed font-medium italic opacity-80">
              "Power your business to customers, connecting pet care brands and producers on one seamless platform."
            </p>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0d223a] border border-[#060d22] rounded-[10px] px-12 py-5 text-white text-[16px] font-bold shadow-xl hover:bg-[#1a3a5a] transition-all"
            >
              View Full Catalog
            </motion.button>

            <div className="mt-24 pt-12 border-t border-[#f6c942]/20 w-full">
                <h3 className="text-[18px] font-bold text-[#424240] mb-8 uppercase tracking-[0.3em]">Featured Brands</h3>
                <div className="flex gap-12 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    <Image src="/images/aa92eb81-94a6-4142-9eb5-7c2df0e63c10.png" width={48} height={48} alt="brand" className="h-10 w-auto" />
                    <Image src="/images/89576889-e0fb-4a72-a223-16242a19dbbf.png" width={48} height={48} alt="brand" className="h-10 w-auto" />
                    <Image src="/images/aa429828-630c-46d8-90d2-b28ba46d6854.png" width={48} height={48} alt="brand" className="h-10 w-auto opacity-0" /> {/* Just for spacing or placeholder if image exists */}
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[700px] w-full"
          >
             {/* Large illustrative background from Figma for this page */}
             <div className="absolute inset-0 bg-[url('/images/ac5f45e7-a162-41ab-96b6-9342d063d5aa.png')] bg-contain bg-no-repeat bg-right-center drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.05)]"></div>
             
             {/* Decorative element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#f6c942]/5 rounded-full blur-[120px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
