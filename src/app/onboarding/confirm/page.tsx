"use client";
import React from 'react';
import { Check, Calendar, Activity, User, Home as HomeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ConfirmPlan() {
  const router = useRouter();

  const extractedData = {
    name: "Arthur Bentley",
    age: 72,
    intensity: "Moderate (RPE 3-4)",
    schedule: "3x Weekly (Hybrid)",
    duration: "15 minutes"
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] p-6">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-[#2C5F63] mt-8">Is this correct?</h1>
        <p className="text-slate-500">I've gathered this from your notes. Please tap any section to edit it.</p>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-2xl text-blue-600"><User size={24}/></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Patient</p>
              <p className="text-lg font-bold text-slate-800">{extractedData.name}, {extractedData.age}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="bg-orange-50 p-3 rounded-2xl text-orange-600"><Activity size={24}/></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Intensity</p>
              <p className="text-lg font-bold text-slate-800">{extractedData.intensity}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="bg-green-50 p-3 rounded-2xl text-green-600"><HomeIcon size={24}/></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Hybrid Plan</p>
              <p className="text-lg font-bold text-slate-800">{extractedData.schedule}</p>
              <p className="text-xs text-slate-400">2 Home / 1 Clinic Session</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => router.push('/')}
          className="w-full bg-[#2C5F63] text-white py-6 rounded-[2rem] text-xl font-bold shadow-xl mt-8 flex items-center justify-center gap-2"
        >
          <Check size={24} /> Create My Profile
        </button>
        
        <p className="text-center text-slate-400 text-sm italic">
          "I'll be right here if you need to change anything later, dear." — Clara
        </p>
      </div>
    </main>
  );
}