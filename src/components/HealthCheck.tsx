"use client";
import React, { useState } from 'react';
import { medicalData as data } from "../../lib/data";
import { ChevronRight, Heart, AlertCircle, CheckCircle2 } from 'lucide-react';

const QUESTIONS = [
  { id: 1, text: "Are you finding it harder to breathe than usual today?", category: "Breathing" },
  { id: 2, text: "Did you feel lightheaded or dizzy during your walk?", category: "Dizziness" },
  { id: 3, text: "Any new swelling in your ankles or legs this afternoon?", category: "Swelling" },
  { id: 4, text: "On a scale of 1 to 5, how tired do you feel right now?", category: "Energy", type: "scale" },
  { id: 5, text: "Did you feel any tightness or pressure in your chest?", category: "Safety" }
];

export default function HealthCheck({ onComplete }: { onComplete: (flagged: boolean) => void }) {
  const [step, setStep] = useState(0);
  const [isFlagged, setIsFlagged] = useState(false);

  const handleAnswer = (isPositiveIssue: boolean) => {
    // If they report chest pain (Q5) or dizziness (Q2), we flag it for the care team
    if (isPositiveIssue && (QUESTIONS[step].category === "Safety" || QUESTIONS[step].category === "Dizziness")) {
      setIsFlagged(true);
    }

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(isFlagged);
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-t-8 border-brand-sage max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Check-in {step + 1}/5</span>
        <Heart className="text-brand-coral" size={20} />
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
        {QUESTIONS[step].text}
      </h2>

      <div className="space-y-4">
        <button 
          onClick={() => handleAnswer(true)}
          className="w-full py-5 bg-brand-cream border-2 border-brand-teal rounded-2xl text-xl font-bold text-brand-teal hover:bg-brand-teal hover:text-white transition-all"
        >
          Yes, a little
        </button>
        <button 
          onClick={() => handleAnswer(false)}
          className="w-full py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xl font-bold text-slate-400"
        >
          No, I feel fine
        </button>
      </div>

      <p className="mt-8 text-center text-slate-400 text-sm italic">
        "Just checking in on you, Arthur." — Clara
      </p>
    </div>
  );
}