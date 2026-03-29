"use client";
import React, { useState, useEffect } from 'react';
import { Heart, RefreshCw, X, Play, Volume2 } from 'lucide-react';
import { NurseClaraAgent as Clara } from "@/lib/agent";

export default function ActiveSession() {
  const [hr, setHr] = useState(72);
  const [instruction, setInstruction] = useState("Let's start our gentle walk, Arthur.");

  // SIMULATE AGENTIC LOGIC: Reacting to heart rate
  useEffect(() => {
    const interval = setInterval(() => {
      const newHr = 72 + Math.floor(Math.random() * 40);
      setHr(newHr);
      const advice = Clara.getGuidance(newHr, 100);
      setInstruction(advice);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 h-screen flex flex-col bg-[#FDFBF7]">
      <header className="flex justify-between items-center mb-8">
        <X className="text-slate-300" />
        <div className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          <span className="text-[10px] font-black text-emerald-700">LIVE MONITORING</span>
        </div>
      </header>

      {/* CLARA SPEECH BUBBLE WITH VOICE */}
      <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-[#8BA888] mb-12 relative">
        <p className="text-2xl font-serif italic text-slate-800 leading-snug">"{instruction}"</p>
        <div className="flex gap-4 mt-6">
          <button 
            onClick={() => Clara.speak(instruction)} 
            className="flex items-center gap-2 text-[#2C5F63] font-bold text-sm bg-[#FDFBF7] px-4 py-2 rounded-full"
          >
            <Volume2 size={16} /> Listen
          </button>
          <button className="text-slate-300 text-sm font-bold"><RefreshCw size={14} className="inline mr-1"/> Repeat</button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative">
          <Heart size={120} className="text-[#E57373] animate-pulse opacity-20 absolute -top-4 -left-4" />
          <p className="text-9xl font-black text-[#2C5F63] tabular-nums">{hr}</p>
        </div>
        <p className="text-slate-400 font-black tracking-[0.2em] text-xs mt-2">HEART RATE (BPM)</p>
      </div>

      <button className="w-full bg-[#2C5F63] text-white py-8 rounded-[3rem] text-2xl font-black shadow-lg mb-4">
        Finish & Send Note
      </button>
    </main>
  );
}