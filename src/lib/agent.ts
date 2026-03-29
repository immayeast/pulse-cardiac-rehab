export const NurseClaraAgent = {
  // 1. REASONING: Analyze the doctor's note (The OCR feature)
  analyzeNote: (rawText: string) => {
    // This simulates the LLM extracting clinical data
    return {
      intensity: "RPE 3-4 (Moderate)",
      frequency: "3x Weekly",
      warningSigns: ["Dizziness", "Shortness of breath"],
      isHybrid: true
    };
  },

  // 2. ACTION: Speak based on heart rate (The Wearable feature)
  getGuidance: (heartRate: number, target: number) => {
    if (heartRate > target + 10) return "Slow down a bit, dear. Let's keep that heart steady.";
    if (heartRate < target - 10) return "You're doing great, but let's pick up the pace just a tiny bit.";
    return "Perfect rhythm, Arthur. Keep it right there.";
  },

  // 3. VOICE: The "Repeat" function you requested
  speak: (text: string) => {
    if (typeof window !== "undefined") {
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = 0.9; // Slower for elderly ears
      window.speechSynthesis.speak(msg);
    }
  }
};