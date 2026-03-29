"use client";
import React from 'react';
import { Heart, MessageCircle, Share2, Users } from 'lucide-react';

export default function CommunityPage() {
  const messages = [
    { id: 1, sender: "Sarah (Granddaughter)", text: "Go Grandpa! We're so proud of your 5-day streak! ❤️", time: "2m ago" },
    { id: 2, sender: "Volunteer Martha", text: "Keep taking those steady steps, Arthur. You're doing great work.", time: "1h ago" }
  ];

  return (
    <main className="min-h-screen bg-brand-cream p-6">
      <h1 className="text-3xl font-bold text-brand-teal mb-6 flex items-center gap-2">
        <Users /> Community
      </h1>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white p-6 rounded-3xl shadow-sm border border-brand-sage/10">
            <div className="flex justify-between items-start mb-2">
              <p className="font-bold text-brand-teal">{msg.sender}</p>
              <span className="text-xs text-slate-300">{msg.time}</span>
            </div>
            <p className="text-lg text-slate-700 italic mb-4">"{msg.text}"</p>
            <div className="flex gap-4 border-t pt-4">
              <button className="flex items-center gap-1 text-brand-coral font-bold text-sm">
                <Heart size={18} fill="currentColor" /> Like
              </button>
              <button className="flex items-center gap-1 text-slate-400 font-bold text-sm">
                <MessageCircle size={18} /> Reply
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-brand-teal text-white rounded-3xl text-center">
        <p className="font-medium opacity-90 mb-2">Share your progress?</p>
        <button className="bg-white text-brand-teal px-6 py-2 rounded-full font-bold flex items-center gap-2 mx-auto">
          <Share2 size={16} /> Update Family
        </button>
      </div>
    </main>
  );
}