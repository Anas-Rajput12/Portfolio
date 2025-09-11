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
        "Docker",
        "Vercel",
        "Netlify",
        "Railway",
        "XAMPP",
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

      {/* ✅ Responsive Grid */}
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
          >
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ✅ Styles */}
      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .skill-card {
          background: #1e293b;
          padding: 2rem;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.7);
        }

        .skill-card h3 {
          color: #22d3ee;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .skill-card ul {
          color: #9ca3af;
          font-size: 1rem;
          line-height: 1.8;
        }

        /* ✅ Responsive Breakpoints */
        @media (min-width: 600px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
