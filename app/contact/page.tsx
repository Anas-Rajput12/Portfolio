"use client";

import React, { useState } from "react";
import { db } from "@/firebaseconfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

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
    <section id="contact" className="contact-section">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have a project in mind or want to collaborate? Fill out the form below
        and I’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        {errors.subject && <p className="error">{errors.subject}</p>}

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} />
        {errors.message && <p className="error">{errors.message}</p>}

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/Anas-Rajput12" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-anas-qadri-a7608a2b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:muhammadanasqadri2@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Submit button */}
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success message */}
        {submitted && <p className="success">Thanks for contacting me! I will get back to you soon.</p>}
      </form>

      {/* Contact Info */}
      <div className="contact-info">
        <div>
          <MdOutlineEmail size={22} />
          <a href="mailto:muhammadanasqadri2@gmail.com">muhammadanasqadri2@gmail.com</a>
        </div>
        <div>
          <BsTelephone size={22} />
          <span>(92) 313-3305615</span>
        </div>
      </div>

      {/* ✅ Responsive Styles */}
      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1e293b, #0f2027);
          color: white;
          padding: 5rem 2rem;
          text-align: center;
        }

        .contact-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: #22d3ee;
        }

        .contact-subtitle {
          font-size: 1.2rem;
          color: #9ca3af;
          margin-bottom: 3rem;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          background: #1e293b;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          text-align: left;
          display: flex;
          flex-direction: column;
        }

        .contact-form label {
          margin-bottom: 0.3rem;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 0.8rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          border: none;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.2rem;
          font-size: 2rem;
        }

        .social-links a {
          color: #22d3ee;
          transition: color 0.3s ease;
        }

        .social-links a:hover {
          color: white;
        }

        .contact-form button {
          background: #22d3ee;
          color: #0f172a;
          padding: 0.9rem 2rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          width: 100%;
        }

        .error {
          color: red;
          font-size: 0.9rem;
          margin-top: -0.5rem;
          margin-bottom: 0.8rem;
        }

        .success {
          margin-top: 1rem;
          color: lightgreen;
        }

        .contact-info {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
          font-size: 1rem;
        }

        .contact-info div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* ✅ Responsive Fixes */
        @media (max-width: 767px) {
          .contact-title {
            font-size: 2.2rem;
          }
          .contact-form {
            padding: 2.5rem;
          }
          .social-links {
            gap: 1.5rem;
            font-size: 1.6rem;
          }
          .contact-info {
            flex-direction: column;
            gap: 1.2rem;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
