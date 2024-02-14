'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function DesktopNav() {
  return (
    <div
      className="md:fixed z-50 flex items-center justify-between  h-12 gap-6 py-3 pr-2 pl-4 border shadow-lg  top-6 
    rounded-3xl border-slate-200 bg-slate-100/60 shadow-black/5 backdrop-blur-lg
    dark:border-slate-700 dark:bg-black/70 dark:shadow-black/10 md:top-10 md:right-[5rem] xl:right-[12rem]  "
    >
      <Link
        className="font-bold transition text-slate-600 hover:text-black"
        href="#About"
      >
        About
      </Link>
      <Link
        className="font-bold transition text-slate-600 hover:text-black"
        href="#Process"
      >
        Process
      </Link>
      <Link
        className="font-bold transition text-slate-600 hover:text-black"
        href="#Work"
      >
        Work
      </Link>
      <Link
        className="font-bold transition text-slate-600 hover:text-black"
        href="#Pricing"
      >
        Pricing
      </Link>
      <Button className="text-white transition bg-indigo-500 shadow hover:bg-indigo-600 rounded-3xl shadow-indigo-500/25 focus:outline-none focus:ring-1 focus:ring-white/30">
        Get Started &gt;
      </Button>
    </div>
  );
}

export default DesktopNav;
