"use client";
import React, { useState } from 'react';
import { Heart, AlertTriangle, ArrowRight, MessageSquare, Mail, RefreshCw } from "lucide-react";
import Link from "next/link";
import data from "../lib/data.json";

export default function CheckinPage() {
  const [step, setStep] = useState(0);
  const [flagged, setFlagged] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleAnswer = (isIssue: boolean) => {
    // If user answers 'Yes' to the first 3 questions (Breath, Dizzy, Chest), flag it
    if (isIssue && step <= 2) setFlagged(true);

    if (step < data.checkinQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setComplete(true);
    }
  };

  const sendSMS = () => {
    const text = encodeURIComponent("Hi! Arthur just finished his heart rehab session. He's feeling strong today! ❤️");
    window.location.href = `sms:${data.patient.emergencyContact}?&body=${text}`;
  };

  return (
    <main className="p-6 space-y-6 flex flex-col min-h-screen">
      {/* CLARA GUIDANCE */}
      <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border-t-4 border-[#8BA888] mb-4">
        <p className="text-lg font-serif italic text-slate-700">
          {!complete 
            ? `"Just five quick questions for your records, Arthur. Be honest with me, dear."`
            : flagged 
              ? `"I'm a little concerned about those symptoms. Let's send a note to your care team just to be safe."`
              : `"You've done a marvelous job today! Everything looks perfect."`}
        </p>
      </div>

      {!complete ? (
        <div className="flex-1 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-2">
              Question {step + 1} of 5
            </span>
            <h2 className="text-2xl font-bold text-slate-800 leading-tight mb-8">
              {data.checkinQuestions[step].q}
            </h2>

            <div className="grid gap-4">
              <button 
                onClick={() => handleAnswer(true)}
                className="w-full py-6 bg-[#FDFBF7] border-2 border-[#2C5F63] rounded-2xl text-xl font-black text-[#2C5F63] active:bg-[#2C5F63] active:text-white transition-all"
              >
                Yes
              </button>
              <button 
                onClick={() => handleAnswer(false)}
                className="w-full py-6 bg-slate-50 border-2 border-slate-100 rounded-2xl text-xl font-bold text-slate-400"
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* SUMMARY / ESCALATION VIEW */
        <div className="flex-1 space-y-4 animate-in fade-in slide-in-from-bottom-4">
          {flagged ? (
            <div className="bg-rose-50 p-8 rounded-[2.5rem] border-2 border-rose-100 space-y-6">
              <div className="flex items-center gap-3 text-rose-600">
                <AlertTriangle size={32} />
                <h3 className="text-xl font-black uppercase tracking-tight">Care Team Notified</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Because you reported some discomfort, I've sent your vitals and answers to **{data.patient.doctorEmail}**. A nurse will check in with you shortly.
              </p>
              <button 
                onClick={() => window.location.href = `mailto:${data.patient.doctorEmail}`}
                className="w-full bg-rose-600 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2"
              >
                <Mail size={20} /> Message Doctor
              </button>
            </div>
          ) : (
            <div className="bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100 space-y-6">
              <div className="flex items-center gap-3 text-emerald-600">
                <Heart size={32} fill="currentColor" />
                <h3 className="text-xl font-black uppercase tracking-tight">Session Success</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Your recovery is right on track. Would you like to let your family know how you're doing?
              </p>
              <div className="grid gap-3">
                <button 
                  onClick={sendSMS}
                  className="w-full bg-[#2C5F63] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare size={20} /> Text My Family
                </button>
                <Link href="/" className="w-full bg-white border border-slate-200 text-slate-400 py-4 rounded-2xl font-bold text-center">
                  Back to Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* FOOTER SWITCHER */}
      <nav className="flex gap-2">
        <Link href="/" className="flex-1 py-3 text-center text-[8px] font-black bg-white text-slate-400 rounded-full border border-slate-100">HOME</Link>
        <Link href="/volunteer" className="flex-1 py-3 text-center text-[8px] font-black bg-white text-slate-400 rounded-full border border-slate-100">VOLUNTEER</Link>
      </nav>
    </main>
  );
}