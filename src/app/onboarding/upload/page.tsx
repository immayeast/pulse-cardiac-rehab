"use client";
import React, { useState } from 'react';
import { Camera, FileText, Loader2, RefreshCw, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OnboardingUpload() {
  const [step, setStep] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const router = useRouter();

  const handleSimulateScan = () => {
    setStep('scanning');
    // Simulate AI reading the medical record
    setTimeout(() => setStep('complete'), 3000);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] p-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        
        {/* Nurse Clara Guidance */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-[#8BA888] relative">
          <p className="text-xl text-slate-700 italic leading-relaxed">
            {step === 'idle' && "Welcome home, dear. Could you show me a photo of your doctor's note? I'll help you make sense of it."}
            {step === 'scanning' && "Just a moment... I'm reading through your plan carefully."}
            {step === 'complete' && "All done! I've put together a gentle plan for us. Shall we take a look?"}
          </p>
          <button className="mt-4 flex items-center gap-2 text-[#2C5F63] font-bold text-sm">
            <RefreshCw size={16} /> Repeat Instruction
          </button>
        </div>

        <div className="bg-white rounded-[2.5rem] p-12 border-4 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
          {step === 'idle' && (
            <>
              <div className="w-20 h-20 bg-[#FDFBF7] rounded-full flex items-center justify-center mb-6 text-[#2C5F63]">
                <Camera size={40} />
              </div>
              <button 
                onClick={handleSimulateScan}
                className="w-full bg-[#2C5F63] text-white py-5 rounded-2xl font-bold text-xl shadow-lg active:scale-95 transition-transform"
              >
                Take Photo of Note
              </button>
              <p className="mt-4 text-slate-400 text-sm">Or upload a medical record PDF</p>
            </>
          )}

          {step === 'scanning' && (
            <div className="space-y-4">
              <Loader2 className="w-16 h-16 text-[#8BA888] animate-spin mx-auto" />
              <p className="font-bold text-[#2C5F63] animate-pulse">Analyzing Record...</p>
            </div>
          )}

          {step === 'complete' && (
            <button onClick={() => router.push('/onboarding/confirm')}>
                Next Step
            </button>
          )}
        </div>
      </div>
    </main>
  );
}