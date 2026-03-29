"use client";
import React, { useState } from 'react';
import { ChevronRight, Heart, AlertCircle, CheckCircle2 } from 'lucide-react';

// INLINE DATA: No more import errors
const data = {
  checkinQuestions: [
    { id: "breath", q: "Are you finding it harder to breathe than usual?" },
    { id: "dizzy", q: "Did you feel lightheaded or dizzy today?" },
    { id: "chest", q: "Any tightness or pressure in your chest?" },
    { id: "energy", q: "How is your energy? (1-5)" },
    { id: "mood", q: "How are you feeling emotionally?" }
  ]
};

export default function HealthCheck({ onComplete }: { onComplete: (flagged: boolean) => void }) {
  const [step, setStep] = useState(0);
  const [isFlagged, setIsFlagged] = useState(false);

  const handleAnswer = (isIssue: boolean) => {
    if (isIssue && step <= 2) setIsFlagged(true);
    if (step < data.checkinQuestions.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(isFlagged);
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-[#8BA888] max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Check-in {step + 1}/5</span>
        <Heart className="text-[#E57373]" size={20} />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
        {data.checkinQuestions[step].q}
      </h2>

      <div className="space-y-4">
        <button 
          onClick={() => handleAnswer(true)}
          className="w-full py-5 bg-[#FDFBF7] border-2 border-[#2C5F63] rounded-2xl text-xl font-black text-[#2C5F63]"
        >
          Yes
        </button>
        <button 
          onClick={() => handleAnswer(false)}
          className="w-full py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xl font-bold text-slate-400"
        >
          No
        </button>
      </div>
    </div>
  );
}