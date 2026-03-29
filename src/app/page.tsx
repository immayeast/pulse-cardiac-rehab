"use client";
import React, { useState } from 'react';
import { Play, Activity, Heart, CheckCircle2, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { medicalData as data } from "../lib/data";

export default function Home() {
  const [isPreparing, setIsPreparing] = useState(false);
  const router = useRouter();

  return (
    <main className="p-6 pb-32 space-y-8 flex flex-col items-center">
      {/* HEADER & WEARABLE STATUS */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#2C5F63]">PulseCircle</h1>
        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Polar H10 Linked</span>
        </div>
      </div>

      {/* TRAINING ACTION */}
      <div className="w-full">
        {!isPreparing ? (
          <button 
            onClick={() => setIsPreparing(true)}
            className="w-full bg-[#2C5F63] text-white py-12 rounded-[3rem] shadow-2xl flex flex-col items-center gap-3 transition-transform active:scale-95"
          >
            <div className="bg-white/10 p-4 rounded-full border border-white/20"><Play fill="white" size={32} /></div>
            <div className="text-center">
              <span className="text-2xl font-black block tracking-tight">Start Training</span>
              <p className="text-sm font-medium opacity-70 mt-1">
                {data.onboarding.extracted.plan} • {data.onboarding.extracted.intensity}
              </p>
            </div>
          </button>
        ) : (
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-2 border-[#8BA888] animate-in zoom-in-95">
             <p className="text-2xl font-serif italic text-slate-800 mb-8 leading-snug">
              "Ready to go, Arthur? I've got your heart monitor synced. Is your water nearby?"
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => router.push('/session/active')} className="bg-[#8BA888] text-white py-5 rounded-2xl font-black text-lg shadow-lg">Yes, Clara</button>
              <button onClick={() => setIsPreparing(false)} className="bg-slate-50 text-slate-400 py-5 rounded-2xl font-bold">Not yet</button>
            </div>
          </div>
        )}
      </div>

      {/* STATS GRID */}
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Weekly Streak</p>
          <p className="text-3xl font-black text-[#2C5F63]">5 <span className="text-sm font-medium text-slate-300">Days</span></p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-center">
          <Heart className="text-[#E57373] mb-1" size={20} />
          <span className="font-bold text-slate-700">74 BPM</span>
        </div>
      </div>

      {/* --- ROLE SWITCHER (FOR JUDGES) --- */}
      <nav className="fixed bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-200 p-2 rounded-full shadow-2xl flex gap-2">
        <Link href="/" className="flex-1 py-3 text-center text-[10px] font-black bg-[#2C5F63] text-white rounded-full">PATIENT</Link>
        <Link href="/volunteer" className="flex-1 py-3 text-center text-[10px] font-black text-slate-400">VOLUNTEER</Link>
        <Link href="/onboarding/upload" className="flex-1 py-3 text-center text-[10px] font-black text-slate-400">RESET</Link>
      </nav>
    </main>
  );
}