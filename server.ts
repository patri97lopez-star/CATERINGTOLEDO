import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/gemini/chat", async (req, res) => {
    try {
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      const { message, history } = req.body;

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: `You are an AI assistant for "Catering Toledo" and "Grupo Aquiles", a premium gastronomic excellence brand in Toledo, Spain, established in 1982. Your goal is to answer questions about weddings, catering, 'cestas de navidad', pastries, and events. You are a conversational bot named 'AG' (Asistente Gastronómico). Always be extremely polite, elegant, and provide accurate, high-end hospitality assistance. If you don't know the exact menu details, explain that our culinary team offers personalized menus based on local and zero-kilometer (KM0) ingredients. Keep responses concise and focused on event planning, catering services, and premium food. Default language is Spanish unless addressed in another language.`,
        },
      });

      // replay history if passed. We can just append messages, but we only have `chat.sendMessageStream`.
      // The SDK allows sending multiple messages. Actually, `contents` can't be used with chat.sendMessage.
      // So we can use `ai.models.generateContentStream` instead to pass history directly.

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
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
