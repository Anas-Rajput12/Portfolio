"use client";
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Chatbot = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error(`Server returned status ${res.status}`);

      const data = await res.json();

      // Handle special navigation intents
      if (data.intent === "projects") {
        router.push("/projects");
      } else if (data.intent === "skills") {
        router.push("/skills");
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.reply || "No reply from server." },
        ]);
      }
    } catch (error: any) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `⚠️ Sorry, I couldn't process that request. ${error.message || ""}` },
      ]);
    }

    setInput("");
  };

  return (
    <div>
  {/* Floating Chat Icon */}
  {!isOpen && (
    <button
      onClick={() => setIsOpen(true)}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        color: "white",
        border: "none",
        borderRadius: "50%",
        padding: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <MessageCircle size={28} />
    </button>
  )}

  {/* Chat Window */}
  {isOpen && (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "24px",
        width: "80%", // default mobile size
        maxWidth: "420px", // large screen limit
        height: "60vh", // responsive height
        maxHeight: "500px",
        backgroundColor: "#1e293b",
        borderRadius: "20px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid #334155",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
          background: "linear-gradient(90deg, #334155, #1e293b)",
          borderBottom: "1px solid #334155",
        }}
      >
        <h3 style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>
          💬 My Chatbot
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: "none",
            border: "none",
            color: "#94a3b8",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "12px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              padding: "8px 12px",
              borderRadius: "16px",
              maxWidth: "80%",
              marginBottom: "8px",
              alignSelf:
                msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor:
                msg.sender === "user" ? "#06b6d4" : "#334155",
              color: msg.sender === "user" ? "white" : "#e2e8f0",
              wordBreak: "break-word",
              fontSize: "14px",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #334155",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px 12px",
            backgroundColor: "#1e293b",
            color: "white",
            border: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "0 16px",
            backgroundColor: "#06b6d4",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: 500,
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#3b82f6")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#06b6d4")
          }
        >
          Send
        </button>
      </div>
    </div>
  )}
</div>

  );
};

export default Chatbot;
