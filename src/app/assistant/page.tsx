// @ts-nocheck
"use client";
import React from 'react';
import { useChat } from 'ai/react';
import { ArrowLeft, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';

// INLINE DATA - No more import errors!
const medicalContext = {
  patientName: "Arthur Bentley",
  plan: "Cardiac Rehab - Phase II",
  intensity: "Moderate (RPE 3-4)",
  notes: "Post-MI recovery, focus on steady-state aerobic exercise."
};

export default function AssistantPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    body: { patientData: medicalContext },
  });

  return (
    <main className="p-6 bg-[#FDFBF7] min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="flex items-center gap-4 mb-6">
        <Link href="/"><ArrowLeft className="text-slate-400" /></Link>
        <div>
          <h1 className="text-2xl font-serif italic text-[#2C5F63]">Nurse Clara</h1>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">AI Assistant Active</span>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 space-y-6 overflow-y-auto pb-32">
        {messages.length === 0 && (
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-t-8 border-[#8BA888] animate-in fade-in slide-in-from-top-4">
            <Sparkles className="text-[#8BA888] mb-4" size={32} />
            <p className="text-2xl font-serif italic text-slate-800 leading-snug">
              "Good morning, Arthur. I've been reviewing your heart rate trends from yesterday. How are you feeling today, dear?"
            </p>
          </div>
        )}

        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-6 rounded-[2rem] text-lg ${
              m.role === 'user' 
              ? 'bg-[#2C5F63] text-white rounded-tr-none font-bold' 
              : 'bg-white border border-slate-100 text-slate-700 italic font-serif rounded-tl-none shadow-sm'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-center gap-2 px-4">
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>

      {/* Senior-Friendly Input */}
      <form onSubmit={handleSubmit} className="fixed bottom-8 left-6 right-6">
        <div className="relative group">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask Clara anything..."
            className="w-full p-7 rounded-[2.5rem] bg-white shadow-2xl border-2 border-slate-100 text-xl outline-none focus:border-[#2C5F63] transition-all"
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2C5F63] text-white p-5 rounded-full shadow-lg active:scale-90 transition-transform"
          >
            <Send size={24} />
          </button>
        </div>
      </form>
    </main>
  );
}