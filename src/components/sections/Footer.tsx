'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full flex justify-center bg-[#0d213b] border-t border-[#313d4d] text-white pt-24 pb-12 relative overflow-hidden">
        {/* Subscribe Section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d213b] border border-[#414b56] p-10 max-w-[1000px] w-[90%] flex flex-col md:flex-row items-center justify-between z-20 shadow-2xl rounded-xl">
           <div className="flex flex-col gap-2 mb-6 md:mb-0">
              <h3 className="text-[32px] font-bold text-[#bec5cd] leading-none mb-2">GltCare</h3>
              <div className="text-[18px] font-bold text-[#97a0ab]">Subscribe to our newsletter</div>
              <div className="text-[12px] text-[#56677a] max-w-[300px]">Sign up for our newsletter to get helpful market insights and industry updates.</div>
           </div>
           
           <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto">
              <div className="relative">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-[#fdfdfc] border border-[#ced1d3] px-6 py-4 w-full sm:w-[300px] text-[14px] text-[#333] font-bold outline-none focus:ring-2 focus:ring-[#f6c942]/50 transition-all rounded-md"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#f6c942] hover:bg-[#f7d36a] px-8 py-4 flex items-center justify-center text-[14px] text-[#7f661e] font-bold transition-colors rounded-md shadow-lg"
              >
                 Subscribe
              </motion.button>
           </div>
        </div>

      <div className="max-w-[1200px] w-full px-10 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pb-16">
            <div className="col-span-1">
                <div className="text-[28px] font-bold text-[#bec4cc] mb-8">GloCare</div>
                <div className="space-y-4">
                    <p className="text-[14px] text-[#97a2ad] font-bold uppercase tracking-widest mb-4">Core Values</p>
                    <p className="text-[13px] text-[#596676] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#f6c942] rounded-full"></span>
                        We Guarantee
                    </p>
                    <p className="text-[13px] text-[#596676] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#f6c942] rounded-full"></span>
                        Premium Quality
                    </p>
                    <p className="text-[13px] text-[#596676] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#f6c942] rounded-full"></span>
                        Reliable Logistics
                    </p>
                </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6 pt-2">
                <h4 className="text-[18px] font-bold text-[#95a1ae]">Navigation</h4>
                <nav className="flex flex-col gap-4">
                    <Link href="#" className="text-[14px] text-[#647284] hover:text-white transition-colors">About Us</Link>
                    <Link href="#" className="text-[14px] text-[#647284] hover:text-white transition-colors">Services</Link>
                    <Link href="#" className="text-[14px] text-[#647284] hover:text-white transition-colors">Products</Link>
                    <Link href="#" className="text-[14px] text-[#647284] hover:text-white transition-colors">Pricing</Link>
                </nav>
            </div>

            <div className="col-span-1 flex flex-col gap-6 pt-2">
                <h4 className="text-[18px] font-bold text-[#929faa]">Company</h4>
                <nav className="flex flex-col gap-4">
                    <Link href="#" className="text-[14px] text-[#647284] hover:text-white transition-colors font-bold">Contact Us</Link>
                    <Link href="#" className="text-[14px] text-[#647284] hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="#" className="text-[14px] text-[#647284] hover:text-white transition-colors">Privacy Policy</Link>
                </nav>
            </div>

            <div className="col-span-1 flex flex-col gap-6 pt-2">
                <h4 className="text-[18px] font-bold text-[#95a1ae]">Global Network</h4>
                <div className="space-y-4">
                    <div className="text-[13px] text-[#596676] leading-relaxed">
                        Connecting quality brands with global markets across 50+ countries.
                    </div>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <div className="w-10 h-10 rounded-full bg-[#1a2e4a] flex items-center justify-center hover:bg-[#f6c942] transition-colors cursor-pointer group">
                            <span className="text-[12px] group-hover:text-[#7f661e]">FB</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#1a2e4a] flex items-center justify-center hover:bg-[#f6c942] transition-colors cursor-pointer group">
                            <span className="text-[12px] group-hover:text-[#7f661e]">LN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#313d4d] to-transparent mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-[#566378] px-4 gap-4">
            <div>&copy; 2024 PetCare Corporation. All rights reserved.</div>
            <div className="flex gap-8">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Cookie Settings</Link>
                <span>PetCare Global</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
