'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    text: `"Your team has delivered high construction and check for delivery. It helped increase revenue and the collaboration helped to streamline product flow simply allowing the system to scale."`,
    author: 'Mateo Baah',
    role: 'Operations Lead',
    image: '/images/68a8ff05-c074-408e-a05d-1cdabccfaf5a.png'
  },
  {
    text: `"You are motivated but New vacation Delivery out are sourcing or doing with to execute supply curves. With government and protocols next and-adds count Ingenuities the freely call of time."`,
    author: 'Sown Bcreutth',
    role: 'Affiliate Manager',
    image: '/images/e53a7345-823b-4b2d-ace6-953784615b8f.png'
  }
];

export function SuccessStories() {
  return (
    <section className="w-full flex justify-center bg-white py-32 relative overflow-hidden">
      <div className="max-w-[1200px] w-full bg-[#f9f1d8] border-4 border-[#f6f2dc] p-20 relative rounded-3xl overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f6c942]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f6c942]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="flex flex-col items-start mb-16 relative z-10">
          <div className="text-[#876b22] font-bold text-[14px] uppercase tracking-widest mb-4">Testimonials</div>
          <h2 className="text-[48px] font-bold text-[#4d483d] mb-4 tracking-tight">Success Stories</h2>
          <p className="text-[18px] text-[#9e9886] max-w-[500px] font-light">See how our clients have achieved their goals through our global distribution network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#fcfdfa] border border-[#ede9db] rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-[#f6c942] text-[48px] leading-none mb-6 font-serif select-none opacity-50 group-hover:opacity-100 transition-opacity">“</div>
              <p className="text-[18px] text-[#868583] leading-relaxed italic mb-10 -mt-4">{story.text}</p>
              
              <div className="flex items-center gap-4 border-t border-[#f0f0f0] pt-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#f6c942]">
                    <Image src={story.image} alt={story.author} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] text-[#4d483d] font-bold">{story.author}</span>
                  <span className="text-[14px] text-[#9e9886] font-medium uppercase tracking-wide">{story.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
