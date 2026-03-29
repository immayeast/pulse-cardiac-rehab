"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { ArrowRight, AlertTriangle, Heart, MessageSquare, Mail } from "lucide-react";
import data from "@/lib/data.json";

export default function CheckinPage() {
  const [step, setStep] = useState(0);
  const [isFlagged, setIsFlagged] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (isIssue: boolean) => {
    if (isIssue && step < 3) setIsFlagged(true); // Flag if yes to breathing/dizzy/chest
    
    if (step < data.checkinQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  // NATIVE SHARING LOGIC
  const shareToFamily = () => {
    const msg = encodeURIComponent(`Hi! Arthur just finished his rehab session. He's doing great!`);
    window.location.href = `sms:${data.patient.emergencyContact}?&body=${msg}`;
  };

  const notifyDoctor = () => {
    window.location.href = `mailto:${data.patient.doctorEmail}?subject=Flagged Session: Arthur Bentley&body=Patient reported discomfort during check-in.`;
  };

  return (
    <main className="p-6 space-y-6">
      {/* Hero Section */}
      <div className="bg-[#2C5F63] text-white p-8 rounded-[2.5rem] shadow-lg">
        <div className="flex items-center gap-2 mb-2 opacity-80">
          <Heart size={18} fill="white" />
          <span className="text-xs font-bold uppercase tracking-wider">Session Complete</span>
        </div>
        <h1 className="text-3xl font-serif italic leading-tight">Five quick questions, dear.</h1>
      </div>

      {!finished ? (
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
          <p className="text-sm font-bold text-slate-400 mb-2 uppercase">Question {step + 1} of 5</p>
          <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
            {data.checkinQuestions[step].q}
          </h2>

          <div className="space-y-4">
            <button 
              onClick={() => handleAnswer(true)}
              className="w-full py-5 bg-[#FDFBF7] border-2 border-[#2C5F63] rounded-2xl text-xl font-bold text-[#2C5F63]"
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
      ) : (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
          {isFlagged ? (
            <div className="bg-rose-50 p-6 rounded-3xl border-2 border-rose-200">
              <div className="flex items-center gap-2 text-rose-600 font-bold mb-2">
                <AlertTriangle size={20} /> Escalation Required
              </div>
              <p className="text-slate-700 text-sm mb-4">I've noticed you're feeling a bit uneasy. Let's let the doctor know.</p>
              <button onClick={notifyDoctor} className="w-full bg-rose-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                <Mail size={18} /> Alert Care Team
              </button>
            </div>
          ) : (
            <div className="bg-emerald-50 p-6 rounded-3xl border-2 border-emerald-200 text-center">
              <p className="text-emerald-700 font-bold mb-4">Perfect marks! You're recovering beautifully.</p>
              <div className="flex gap-2">
                <button onClick={shareToFamily} className="flex-1 bg-white border border-emerald-200 p-4 rounded-xl flex flex-col items-center gap-1">
                  <MessageSquare className="text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase">Text Family</span>
                </button>
                <Link href="/community" className="flex-1 bg-[#2C5F63] text-white p-4 rounded-xl flex flex-col items-center gap-1 justify-center">
                   <span className="text-xs font-bold">Continue</span>
                   <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}