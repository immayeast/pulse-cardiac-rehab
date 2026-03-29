"use client";
import React, { useState } from 'react';
import { Heart, AlertTriangle, ArrowRight, MessageSquare, Mail, RefreshCw, Users } from "lucide-react";
import Link from "next/link";

// 1. SIMPLE DATA SOURCE
const checkinQuestions = [
  { id: "breath", q: "Are you finding it harder to breathe than usual?" },
  { id: "dizzy", q: "Did you feel lightheaded or dizzy today?" },
  { id: "chest", q: "Any tightness or pressure in your chest?" },
  { id: "energy", q: "On a scale of 1 to 5, how is your energy?" },
  { id: "mood", q: "How are you feeling emotionally, dear?" }
];

export default function CheckinPage() {
  const [step, setStep] = useState(0);
  const [flagged, setFlagged] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleAnswer = (isIssue: boolean) => {
    // If user says "Yes" to danger signs (first 3 questions), we flag for the care team
    if (isIssue && step <= 2) setFlagged(true);

    if (step < checkinQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setComplete(true);
    }
  };

  // NATIVE SHARING (The SMS/Email Logic)
  const notifyFamily = () => {
    const msg = encodeURIComponent("Hi! Arthur just finished his heart rehab. He's feeling strong! ❤️");
    window.location.href = `sms:+15550123456?&body=${msg}`;
  };

  const notifyDoctor = () => {
    const note = `AUTOMATED DOCTOR'S NOTE: Patient reported ${flagged ? 'SYMPTOMS DETECTED' : 'Normal recovery'}. BPM: 108. O2: 98%.`;
    window.location.href = `mailto:doctor@hospital.org?subject=Rehab Update: Arthur&body=${note}`;
  };

  return (
    <main className="p-6 space-y-6 flex flex-col min-h-screen bg-[#FDFBF7]">
      
      {/* NURSE CLARA AGENT UI */}
      <div className="bg-white p-8 rounded-[3rem] shadow-sm border-t-8 border-[#8BA888] relative">
        <p className="text-2xl font-serif italic text-slate-800 leading-snug">
          {!complete 
            ? `"${checkinQuestions[step].q}"`
            : flagged 
              ? `"I'm a little concerned about those symptoms, Arthur. Let's send a note to your doctor."`
              : `"You've done a marvelous job today! Everything looks perfect."`}
        </p>
        {!complete && (
          <button className="mt-4 flex items-center gap-2 text-[#2C5F63] font-bold text-xs opacity-60">
            <RefreshCw size={14} /> Repeat Question
          </button>
        )}
      </div>

      {!complete ? (
        <div className="flex-1 space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <button 
            onClick={() => handleAnswer(true)}
            className="w-full py-8 bg-[#2C5F63] text-white rounded-[2rem] text-3xl font-black shadow-xl active:scale-95 transition-all"
          >
            Yes
          </button>
          <button 
            onClick={() => handleAnswer(false)}
            className="w-full py-8 bg-white border-4 border-slate-100 rounded-[2rem] text-3xl font-black text-slate-300"
          >
            No
          </button>
          <div className="text-center text-slate-300 font-bold uppercase text-xs tracking-widest mt-4">
            Step {step + 1} of 5
          </div>
        </div>
      ) : (
        /* FINAL STATUS / ESCALATION VIEW */
        <div className="flex-1 space-y-4 animate-in zoom-in-95">
          {flagged ? (
            <div className="bg-rose-50 p-8 rounded-[3rem] border-2 border-rose-100">
              <div className="flex items-center gap-3 text-rose-600 mb-4">
                <AlertTriangle size={32} />
                <h3 className="text-xl font-black uppercase tracking-tighter">Medical Review Required</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">
                I've prepared a <strong>Doctor's Note</strong> with your vitals from today. Tap below to send it to your care team.
              </p>
              <button 
                onClick={notifyDoctor}
                className="w-full bg-rose-600 text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-lg"
              >
                <Mail size={24} /> Send to Doctor
              </button>
            </div>
          ) : (
            <div className="bg-emerald-50 p-8 rounded-[3rem] border-2 border-emerald-100">
              <div className="flex items-center gap-3 text-emerald-600 mb-4">
                <Heart size={32} fill="currentColor" />
                <h3 className="text-xl font-black uppercase tracking-tighter">All Clear!</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">
                Your heart is recovering beautifully. I've updated your record and notified your community.
              </p>
              <div className="grid gap-3">
                <button onClick={notifyFamily} className="w-full bg-[#2C5F63] text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-lg">
                  <MessageSquare size={24} /> Text My Family
                </button>
                <Link href="/community" className="w-full bg-white border border-slate-200 py-4 rounded-2xl font-bold text-[#2C5F63] text-center flex items-center justify-center gap-2">
                  <Users size={18} /> Community Notes
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* PERSISTENT HOME LINK */}
      <Link href="/" className="text-center py-4 text-slate-300 font-bold text-sm tracking-widest uppercase">
        Return to Dashboard
      </Link>
    </main>
  );
}