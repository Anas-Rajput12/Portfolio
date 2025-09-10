"use client";

import React, { useState } from "react";
import { db } from "@/firebaseconfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setErrors({});
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error saving contact:", error);
    } finally {
      setLoading(false);
    }
  };

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
        Get in Touch
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#9ca3af",
          marginBottom: "3rem",
        }}
      >
        Have a project in mind or want to collaborate? Fill out the form below
        and I’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#1e293b",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          textAlign: "left",
        }}
      >
        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        {/* Subject */}
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        />
        {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}

        {/* Message */}
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          style={{
            width: "100%",
            padding: "0.8rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
{/* Social Links */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <a
          href="https://github.com/Anas-Rajput12"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22d3ee", fontSize: "2rem" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/muhammad-anas-qadri-a7608a2b7/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#22d3ee", fontSize: "2rem" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:muhammadanasqadri2@gmail.com"
          style={{ color: "#22d3ee", fontSize: "2rem" }}
        >
          <FaEnvelope />
        </a>
      </div>
        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#22d3ee",
            color: "#0f172a",
            padding: "0.9rem 2rem",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
            width: "100%",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success message */}
        {submitted && (
          <p style={{ marginTop: "1rem", color: "lightgreen" }}>
            Thanks For Contact Me! I will get back to you soon.
          </p>
        )}
      </form>

      
    </section>
  );
};

export default Contact;
