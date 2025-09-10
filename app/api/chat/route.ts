import { NextResponse } from "next/server";
import portfolioData from "@/data/portfolioData";

let lastIntent: string | null = null; // track last intent

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase();
    let reply = "I'm not sure about that. Can you ask about my skills, projects, or experience?";
    let intent: string | null = null; // this tells the client to navigate

    if (/hi|hello|how are you|hey/i.test(lowerMsg)) {
      reply = "Hello! I'm Muhammad Anas Qadri, an AI & Full-Stack Developer. How can I assist you today?";
    } else if (/skill/i.test(lowerMsg)) {
      lastIntent = "skills";
      reply = `Here are my key skills: ${portfolioData.skills.join(", ")}. Do you want to see the full Skills Page?`;
    } else if (/project/i.test(lowerMsg)) {
      lastIntent = "projects";
      reply = `Some of my projects: ${portfolioData.projects.map((p) => p.title).join(", ")}. Do you want to visit my Projects Page?`;
    } else if (/experience/i.test(lowerMsg)) {
      lastIntent = "experience";
      reply = `My experience includes: ${portfolioData.experience.map((exp) => `${exp.role} at ${exp.company}`).join(", ")}.`;
    } else if (/education/i.test(lowerMsg)) {
      lastIntent = "education";
      reply = portfolioData.education;
    } else if (/yes/i.test(lowerMsg) && lastIntent) {
      // Instead of just sending text, send an intent to navigate
      intent = lastIntent; 
      reply = `Redirecting you to the ${lastIntent.charAt(0).toUpperCase() + lastIntent.slice(1)} Page...`;
      lastIntent = null; // reset
    }

    return NextResponse.json({ reply, intent });
  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json({ reply: "⚠️ Error processing request.", intent: null });
  }
}
