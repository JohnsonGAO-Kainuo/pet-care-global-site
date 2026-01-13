'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer({ brand = "GloCare", showSubscribe = false }) {
  return (
    <footer className="w-full bg-[#0D213B] text-white flex flex-col items-center pt-20 pb-10 relative overflow-hidden">
      {showSubscribe && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] px-10 z-20">
          <div className="bg-[#0D213B] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="mb-6 md:mb-0">
              <h3 className="text-[28px] font-bold text-white/90 mb-2">{brand}</h3>
              <p className="text-[#97A0AB] text-[14px] font-bold">Subscribe to our newsletter</p>
              <p className="text-[#56677A] text-[10px]">Sign up for our newsletter to get helpful market insights</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white px-4 py-2 w-[250px] text-black text-[12px] rounded-[4px] outline-none"
              />
              <button className="bg-[#F7C93C] text-[#7F661E] px-6 py-2 rounded-[4px] text-[12px] font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-[1200px] w-full px-10 grid grid-cols-1 md:grid-cols-4 gap-16 ${showSubscribe ? 'mt-20' : ''}`}>
        <div>
          <h2 className="text-[24px] font-bold text-[#BEC4CC] mb-6">{brand}</h2>
          <div className="space-y-2">
            <p className="text-[11px] text-[#596676]">We Guarantee</p>
            <p className="text-[11px] text-[#5C6D7D]">Premium Quality</p>
            <p className="text-[11px] text-[#5C6D7D]">Reliable Logistics</p>
          </div>
        </div>

        <div>
          <h4 className="text-[14px] font-bold text-[#97A2AD] mb-6 tracking-wider">Home</h4>
          <nav className="flex flex-col gap-3">
            <Link href="#" className="text-[11px] text-[#647284] hover:text-white transition-colors">About Us</Link>
            <Link href="#" className="text-[11px] text-[#647284] hover:text-white transition-colors">Services</Link>
            <Link href="#" className="text-[11px] text-[#647284] hover:text-white transition-colors">Products</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-[14px] font-bold text-[#95A1AE] mb-6 tracking-wider">Contact</h4>
          <nav className="flex flex-col gap-3">
            <Link href="#" className="text-[11px] text-[#5E6F7F] font-bold hover:text-white">About Us</Link>
            <Link href="#" className="text-[11px] text-[#5F6F82] font-light hover:text-white">Our Service</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-[14px] font-bold text-[#929FAA] mb-6 tracking-wider">Team-Niels</h4>
          <nav className="flex flex-col gap-3">
            <Link href="#" className="text-[11px] text-[#5D6C7D] font-bold hover:text-white">Contact Us</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] w-full px-10 mt-20 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-[#566378]">
        <p>Copyright 2024 PetCare Corporation</p>
        <p>PetCare Global</p>
      </div>
    </footer>
  );
}
