'use client';

import { useEffect, useState } from 'react';
import DesktopNav from '../navbar/DesktopNav';
import MobileNavbar from '../navbar/MobileNavbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const names = [
  'Alexander Smith',
  'Benjamin Johnson',
  'Christopher Taylor',
];
function HeroSection() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState(names[index]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % names.length;
      setIndex(nextIndex);
      setName(names[nextIndex]);
    }, 1500);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="px-4 md:h-screen md:py-4 md:px-36 bg-slate-400 hero-section">
      <div className="flex items-center justify-between md:pt-[2rem]">
        <h1 className="hidden font-serif text-4xl font-extrabold md:block">
          CGU
        </h1>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="fixed w-full py-4 mt-4 md:hidden top-[10px] left-0 z-50">
          <MobileNavbar />
        </div>
      </div>

      <div className="max-w-[31rem] mt-28">
        <div className="my-4">
          <span className="mr-4 text-indigo-500">
            FRONTEND MEMBERSHIP
          </span>
          <span className="text-slate-300">///</span>
        </div>
        <h1 className="mb-8 text-3xl font-extrabold md:text-5xl">
          Your advanced SaaS website is just a click Away
        </h1>
        <p className="mb-8">
          Revolutionize your SaaS company with the inaugural design
          and development subscription. Acquire intricate designs and
          contemporary frontend development without the need for an
          internal team.
        </p>
        <div className="flex gap-4">
          <Button className="text-white transition bg-indigo-500 shadow hover:bg-indigo-600 rounded-3xl shadow-indigo-500/25 focus:outline-none focus:ring-1 focus:ring-white/30">
            Get Started <ArrowRight size={20} />
          </Button>
          <Button
            variant="secondary"
            className="transition border-2 rounded-3xl shadow-indigo-500/25 hover:border-slate-300"
          >
            Schedule a Call <ArrowRight size={20} />
          </Button>
        </div>

        <div className="items-center gap-4 mt-6 md:flex">
          <div className="flex mb-2">
            <Image
              src="/img-1.jpg"
              className="object-center bg-cover border-white ml-[-12px] rounded-full border-2"
              width={55}
              height={55}
              alt="builders-img"
            />
            <Image
              src="/img-2.jpg"
              className="object-center bg-cover border-white ml-[-12px] rounded-full border-2"
              width={55}
              height={55}
              alt="builders-img"
            />
            <Image
              src="/img-3.jpg"
              className="object-center bg-cover border-white ml-[-12px] rounded-full border-2"
              width={55}
              height={55}
              alt="builders-img"
            />
            <span className="font-bold">+10</span>
          </div>
          <div>
            <p className="text-slate-500">
              Trusted by great builders like :
            </p>
            <p className="font-bold animate-bounce">{name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
