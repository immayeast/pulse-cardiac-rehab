"use client";
import React, { useState, useEffect } from 'react';
import { Mic, X, RefreshCw, Volume2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AssistantPage() {
  const [status, setStatus] = useState("Listening...");
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#2C5F63] flex flex-col items-center justify-center p-8 text-white">
      <button onClick={() => router.back()} className="absolute top-8 right-8 text-white/50">
        <X size={32} />
      </button>

      {/* Visualizer Animation */}
      <div className="flex gap-1 mb-12 h-16 items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-2 bg-[#8BA888] rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      <div className="text-center space-y-6">
        <div className="text-5xl">👵🏼</div>
        <h1 className="text-2xl font-serif italic">"I'm listening, Arthur. Take your time."</h1>
        <p className="text-[#8BA888] font-mono tracking-widest uppercase text-sm">{status}</p>
      </div>

      <div className="mt-20 flex flex-col gap-4 w-full max-w-xs">
        <button className="bg-white/10 border border-white/20 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold">
          <RefreshCw size={20} /> Repeat Instruction
        </button>
        <button className="bg-white text-[#2C5F63] py-4 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-xl">
           Finish Speaking
        </button>
      </div>
    </main>
  );
}