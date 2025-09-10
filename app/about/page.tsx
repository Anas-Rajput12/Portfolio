"use client";
import React from "react";

const About = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0f2027)",
        color: "white",
        padding: "5rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "1rem",
          color: "#22d3ee", // Cyan for heading
        }}
      >
        About Me
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#e5e7eb", // Light gray for body
          marginBottom: "3rem",
          maxWidth: "750px",
        }}
      >
        Get to know more about my journey, skills, and vision for the future.
      </p>

      {/* Intro */}
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "750px",
          lineHeight: "1.8",
          marginTop: "1rem",
          color: "#e5e7eb", // same color for consistency
        }}
      >
        I’m <strong style={{ color: "#22d3ee" }}>Muhammad Anas</strong>, an{" "}
        <strong style={{ color: "#22d3ee" }}>IT Graduate</strong> and{" "}
        <strong style={{ color: "#22d3ee" }}>AI & Full-Stack Developer</strong>{" "}
        passionate about integrating{" "}
        <strong style={{ color: "#22d3ee" }}>Artificial Intelligence</strong>{" "}
        with modern web technologies. With expertise in Generative AI,
        Chatbots, Voice Assistants, and Databases, I craft intelligent,
        scalable, and user-friendly applications that empower businesses and
        shape the future of technology.
      </p>

      {/* Highlights */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          maxWidth: "1100px",
          marginTop: "3rem",
          width: "100%",
        }}
      >
        {/* Expertise */}
        <div
          style={{
            background: "#1e293b",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3
            style={{
              color: "#22d3ee", // cyan heading
              fontSize: "1.6rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Expertise
          </h3>
          <p style={{ color: "#e5e7eb", fontSize: "1.05rem" }}>
            Skilled in Next.js, TypeScript, Node.js, Databases, and Generative
            AI. Experienced in building scalable apps and voice assistants with
            intuitive interfaces.
          </p>
        </div>

        {/* Experience */}
        <div
          style={{
            background: "#1e293b",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3
            style={{
              color: "#22d3ee",
              fontSize: "1.6rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Experience
          </h3>
          <p style={{ color: "#e5e7eb", fontSize: "1.05rem" }}>
            Hands-on experience through Hackathons, Freelance Projects, and a
            Web Development Internship. Built AI-powered apps, voice assistants,
            and scalable full-stack solutions delivering seamless user
            experiences.
          </p>
        </div>

        {/* Vision */}
        <div
          style={{
            background: "#1e293b",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-6px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <h3
            style={{
              color: "#22d3ee",
              fontSize: "1.6rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Vision
          </h3>
          <p style={{ color: "#e5e7eb", fontSize: "1.05rem" }}>
            To become a leader in AI-driven web technologies and contribute to
            shaping the next era of Web 3.0 & intelligent systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
