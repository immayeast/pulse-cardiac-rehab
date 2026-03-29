"use client";
import React, { useState } from 'react';
import { Heart, Play, Calendar, Users, Mic, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pb-24">
      {/* 1. MASSIVE STREAK SECTION */}
      <section className="bg-[#2C5F63] text-white p-8 rounded-b-[3rem] shadow-lg text-center">
        <h2 className="text-sm uppercase tracking-widest opacity-80 mb-2">Recovery Streak</h2>
        <div className="text-7xl font-black mb-2">5 <span className="text-2xl font-normal text-[#8BA888]">Days</span></div>
        <p className="text-[#8BA888] font-medium">You're doing amazing, Arthur!</p>
      </section>

      <div className="p-6 space-y-6">
        {/* 2. TODAY'S TASK */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Today's Session</h3>
              <p className="text-slate-500">15 min Gentle Walk</p>
            </div>
            <div className="bg-[#FDFBF7] p-3 rounded-2xl text-[#E57373]">
              <Heart fill="currentColor" />
            </div>
          </div>
          <Link href="/session/active">
            <button className="w-full bg-[#2C5F63] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
              <Play fill="white" size={20} /> Start Now
            </button>
          </Link>
        </div>

        {/* 3. WEEKLY SCHEDULE */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Calendar size={18} className="text-[#8BA888]" /> This Week
          </h3>
          <div className="flex justify-between text-center">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="space-y-2">
                <div className="text-xs font-bold text-slate-400">{day}</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 5 ? 'bg-[#8BA888] text-white' : 'border-2 border-slate-100 text-slate-300'}`}>
                  {i < 5 ? '✓' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. PERSISTENT NURSE CLARA BUTTON (VOICE MODE) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <Link href="/assistant">
          <button className="w-20 h-20 bg-white rounded-full shadow-2xl border-4 border-[#2C5F63] flex items-center justify-center hover:scale-105 transition-transform group">
            <Mic size={32} className="text-[#2C5F63] group-active:scale-90" />
          </button>
        </Link>
        <p className="mt-2 text-[#2C5F63] font-bold text-sm bg-white/80 px-3 py-1 rounded-full shadow-sm">Talk to Clara</p>
      </div>
    </main>
  );
}