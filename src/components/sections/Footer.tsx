'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full flex justify-center bg-[#0d213b] border-t border-[#313d4d] text-white pt-10 pb-6 relative overflow-hidden">
        {/* Top Section with Subscribe */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0d213b] border border-[#414b56] p-4 w-[800px] flex items-center justify-between z-10">
           <div className="flex items-start gap-4 ml-8">
              <h3 className="text-[25px] font-bold text-[#bec5cd] leading-none mt-1">GltCare</h3>
              <div className="flex flex-col ml-10">
                  <div className="text-[14px] font-bold text-[#97a0ab]">Subscribe</div>
                  <div className="text-[9px] text-[#56677a]">Sign up for our newsletter to get helpful market insights</div>
              </div>
           </div>
           
           <div className="flex items-center gap-2 mr-8">
              <div className="flex flex-col items-end">
                <div className="bg-[#fdfdfc] border border-[#ced1d3] px-3 py-1.5 w-44 text-[11px] text-[#c4c5c3] font-bold mb-1">
                  Email
                </div>
              </div>
              <button className="bg-[url('/images/08d0e121-3777-4245-b076-8e3904ffc470.png')] bg-contain bg-no-repeat w-[84px] h-[37px] flex items-center justify-center text-[11px] text-[#7f661e] mb-2">
                 Subscribe
              </button>
           </div>
        </div>

      <div className="w-[800px] px-8 mt-24">
        <div className="grid grid-cols-4 gap-4 pb-8">
            <div className="col-span-1 pl-4">
            <div className="text-[24px] font-bold text-[#b8bfca7] mb-4 text-[#bec4cc]">GloCare</div>
            <p className="text-[14px] font-bold text-[#97a2ad] mb-2">Home</p>
            <p className="text-[10px] text-[#596676]">Premium Quality</p>
            <p className="text-[10px] text-[#5c6d7d] mt-1">Reliable</p>
            </div>

            <div className="col-span-1 flex flex-col gap-2 pt-2 ml-8">
            <h4 className="text-[15px] font-normal text-[#95a1ae]">Contact</h4>
            <Link href="#" className="text-[11px] text-[#5e6f7f] font-bold hover:text-white">About Us</Link>
            <Link href="#" className="text-[11px] text-[#5f6f82] font-light hover:text-white">Our Service</Link>
            </div>

            <div className="col-span-1 flex flex-col gap-2 pt-2">
            <h4 className="text-[15px] font-bold text-[#929faa]">Team Vitals</h4>
            <Link href="#" className="text-[11px] text-[#5d6c7d] font-bold hover:text-white">Contact Us</Link>
            <Link href="#" className="text-[11px] text-[#5d6b7c] font-normal hover:text-white">Contact Us</Link>
            </div>

            <div className="col-span-1 pt-2">
                 <div className="flex gap-8 text-[11px] text-[#596676]">
                    <div>We Guarantee</div>
                    <div>Premium Quality</div>
                 </div>
                 <div className="flex gap-8 text-[11px] text-[#596676] mt-2">
                    <div>Products</div>
                    <div>Reliable Logistics</div>
                 </div>
            </div>
        </div>

        <Image src="/images/ef422a19-d3a4-44a5-8674-2eb2f9fa2bb8.png" alt="divider" width={670} height={2} className="w-full h-[1px] object-cover opacity-50 mb-2" />

        <div className="flex justify-between items-center text-[10px] text-[#566378] px-4">
            <div>Copyright 2024 PetCare Corporation</div>
            <div>PetCare Global</div>
        </div>
      </div>
    </footer>
  );
}
