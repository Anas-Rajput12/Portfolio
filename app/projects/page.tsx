"use client";
import React, { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section
        style={{
          minHeight: "100vh",
          padding: "60px 30px",
          background: "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "1.5rem", color: "#22d3ee" }}>Loading projects...</p>
      </section>
    );
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "60px 30px",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
        color: "white",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          textAlign: "center",
          color: "#22d3ee",
          marginBottom: "15px",
        }}
      >
        My Projects
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "50px",
        }}
      >
        A selection of professional, modern web applications showcasing AI,
        full-stack, and creative development.
      </p>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(145deg, #1e293b, #111827)",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 14px 30px rgba(0,0,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.6)";
            }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#22d3ee",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#cbd5e1",
                  lineHeight: "1.6",
                  marginBottom: "12px",
                }}
              >
                {project.description}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#a855f7",
                  marginBottom: "auto",
                }}
              >
                Tech: {project.tech.join(", ")}
              </p>

              {/* Buttons aligned bottom */}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px",
                    background: "#22d3ee",
                    color: "#0f172a",
                    borderRadius: "8px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#06b6d4")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#22d3ee")
                  }
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px",
                    background: "#334155",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#475569")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#334155")
                  }
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Media queries for grid layout */}
      <style>
        {`
          .projects-grid {
            display: grid;
            grid-template-columns: 1fr; /* Mobile default */
            gap: 25px;
            max-width: 1200px;
            margin: 0 auto;
          }
          @media (min-width: 600px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (min-width: 900px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
