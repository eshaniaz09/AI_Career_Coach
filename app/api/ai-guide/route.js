import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const response = await model.generateContent(prompt);

    const output =
      response?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return Response.json({ output });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}
