import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({ apiKey: "AIzaSyCQJwk7lj_oaMVXAn-WqviKIK1Yzpocyjk" });

async function test() {
  try {
    const modelName = "models/gemini-2.5-flash";

    const response = await client.models.generateContent({
      model: modelName,
      contents: [
        { role: "user", text: "Hello! Give me a short example response." }
      ],
    });

    // Inspect the full response
    console.log("Full response object:");
    console.dir(response, { depth: null });

    // Attempt to safely extract text from any structure
    let outputText = "No text generated";

    if (response?.candidates?.length) {
      for (const candidate of response.candidates) {
        if (candidate?.content?.length) {
          for (const block of candidate.content) {
            if (block?.text) {
              outputText = block.text;
              break;
            }
          }
        }
      }
    }

    console.log("\nGenerated text:");
    console.log(outputText);

  } catch (err) {
    console.error("Error generating content:", err);
  }
}

test();
