"use client";
import React, { useState, useEffect } from 'react';
import { Heart, RefreshCw, X, Play, Pause } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ActiveSession() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [claraMessage, setClaraMessage] = useState("Let's start our walk. Keep your back straight and breathe naturally, dear.");
  const router = useRouter();

  useEffect(() => {
    let interval: any;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((t) => t + 1);
        // Change instructions based on time
        if (timer === 10) setClaraMessage("You're doing wonderful. Remember, if you feel a bit winded, we can always slow down.");
        if (timer === 30) setClaraMessage("Halfway there! I'm so proud of your consistency today.");
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <main className="p-6 flex flex-col h-screen">
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => router.back()} className="p-2"><X className="text-slate-300" /></button>
        <span className="bg-brand-coral/10 text-brand-coral px-4 py-1 rounded-full text-xs font-black">LIVE SESSION</span>
      </div>

      {/* CLARA SPEECH BUBBLE */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-brand-sage mb-8 relative">
        <p className="text-2xl font-serif italic text-slate-800 leading-snug">"{claraMessage}"</p>
        <button className="mt-6 flex items-center gap-2 text-brand-teal font-bold text-sm bg-brand-cream px-4 py-2 rounded-full">
          <RefreshCw size={16} /> Repeat
        </button>
      </div>

      {/* VITALS SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-12">
        <div className="text-center">
          <p className="text-8xl font-black text-brand-teal tabular-nums tracking-tighter">{formatTime(timer)}</p>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Session Duration</p>
        </div>

        <div className="flex gap-8">
          <div className="text-center">
            <Heart className="mx-auto text-brand-coral animate-pulse mb-2" size={32} />
            <p className="text-3xl font-bold">112</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase">BPM</p>
          </div>
          <div className="w-[1px] bg-slate-200" />
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-brand-sage/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-sage rounded-full" />
            </div>
            <p className="text-3xl font-bold">98%</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase">O2 Sat</p>
          </div>
        </div>
      </div>

      <div className="py-8">
        <button 
          onClick={() => isActive ? setIsActive(false) : router.push('/checkin')}
          className={`w-full py-6 rounded-[2.5rem] text-2xl font-black shadow-lg transition-all ${
            isActive ? 'bg-slate-800 text-white' : 'bg-brand-sage text-white'
          }`}
        >
          {isActive ? <span className="flex items-center justify-center gap-2"><Pause fill="white" /> Pause</span> : "Finish Session"}
        </button>
      </div>
    </main>
  );
}