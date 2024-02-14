'use client';

import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-12 py-6 pl-4 pr-2 border shadow-lg rounded-3xl border-slate-200 bg-slate-100/60 shadow-black/5 backdrop-blur-lg dark:border-slate-700 dark:bg-black/70 dark:shadow-black/10">
      <h1 className="font-serif text-2xl font-extrabold ">CGU</h1>
      <div
        className="px-4 py-2 shadow-lg rounded-3xl bg-slate-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? <MenuIcon /> : <X />}
      </div>
      {isOpen && (
        <nav className="fixed left-0 h-[20rem] z-20 flex flex-col items-center w-full  gap-4 py-4 border shadow-lg rounded-2xl top-[3.5rem] border-slate-200 bg-slate-100">
          <Link
            className="font-bold transition text-slate-800 hover:text-black"
            href="#About"
          >
            About
          </Link>
          <Link
            className="font-bold transition text-slate-800 hover:text-black"
            href="#Process"
          >
            Process
          </Link>
          <Link
            className="font-bold transition text-slate-800 hover:text-black"
            href="#Work"
          >
            Work
          </Link>
          <Link
            className="font-bold transition text-slate-800 hover:text-black"
            href="#Pricing"
          >
            Pricing
          </Link>
          <Button className="text-white transition bg-indigo-500 shadow hover:bg-indigo-600 rounded-3xl shadow-indigo-500/25 focus:outline-none focus:ring-1 focus:ring-white/30">
            Get Started &gt;
          </Button>
        </nav>
      )}
    </div>
  );
}

export default MobileNavbar;
