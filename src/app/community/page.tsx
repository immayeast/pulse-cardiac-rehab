"use client";
import React from 'react';
import { Heart, MessageCircle, UserCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const VOLUNTEER_NOTES = [
  { id: 1, user: "Sarah G.", text: "Keep going, Arthur! My grandfather started exactly where you are. One step at a time! ❤️", time: "2h ago" },
  { id: 2, user: "Volunteer Mike", text: "Saw your 5-day streak on the board. Impressive work, neighbor!", time: "5h ago" },
  { id: 3, user: "Nurse Clara", text: "I've reviewed these notes for you, dear. So much love in our circle today.", time: "Just now" }
];

export default function Community() {
  return (
    <main className="p-6 bg-[#FDFBF7] min-h-screen pb-24">
      <header className="flex items-center gap-4 mb-8">
        <Link href="/"><ArrowLeft className="text-slate-400" /></Link>
        <h1 className="text-3xl font-serif italic text-[#2C5F63]">Community Circle</h1>
      </header>

      <div className="space-y-6">
        {VOLUNTEER_NOTES.map((note) => (
          <div key={note.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 animate-in slide-in-from-bottom-2">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <UserCircle size={20} className="text-[#8BA888]" />
                <span className="font-black text-xs uppercase tracking-widest text-slate-400">{note.user}</span>
              </div>
              <span className="text-[10px] text-slate-300 font-bold">{note.time}</span>
            </div>
            <p className="text-xl font-serif italic text-slate-700 leading-relaxed">"{note.text}"</p>
            <div className="mt-4 pt-4 border-t border-slate-50 flex gap-4">
              <button className="flex items-center gap-1 text-[#E57373] font-bold text-xs"><Heart size={14} /> Like</button>
              <button className="flex items-center gap-1 text-slate-300 font-bold text-xs"><MessageCircle size={14} /> Reply</button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 left-6 right-6">
        <Link href="/volunteer" className="w-full bg-[#8BA888] text-white py-5 rounded-2xl font-black text-center block shadow-xl border-b-4 border-[#6e856c] active:border-b-0 transition-all">
          Leave a Note for Others
        </Link>
      </div>
    </main>
  );
}