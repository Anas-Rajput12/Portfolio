"use client";
import React from "react";

const About = () => {
  return (
    <section className="about-section">
      {/* Heading */}
      <h1 className="about-heading">About Me</h1>
      <p className="about-subtitle">
        Get to know more about my journey, skills, and vision for the future.
      </p>

      {/* Intro */}
      <p className="about-intro">
        I’m <strong className="highlight">Muhammad Anas</strong>, an{" "}
        <strong className="highlight">IT Graduate</strong> and{" "}
        <strong className="highlight">AI & Full-Stack Developer</strong>{" "}
        passionate about integrating{" "}
        <strong className="highlight">Artificial Intelligence</strong> with
        modern web technologies. With expertise in Generative AI, Chatbots,
        Voice Assistants, and Databases, I craft intelligent, scalable, and
        user-friendly applications that empower businesses and shape the future
        of technology.
      </p>

      {/* Highlights */}
      <div className="about-grid">
        <div className="about-card">
          <h3>Expertise</h3>
          <p>
            Skilled in Next.js, TypeScript, Node.js, Databases, and Generative
            AI. Experienced in building scalable apps and voice assistants with
            intuitive interfaces.
          </p>
        </div>

        <div className="about-card">
          <h3>Experience</h3>
          <p>
            Hands-on experience through Hackathons, Freelance Projects, and a
            Web Development Internship. Built AI-powered apps, voice assistants,
            and scalable full-stack solutions delivering seamless user
            experiences.
          </p>
        </div>

        <div className="about-card">
          <h3>Vision</h3>
          <p>
            To become a leader in AI-driven web technologies and contribute to
            shaping the next era of Web 3.0 & intelligent systems.
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .about-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1e293b, #0f2027);
          color: white;
          padding: 5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .about-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 1rem;
          color: #22d3ee;
        }

        .about-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          color: #e5e7eb;
          margin-bottom: 3rem;
          max-width: 750px;
        }

        .about-intro {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          max-width: 750px;
          line-height: 1.8;
          margin-top: 1rem;
          color: #e5e7eb;
        }

        .highlight {
          color: #22d3ee;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin-top: 3rem;
          width: 100%;
        }

        .about-card {
          background: #1e293b;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.6);
        }

        .about-card h3 {
          color: #22d3ee;
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .about-card p {
          color: #e5e7eb;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* 📱 Mobile (≤767px) */
        @media (max-width: 767px) {
          .about-section {
            padding: 3rem 1.2rem;
          }
          .about-grid {
            gap: 1.5rem;
          }
          .about-card {
            padding: 1.5rem;
          }
          .about-card h3 {
            font-size: 1.4rem;
          }
          .about-card p {
            font-size: 1rem;
          }
        }

        /* 💻 Tablet (768px–1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-section {
            padding: 4rem 2rem;
          }
          .about-grid {
            gap: 1.8rem;
          }
        }

        /* 🖥 Desktop (1024px+) */
        @media (min-width: 1024px) {
          .about-section {
            padding: 5rem 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
