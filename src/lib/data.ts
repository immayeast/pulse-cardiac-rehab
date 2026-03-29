export const medicalData = {
  patient: {
    name: "Arthur Bentley",
    emergencyContact: "+15550123456",
    doctorEmail: "care-team@hospital.org"
  },
  onboarding: {
    welcome: "Welcome home, dear. Let's look at your doctor's note together.",
    extracted: {
      intensity: "Moderate / RPE 3-4",
      plan: "Hybrid: 2 Home / 1 Clinic"
    }
  },
  checkinQuestions: [
    { id: "breath", q: "Are you finding it harder to breathe than usual?" },
    { id: "dizzy", "q": "Did you feel lightheaded or dizzy today?" },
    { id: "chest", "q": "Any tightness or pressure in your chest?" },
    { id: "energy", "q": "How is your energy? (1-5)" },
    { id: "mood", "q": "How are you feeling emotionally?" }
  ]
};