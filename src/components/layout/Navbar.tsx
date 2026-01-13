'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Navbar({ dark = false, variant = "default" }) {
  return (
    <div className="w-full flex flex-col items-center sticky top-0 z-50">
      {/* Top Banner */}
      <div className="w-full bg-[#F7C93C] h-[30px] flex items-center justify-center border-b border-[#ECC961]">
        <span className="text-[#977B25] text-[10px] font-medium tracking-tight">
          B2B Market homepage for Pet Wholesale sector
        </span>
      </div>
      
      {/* Main Nav */}
      <div className={`w-full flex justify-center border-b ${dark ? 'bg-[#0D213B] border-white/10' : 'bg-white border-[#FDFAE0]'}`}>
        <nav className="max-w-[1200px] w-full h-[70px] flex items-center justify-between px-10">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/ee2c9d64-7788-4018-9e2d-2f1191100959.png" 
              alt="Logo" 
              width={24} 
              height={24} 
            />
            <span className={`font-bold text-[18px] ${dark ? 'text-white' : 'text-[#636361]'}`}>PetCare Global</span>
          </Link>

          <div className="flex items-center gap-10">
            <Link href="/partner" className={`text-[13px] font-bold ${dark ? 'text-white/80 hover:text-white' : 'text-[#8C8D8A] hover:text-[#636361]'} transition-colors`}>Homepage</Link>
            <Link href="/distribution" className={`text-[13px] font-medium ${dark ? 'text-white/60 hover:text-white' : 'text-[#8A8A8A] hover:text-[#636361]'} transition-colors`}>Products</Link>
            <Link href="/global" className={`text-[13px] font-medium ${dark ? 'text-white/60 hover:text-white' : 'text-[#939393] hover:text-[#636361]'} transition-colors`}>Pricing</Link>
            <Link href="#" className={`text-[13px] font-medium ${dark ? 'text-white/60 hover:text-white' : 'text-[#939392] hover:text-[#636361]'} transition-colors`}>Services</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className={`text-[13px] font-extrabold ${dark ? 'text-white/80' : 'text-[#979796]'}`}>Log In</Link>
            <button className={`${dark ? 'bg-white text-[#0D213B]' : 'bg-[#0A2340] text-[#7B8897]'} border border-black/10 rounded-[4px] px-5 py-2 text-[11px] font-bold shadow-sm transition-all hover:brightness-110 active:scale-95`}>
              Contact Sales
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
