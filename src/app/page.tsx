import React from 'react';
import { Heart, Play, Activity, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] p-6 text-slate-800">
      <div className="max-w-md mx-auto space-y-6">
        <header className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-[#2C5F63]">PulseCircle</h1>
          <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-[#8BA888]/20 text-[#8BA888]">
            REHAB DAY 5
          </span>
        </header>

        {/* Nurse Clara Assistant */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-[#8BA888] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">👵🏼</div>
          <p className="text-lg italic leading-relaxed text-slate-700">
            "Good morning, dear. Your heart rate was nice and steady yesterday. Shall we try a gentle 15-minute walk today?"
          </p>
          <div className="mt-4 flex gap-4">
             <button className="text-[#2C5F63] text-sm font-bold flex items-center gap-1">
               Repeat Instruction
             </button>
          </div>
        </section>

        {/* Main Action */}
        <button className="w-full bg-[#2C5F63] text-white py-6 rounded-3xl text-xl font-bold shadow-lg hover:bg-[#1f4548] transition-all flex items-center justify-center gap-3">
          <Play fill="white" size={24} /> Start Training Session
        </button>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
            <Heart className="text-[#E57373] mb-1" size={20} />
            <p className="text-2xl font-bold">74</p>
            <p className="text-xs text-slate-400 font-medium">AVG BPM</p>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
            <CheckCircle2 className="text-[#8BA888] mb-1" size={20} />
            <p className="text-2xl font-bold">85%</p>
            <p className="text-xs text-slate-400 font-medium">PLAN SYNC</p>
          </div>
        </div>

        {/* Community Encouragement */}
        <div className="bg-[#8BA888]/10 p-4 rounded-2xl border border-[#8BA888]/20">
          <p className="text-sm font-semibold text-[#2C5F63] mb-1">New Message from Sarah:</p>
          <p className="text-sm italic text-slate-600">"Go Grandpa! We are all rooting for you today! ❤️"</p>
        </div>
      </div>
    </div>
  );
}