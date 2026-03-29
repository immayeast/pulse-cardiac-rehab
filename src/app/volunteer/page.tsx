"use client";
import React, { useState } from 'react';
import { Heart, Send, ShieldCheck, CheckCircle } from 'lucide-react';

export default function VolunteerPortal() {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSend = () => {
    // Simulate AI Moderation
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setMessage("");
  };

  return (
    <main className="p-6 space-y-6">
      <header className="py-4">
        <h1 className="text-2xl font-bold text-brand-teal text-center font-serif italic">Nurse Clara's Volunteers</h1>
      </header>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-sage/20">
        <div className="flex items-center gap-2 text-brand-sage font-bold text-sm mb-4 uppercase tracking-wider">
          <ShieldCheck size={18} /> Safety First
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          "Welcome, dear. Your kind words mean the world to our patients. I'll take a quick peek at your note before I deliver it, just to keep everyone safe."
        </p>
      </div>

      <div className="space-y-4">
        <label className="text-xs font-bold text-slate-400 uppercase ml-2">Your Message of Hope</label>
        <textarea 
          className="w-full h-40 bg-white p-6 rounded-3xl shadow-inner border border-slate-100 focus:ring-2 focus:ring-brand-sage focus:outline-none text-slate-700"
          placeholder="e.g., 'You're doing amazing! One step at a time...'"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        <button 
          onClick={handleSend}
          disabled={!message || isSent}
          className="w-full bg-brand-teal text-white py-5 rounded-3xl font-bold text-xl flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-50"
        >
          {isSent ? <CheckCircle /> : <Send size={20} />}
          {isSent ? "Sent to Clara" : "Send Encouragement"}
        </button>
      </div>

      {isSent && (
        <div className="p-4 bg-brand-sage/10 text-brand-teal rounded-2xl text-center text-sm font-medium animate-bounce">
          Message sent! Nurse Clara is reviewing it now.
        </div>
      )}
    </main>
  );
}