"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Only professional and catchy pages
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header
      style={{
        background: "linear-gradient(90deg, #0f172a, #1e293b, #0f172a)",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Logo / Brand */}
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "#22d3ee",
            cursor: "pointer",
            letterSpacing: "1px",
          }}
        >
          Anas<span style={{ color: "#a855f7" }}>Tech</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{ display: "flex", gap: "2rem" }}>
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                style={{
                  cursor: "pointer",
                  fontWeight: 500,
                  color: "white",
                  transition: "0.3s",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#22d3ee")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "white")
                }
              >
                {item}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "1.8rem",
              color: "#22d3ee",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: "#1e293b",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{
                cursor: "pointer",
                color: "white",
                fontWeight: 500,
                textDecoration: "none",
                fontSize: "1.1rem",
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#22d3ee")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "white")
              }
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
