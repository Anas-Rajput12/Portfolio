"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Text Left */}
        <div style={{ flex: "2", minWidth: "300px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              marginBottom: "1rem",
              background: "linear-gradient(90deg,#22d3ee,#a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I'm Muhammad Anas Qadri
          </h1>

          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              marginBottom: "1.2rem",
              color: "#22d3ee",
            }}
          >
            AI & Full-Stack Developer
          </h2>

          <p
  style={{
    fontSize: "1.15rem",
    color: "#cbd5e1",
    lineHeight: "1.8",
    marginBottom: "2rem",
  }}
>
  Passionate about{" "}
  <span style={{ color: "#22d3ee", fontWeight: 600 }}>Agentic AI</span>,{" "}
  <span style={{ color: "#a855f7", fontWeight: 600 }}>
    Generative Models
  </span>
  , and{" "}
  <span style={{ color: "#22d3ee", fontWeight: 600 }}>
    Voice Assistants
  </span>
  . Skilled in{" "}
  <span style={{ color: "#a855f7", fontWeight: 600 }}>
    SDK Integration, Chatbots, and Automation
  </span>
  — building{" "}
  <span style={{ color: "#22d3ee", fontWeight: 600 }}>
    smart, scalable web apps
  </span>{" "}
  that bring{" "}
  <span style={{ color: "#a855f7", fontWeight: 600 }}>
    real-time intelligence
  </span>{" "}
  to life.
</p>


          {/* Social Links */}
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem" }}>
  <a
    href="https://github.com/Anas-Rajput12"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "1.8rem",
      color: "#fff",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      transition: "0.3s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #3b82f6, #06b6d4)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #06b6d4, #3b82f6)")
    }
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "1.8rem",
      color: "#fff",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      transition: "0.3s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #3b82f6, #06b6d4)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #06b6d4, #3b82f6)")
    }
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:muhammadanasqadri2@gmail.com"
    style={{
      fontSize: "1.8rem",
      color: "#fff",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      transition: "0.3s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #3b82f6, #06b6d4)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(135deg, #06b6d4, #3b82f6)")
    }
  >
    <FaEnvelope />
  </a>
</div>


          {/* CTA Button */}
          <a
            href="/projects"
            style={{
              padding: "0.9rem 2rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#0f172a",
              background: "linear-gradient(90deg,#22d3ee,#a855f7)",
              borderRadius: "30px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(168, 85, 247, 0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1.05)";
              target.style.boxShadow =
                "0 6px 25px rgba(168, 85, 247, 0.6)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.transform = "scale(1)";
              target.style.boxShadow =
                "0 4px 20px rgba(168, 85, 247, 0.4)";
            }}
          >
            View My Projects
          </a>
        </div>

        {/* Profile Image Right */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            minWidth: "260px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "350px",
              borderRadius: "20px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
              border: "2px solid rgba(34,211,238,0.5)",
              boxShadow: "0 0 30px rgba(34,211,238,0.5), 0 0 50px rgba(168,85,247,0.4)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Image
              src="/images/pic.jfif"
              alt="Muhammad Anas Qadri"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
