"use client";
import React, { useState, useEffect } from 'react';
import { Heart, RefreshCw, X, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SessionActive() {
  const [timer, setTimer] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 h-screen flex flex-col bg-[#FDFBF7]">
      <div className="flex justify-between items-center mb-12">
        <button onClick={() => router.back()}><X className="text-slate-300" /></button>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
           <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Live Vitals</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-[#8BA888] mb-12">
        <p className="text-2xl font-serif italic text-slate-800 leading-snug">
          "Doing great, Arthur. Keep your pace steady and breathe deep."
        </p>
        <button className="mt-6 flex items-center gap-2 text-[#2C5F63] font-bold text-xs"><RefreshCw size={14} /> Repeat</button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-12">
        <div className="text-center">
          <p className="text-8xl font-black text-[#2C5F63] tabular-nums tracking-tighter">
            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
          </p>
          <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">Time Elapsed</p>
        </div>
        <div className="flex gap-12">
          <div className="text-center"><Heart className="text-[#E57373] animate-pulse mb-1 mx-auto" /><p className="text-3xl font-black">108</p><p className="text-[10px] text-slate-400 font-black">BPM</p></div>
          <div className="text-center"><div className="w-6 h-6 bg-emerald-100 rounded-full mx-auto mb-1 flex items-center justify-center"><Check className="text-emerald-600" size={14}/></div><p className="text-3xl font-black">98%</p><p className="text-[10px] text-slate-400 font-black">O2 SAT</p></div>
        </div>
      </div>

      <button 
        onClick={() => router.push('/checkin')}
        className="w-full bg-[#2C5F63] text-white py-8 rounded-[3rem] text-2xl font-black shadow-lg mb-8"
      >
        Finish Session
      </button>
    </main>
  );
}