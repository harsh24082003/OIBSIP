import React from "react";

const awards = [
  "Gold, 1958 Commonwealth Games (440 yards)",
  "Gold, Asian Games 1958 (400m, 200m)",
  "Gold, Asian Games 1962 (400m, 4x400m relay)",
  "Padma Shri, India's 4th highest civilian award"
];

export default function AwardsSection() {
  return (
    <section id="awards" style={{ padding: "2em 1em", background: "#f5f7fa" }}>
      <h2 style={{ color: "#ea580c" }}>Awards and Honors</h2>
      <ul style={{ maxWidth: 500, margin: "2em auto 0", padding: 0, listStyle: "inside square" }}>
        {awards.map((award, idx) => (
          <li key={idx} style={{ margin: "1em 0" }}>{award}</li>
        ))}
      </ul>
    </section>
  );
}
