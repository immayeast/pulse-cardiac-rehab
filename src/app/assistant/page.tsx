// @ts-nocheck
"use client";
import { useChat } from 'ai/react';
import { medicalData as data } from "../lib/data";

export default function AssistantPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    body: { patientData: data.onboarding.extracted },
  });

  return (
    <main className="p-6 bg-[#FDFBF7] min-h-screen flex flex-col">
      <div className="flex-1 space-y-6 overflow-y-auto pb-24">
        {/* NURSE CLARA'S GREETING */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border-t-4 border-[#8BA888]">
          <p className="text-xl font-serif italic text-slate-700">
            "I'm right here, Arthur. Is there anything on your mind regarding your recovery today?"
          </p>
        </div>

        {/* CHAT BUBBLES */}
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-5 rounded-[2rem] font-bold ${
              m.role === 'user' 
              ? 'bg-[#2C5F63] text-white rounded-tr-none' 
              : 'bg-white border border-slate-100 text-slate-700 italic font-serif rounded-tl-none shadow-sm'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        
        {isLoading && <div className="text-[10px] font-black text-slate-300 animate-pulse">CLARA IS THINKING...</div>}
      </div>

      {/* INPUT AREA (Large for Seniors) */}
      <form onSubmit={handleSubmit} className="fixed bottom-6 left-6 right-6">
        <div className="relative flex items-center">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your question..."
            className="w-full p-6 rounded-[2rem] bg-white shadow-2xl border-2 border-slate-100 text-lg outline-none focus:border-[#2C5F63] transition-all"
          />
          <button 
            type="submit"
            className="absolute right-3 bg-[#2C5F63] text-white p-4 rounded-full shadow-lg active:scale-90 transition-transform"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </form>
    </main>
  );
}

// Simple Arrow Icon for the button
function ArrowRight({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>;
}