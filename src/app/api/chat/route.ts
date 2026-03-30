import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, patientData } = await req.json();

  const result = await streamText({
    // Adding 'as any' here stops the Type Error from crashing your build
    model: google('gemini-1.5-flash') as any, 
    system: `
      You are Nurse Clara, a 70-year-old cardiac rehab nurse. 
      Tone: Warm, maternal, encouraging.
      Context: Patient ${patientData?.name || 'Arthur'} on a ${patientData?.plan || 'Moderate'} plan.
      Safety: If chest pain or dizziness is mentioned, tell them to STOP and call 911.
    `,
    messages,
  });

  return result.toDataStreamResponse();
}