import React from "react";

const quotes = [
  "Hard work, will power, and dedication. For a person with these qualities, sky is the limit.",
  "You can achieve anything in life. It just depends on how desperate you are to achieve it.",
  "The more you sweat in practice, the less you bleed in battle."
];

export default function QuotesSection() {
  return (
    <section id="quotes" style={{ padding: "2em 1em", background: "#fff4e0" }}>
      <h2 style={{ color: "#ea580c" }}>Inspirational Quotes</h2>
      <ul style={{ paddingLeft: 0, listStyle: "none", maxWidth: 500, margin: "2em auto" }}>
        {quotes.map((q, idx) => (
          <li key={idx} style={{ fontStyle: "italic", marginBottom: 24, borderLeft: "3px solid #ea580c", paddingLeft: 14 }}>
            “{q}”
          </li>
        ))}
      </ul>
    </section>
  );
}
