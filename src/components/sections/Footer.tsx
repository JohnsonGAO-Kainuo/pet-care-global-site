'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0d213b] border-t border-[#313d4d] text-white pt-16 pb-8 relative overflow-hidden">
        {/* Top Section with Subscribe */}
        <div className="absolute top-10 right-20 bg-[#0d213b] border border-[#414b56] p-6 w-[800px] hidden lg:flex items-start justify-between">
           <div className="flex items-center gap-4">
              <h3 className="text-[25px] font-bold text-[#bec5cd]">GltCare</h3>
              <div>
                  <div className="text-[14px] font-bold text-[#97a0ab]">Subscribe</div>
                  <div className="text-[9px] text-[#56677a]">Sign up for our newsletter to get helpful market insights</div>
              </div>
           </div>
           
           <div className="flex items-center gap-2">
              <div className="bg-[#fdfdfc] border border-[#ced1d3] px-3 py-2 w-48 text-[11px] text-[#c4c5c3] font-bold">
                 Email
              </div>
              <button className="bg-[url('https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08d0e121-3777-4245-b076-8e3904ffc470')] bg-contain bg-no-repeat w-[84px] h-[37px] flex items-center justify-center text-[11px] text-[#7f661e] mb-1">
                 Subscribe
              </button>
           </div>
        </div>

      <div className="max-w-6xl mx-auto px-10 mt-32 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1">
          <div className="text-[24px] font-bold text-[#b8bfca7] mb-6">GloCare</div>
          <p className="text-[11px] text-[#596676]">We Guarantee</p>
          <p className="text-[11px] text-[#5c6d7d] mt-1">Premium Quality</p>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-[14px] font-bold text-[#97a2ad]">Home</h4>
          <Link href="#" className="text-[10px] text-[#647284] hover:text-white">About Us</Link>
          <Link href="#" className="text-[11px] text-[#5a6777] hover:text-white">Rates</Link>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-[15px] font-bold text-[#95a1ae]">Contact</h4>
          <Link href="#" className="text-[11px] text-[#5e6f7f] font-bold hover:text-white">About Us</Link>
          <Link href="#" className="text-[11px] text-[#5f6f82] font-light hover:text-white">Our Service</Link>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="text-[15px] font-bold text-[#929faa]">Team Vitals</h4>
          <Link href="#" className="text-[11px] text-[#5d6c7d] font-bold hover:text-white">Contact Us</Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-10 mt-10 pt-4 border-t border-[#ef422a19] flex justify-between items-center text-[10px] text-[#566378]">
         <div>Copyright 2024 PetCare Corporation</div>
         <div>PetCare Global</div>
      </div>
    </footer>
  );
}
