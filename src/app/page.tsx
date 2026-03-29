"use client";
import React, { useState } from 'react';
import { Play, Activity, Smartphone, CheckCircle2, RefreshCw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import data from "@/lib/data.json"; // Ensure your JSON path is correct

export default function Home() {
  const [isPreparing, setIsPreparing] = useState(false);
  const [isSensorLinked, setIsSensorLinked] = useState(true); // Mock wearable status
  const router = useRouter();

  return (
    <main className="p-6 space-y-8 flex flex-col items-center">
      
      {/* --- WEARABLE STATUS INDICATOR --- */}
      <div className="w-full flex justify-between items-center bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isSensorLinked ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            {isSensorLinked ? "Polar H10 Connected" : "Searching for Sensor..."}
          </span>
        </div>
        <span className="text-[10px] font-bold text-slate-300">98% BATT</span>
      </div>

      <div className="w-full space-y-4">
        {!isPreparing ? (
          <button 
            onClick={() => setIsPreparing(true)}
            className="w-full bg-[#2C5F63] text-white py-10 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center gap-3 group active:scale-95 transition-all"
          >
            <div className="bg-white/10 p-5 rounded-full group-hover:scale-110 transition-transform border border-white/20">
              <Play fill="white" size={32} />
            </div>
            
            <div className="text-center">
              <span className="text-2xl font-black tracking-tight block">Start Training Session</span>
              
              {/* --- DATA JSON PLACEMENT --- */}
              <p className="text-sm font-medium opacity-70 mt-1">
                {data.onboarding.extracted.plan} • {data.onboarding.extracted.intensity}
              </p>
            </div>
          </button>
        ) : (
          /* --- NURSE CLARA PRE-SESSION CHECK --- */
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-2 border-[#8BA888] animate-in zoom-in-95 w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#8BA888]/10 p-2 rounded-lg">
                <Activity className="text-[#8BA888]" size={20} />
              </div>
              <span className="font-black uppercase text-[10px] tracking-widest text-slate-400">Nurse Clara's Check</span>
            </div>
            
            <p className="text-2xl font-serif italic text-slate-800 mb-8 leading-snug">
              "Ready to go, Arthur? I've got your heart monitor synced up. Make sure your water is within reach, dear."
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => router.push('/session/active')}
                className="bg-[#8BA888] text-white py-5 rounded-2xl font-black text-lg shadow-lg active:bg-[#7a9677]"
              >
                Yes, Clara
              </button>
              <button 
                onClick={() => setIsPreparing(false)}
                className="bg-slate-50 text-slate-400 py-5 rounded-2xl font-bold"
              >
                Not yet
              </button>
            </div>
            
            <button className="w-full mt-6 py-2 text-[#2C5F63] font-bold text-xs flex items-center justify-center gap-2 opacity-60">
              <RefreshCw size={14} /> Repeat Instruction
            </button>
          </div>
        )}
      </div>

      {/* --- REHAB PROGRESS (STREAK) --- */}
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Weekly Goal</p>
          <p className="text-2xl font-black text-[#2C5F63]">3 / 5 <span className="text-sm font-medium text-slate-300">Days</span></p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-center">
          <CheckCircle2 className="text-[#8BA888] mr-2" size={20} />
          <span className="font-bold text-slate-700">On Track</span>
        </div>
      </div>

    </main>
  );
}