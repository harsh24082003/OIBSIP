import React from "react";

export default function HeroSection() {
  return (
    <section id="hero" style={{
      background: "#fff4e0", padding: "3em 1em", textAlign: "center"
    }}>
      <img
        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?fit=crop&w=400&q=80"
        alt="Milkha Singh"
        style={{ borderRadius: "100%", width: 180, boxShadow: "0 4px 12px #ccc", marginBottom: 20 }}
      />
      <h1 style={{ fontSize: "2.5em", color: "#bf360c" }}>Milkha Singh</h1>
      <p style={{ fontStyle: "italic", color: "#555" }}>
        "The Flying Sikh" &mdash; An icon of Indian athleticism and willpower.
      </p>
    </section>
  );
}
