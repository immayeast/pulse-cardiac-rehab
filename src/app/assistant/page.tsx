"use client";
import { useChat } from 'ai/react';
import { medicalData } from "@/lib/data"; // Your existing data

export default function AssistantPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    body: { patientData: medicalData.onboarding.extracted },
  });

  return (
    <div className="p-6 bg-brand-teal min-h-screen text-white">
      {/* Nurse Clara's Speech Bubble */}
      <div className="space-y-4">
        {messages.map(m => (
          <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left italic'}>
            {m.content}
          </div>
        ))}
      </div>

      {/* Input area simulating Voice-to-Text */}
      <form onSubmit={handleSubmit} className="fixed bottom-10 left-0 w-full px-6">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Talk to Clara..."
          className="w-full p-4 rounded-full bg-white text-slate-800 shadow-xl"
        />
      </form>
    </div>
  );
}