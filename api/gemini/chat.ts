import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Make sure we have the required environment variables
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'GEMINI_API_KEY process.env missing in Vercel configuration.' });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
    
    // Fallback if req.body is a string
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { message, history } = body;

    const contents = history.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContentStream({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: `You are an AI assistant for "Catering Toledo" and "Grupo Aquiles", a premium gastronomic excellence brand in Toledo, Spain, established in 1982. Your goal is to answer questions about weddings, catering, 'cestas de navidad', pastries, and events. You are a conversational bot named 'AG' (Asistente Gastronómico). Always be extremely polite, elegant, and provide accurate, high-end hospitality assistance. If you don't know the exact menu details, explain that our culinary team offers personalized menus based on local ingredients. Keep responses concise. Answer in the same language the user uses.`,
      }
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    for await (const chunk of response) {
      if (chunk.text) {
        res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
      }
    }
    
    res.write(`data: [DONE]\n\n`);
    res.end();
  } catch (error: any) {
    console.error('Error with Gemini API:', error);
    res.status(500).json({ error: 'There was an error communicating with the AI. Please try again later.' });
  }
}
