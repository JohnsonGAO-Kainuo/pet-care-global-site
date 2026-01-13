'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function GlobalHero() {
  return (
    <section className="w-full relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Warehouse Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/d530e9e7-86ba-47af-8c9c-6d7ea202aa50.png" 
          alt="Warehouse" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-[1200px] w-full px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-[56px] leading-[1.1] font-bold text-white mb-8">
            Connecting Quality <br/>
            Brands with Global <br/>
            Markets
          </h1>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F7C93C] text-[#876B22] px-8 py-3 rounded-[4px] text-[12px] font-bold shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export function GlobalAbout() {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
          <Image src="/images/e8bbc787-ee73-4f77-9532-4fa4668eb09a.png" alt="About Team" fill className="object-cover" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-[32px] font-bold text-[#353534] mb-6">About Us</h2>
          <p className="text-[#9A9B9C] text-[14px] font-bold mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <p className="text-[#9F9F9E] text-[14px] mb-10 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-[#F7C93C] text-[#876B22] px-8 py-3 rounded-[4px] text-[12px] font-bold shadow-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

const stories = [
  { text: "Your team has delivered high construction and check for delivery. It helped increase revenue and the collaboration helped to streamline product flow simply allowing the system to scale.", author: "Mateo Baah", role: "Operations Lead", img: "/images/68a8ff05-c074-408e-a05d-1cdabccfaf5a.png" },
  { text: "You are motivated but New vacation Delivery out are sourcing or doing with to execute supply curves. With government and protocols next and-adds count Ingenuities the freely call of time.", author: "Sown Bcreutth", role: "Affiliate Manager", img: "/images/e53a7345-823b-4b2d-ace6-953784615b8f.png" },
];

export function GlobalStories() {
  return (
    <section className="w-full bg-[#FDFDFC] py-24 flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-10">
        <h2 className="text-[32px] font-bold text-[#4D483D] mb-2">Success Stories</h2>
        <p className="text-[#9E9886] text-[14px] mb-16">Our clients stories and successes of our business strategy</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white border border-[#EDE9DB] rounded-xl p-10 flex flex-col justify-between shadow-sm"
            >
              <p className="text-[12px] text-[#ACACA9] leading-relaxed italic mb-8">"{s.text}"</p>
              <div className="flex items-center gap-4">
                <Image src={s.img} alt={s.author} width={40} height={40} className="rounded-full" />
                <div>
                  <p className="text-[14px] text-[#868583] font-bold">{s.author}</p>
                  <p className="text-[12px] text-[#C5C5C3]">{s.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
