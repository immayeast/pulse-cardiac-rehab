"use client";
import React, { useState, useEffect } from 'react';
import { Heart, RefreshCw, X, Volume2, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

// --- INLINE AGENT LOGIC (Zero Import Risk) ---
const NurseClara = {
  getGuidance: (hr: number) => {
    if (hr > 120) return "Slow down just a touch, Arthur. Let's keep that heart steady, dear.";
    if (hr < 85) return "You're doing great, but let's pick up the pace a tiny bit for the heart.";
    return "Perfect rhythm. I'm right here watching over you.";
  },
  speak: (text: string) => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel(); // Stop current speech
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = 0.85; // Slower for clarity
      msg.pitch = 1.1; // Slightly warmer tone
      window.speechSynthesis.speak(msg);
    }
  }
};

export default function ActiveSession() {
  const [hr, setHr] = useState(72);
  const [timer, setTimer] = useState(0);
  const [instruction, setInstruction] = useState("Let's start our gentle walk, Arthur.");
  const router = useRouter();

  // Simulate Live Agentic Monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => t + 1);
      // Randomly simulate heart rate fluctuation
      const newHr = 90 + Math.floor(Math.random() * 25);
      setHr(newHr);
      
      // Agent decides what to say every 10 seconds
      if (timer % 10 === 0 && timer > 0) {
        const advice = NurseClara.getGuidance(newHr);
        setInstruction(advice);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <main className="p-6 h-screen flex flex-col bg-[#FDFBF7]">
      <header className="flex justify-between items-center mb-8">
        <button onClick={() => router.push('/')}><X className="text-slate-300" /></button>
        <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          <span className="text-[10px] font-black text-emerald-700 tracking-widest">LIVE AGENT ACTIVE</span>
        </div>
      </header>

      {/* CLARA SPEECH BUBBLE */}
      <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-[#8BA888] mb-10 relative animate-in fade-in slide-in-from-top-4">
        <p className="text-2xl font-serif italic text-slate-800 leading-snug">"{instruction}"</p>
        <div className="flex gap-4 mt-6">
          <button 
            onClick={() => NurseClara.speak(instruction)} 
            className="flex items-center gap-2 text-[#2C5F63] font-bold text-xs bg-[#FDFBF7] px-4 py-2 rounded-full border border-[#2C5F63]/10"
          >
            <Volume2 size={14} /> Listen to Clara
          </button>
        </div>
      </div>

      {/* BIG VITALS DISPLAY */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-10">
        <div className="text-center">
          <div className="relative inline-block">
             <Heart size={100} className="text-[#E57373] animate-pulse opacity-10 absolute -top-4 -left-4" />
             <p className="text-9xl font-black text-[#2C5F63] tabular-nums tracking-tighter">{hr}</p>
          </div>
          <p className="text-slate-400 font-black tracking-[0.2em] text-[10px] uppercase">Heart Rate (BPM)</p>
        </div>

        <div className="flex gap-12 pt-4">
          <div className="text-center">
            <p className="text-3xl font-black text-slate-700">{Math.floor(timer/60)}:{(timer%60).toString().padStart(2,'0')}</p>
            <p className="text-[10px] font-bold text-slate-300 uppercase">Duration</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-slate-700">98%</p>
            <p className="text-[10px] font-bold text-slate-300 uppercase">O2 Sat</p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => router.push('/checkin')}
        className="w-full bg-[#2C5F63] text-white py-8 rounded-[3rem] text-2xl font-black shadow-lg mb-4 active:scale-95 transition-all"
      >
        Finish Session
      </button>
    </main>
  );
}