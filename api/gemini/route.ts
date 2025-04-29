import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  const { prompt } = await request.json();
  
  // Inicializa o Google Generative AI
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
  
  // Para modelos de texto
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}