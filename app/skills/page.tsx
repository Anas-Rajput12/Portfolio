"use client";
import React from "react";

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "C++"],
    },
    {
      category: "Frontend Development",
      items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "Backend & Databases",
      items: [
        "Node.js",
        "Express.js",
        "Flask",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase (Firestore, Auth, Hosting)",
        "Sanity.io (Headless CMS)",
      ],
    },
    {
      category: "AI & Emerging Tech",
      items: [
        "Generative AI",
        "Agentic AI & SDKs",
        "Chatbots & Voice Assistants",
        "Machine Learning Models",
        "Web 3.0 & Blockchain Basics",
      ],
    },
    {
      category: "AI/ML Frameworks & Tools",
      items: [
        "Streamlit",
        "Chainlit",
        "LangChain",
        "OpenAI API",
        "Hugging Face Transformers",
        "Jupyter Notebook",
      ],
    },
    {
      category: "Developer Tools & Platforms",
      items: [
        "Git & GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "Vercel",
        "Docker",
      ],
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0f2027)",
        color: "white",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "1rem",
          color: "#22d3ee",
        }}
      >
        Skills & Expertise
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#9ca3af",
          marginBottom: "3rem",
        }}
      >
        A blend of technical expertise, AI innovation, and full-stack
        development skills to craft scalable and intelligent applications.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "2rem",
              borderRadius: "14px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
              textAlign: "left",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0,0,0,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(0,0,0,0.5)";
            }}
          >
            <h3
              style={{
                color: "#22d3ee",
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              {skill.category}
            </h3>
            <ul
              style={{ color: "#9ca3af", fontSize: "1rem", lineHeight: "1.8" }}
            >
              {skill.items.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
