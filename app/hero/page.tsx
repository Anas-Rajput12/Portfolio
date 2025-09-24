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
        padding: "2rem",
      }}
    >
      <div className="hero-container">
        {/* Text Section */}
        <div className="hero-text">
          <h1
            style={{
              fontWeight: 800,
              fontSize: "2rem",
              marginBottom: "1rem",
              background: "linear-gradient(90deg,#22d3ee,#a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I&apos;m Muhammad Anas Qadri
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1.2rem",
              color: "#22d3ee",
            }}
          >
            AI & Full-Stack Developer
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#cbd5e1",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            Passionate about{" "}
            <span style={{ color: "#22d3ee", fontWeight: 600 }}>Agentic AI</span>
            ,{" "}
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
            </span>{" "}
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
          <div className="hero-socials">
            {[
              { href: "https://github.com/Anas-Rajput12", icon: <FaGithub /> },
              {
                href: "https://www.linkedin.com/in/muhammad-anas-qadri-a7608a2b7/",
                icon: <FaLinkedin />,
              },
              {
                href: "mailto:muhammadanasqadri2@gmail.com",
                icon: <FaEnvelope />,
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="/projects" className="hero-btn">
            View My Projects
          </a>
        </div>

        {/* Image Section */}
        <div className="hero-img-wrapper">
          <div className="hero-img">
            <Image
              src="/images/Gemini_Generated_Image_5nobuq5nobuq5nob.png"
              alt="Muhammad Anas Qadri"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
          gap: 3rem;
        }

        .hero-text {
          flex: 2 1 500px;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .hero-icon {
          font-size: 1.8rem;
          color: #fff;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          transition: 0.3s;
        }
        .hero-icon:hover {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
        }

        .hero-btn {
          padding: 0.8rem 2rem;
          font-size: clamp(1rem, 2vw, 1.1rem);
          font-weight: 600;
          color: #0f172a;
          background: linear-gradient(90deg, #22d3ee, #a855f7);
          border-radius: 30px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
          transition: all 0.3s ease;
          display: inline-block;
        }
        .hero-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 25px rgba(168, 85, 247, 0.6);
        }

        .hero-img-wrapper {
          flex: 1 1 260px;
          display: flex;
          justify-content: center;
        }

        .hero-img {
          position: relative;
          width: 280px;
          height: 350px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(34, 211, 238, 0.5);
          box-shadow: 0 0 30px rgba(34, 211, 238, 0.5),
            0 0 50px rgba(168, 85, 247, 0.4);
          backdrop-filter: blur(10px);
        }

        /* Mobile Styles */
        @media (max-width: 767px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }

          .hero-text {
            text-align: center;
            margin-top: -80px;
          }

          .hero-socials {
            justify-content: center;
          }

          .hero-img {
            width: 180px !important;
            height: 180px !important;
            border-radius: 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
