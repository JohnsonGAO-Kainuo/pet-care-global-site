'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[80px] bg-[#fdfdfc] border-b border-[#fdfae0] flex items-center justify-between px-10 fixed top-0 z-50"
    >
      <div className="flex items-center gap-2">
        <Image 
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee2c9d64-7788-4018-9e2d-2f1191100959" 
          alt="Logo" 
          width={20} 
          height={20} 
        />
        <span className="text-[#636361] font-bold text-[15px]">PetCare Global</span>
      </div>

      <div className="flex items-center gap-8">
        <Link href="#" className="text-[#8c8d8a] font-black text-[10px] hover:text-[#636361] transition-colors">Homepage</Link>
        <Link href="#" className="text-[#8a8a8a] font-normal text-[10px] hover:text-[#636361] transition-colors">Products</Link>
        <Link href="#" className="text-[#939393] font-normal text-[9px] hover:text-[#636361] transition-colors">Pricing</Link>
        <Link href="#" className="text-[#939392] font-normal text-[10px] hover:text-[#636361] transition-colors">Services</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="#" className="text-[#979796] font-extrabold text-[10px] hover:text-[#636361] transition-colors">Log In</Link>
        <button className="bg-[#0a2340] border border-[#040c23] rounded-[4px] px-4 py-2 text-[#7b8897] font-light text-[10px] hover:bg-[#0f2e52] transition-colors">
          Contact Sales
        </button>
      </div>
    </motion.nav>
  );
}
