import { GoogleGenerativeAI } from "@google/generative-ai";


export async function POST(request: Request) {
  const { prompt } = await request.json();
  
  // Inicializa o Google Generative AI
  if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY is not defined in the environment variables.");
  }
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
  
  // Para modelos de texto
  const model = genAI.getGenerativeModel({ model: "gemini-flash" });
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}