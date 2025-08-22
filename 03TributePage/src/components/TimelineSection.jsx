import React from "react";

const timeline = [
  { year: 1935, event: "Born in Govindpura, Punjab (now in Pakistan)" },
  { year: 1958, event: "Gold Medal, Commonwealth Games (440 yards)" },
  { year: 1960, event: "Fourth place in 400m final, Rome Olympics" },
  { year: 1962, event: "Double Gold, Asian Games (400m, 4x400m relay)" },
  { year: 2013, event: "Life story featured in film 'Bhaag Milkha Bhaag'" }
];

export default function TimelineSection() {
  return (
    <section id="timeline" style={{ padding: "2em 1em", background: "#f9fafb" }}>
      <h2 style={{ color: "#ea580c" }}>Timeline of Achievements</h2>
      <ul style={{ listStyle: "none", maxWidth: 500, margin: "2em auto 0", padding: 0 }}>
        {timeline.map((item, i) => (
          <li key={i} style={{ margin: "1.2em 0", borderLeft: "3px solid #ea580c", paddingLeft: 14 }}>
            <strong>{item.year}</strong>: {item.event}
          </li>
        ))}
      </ul>
    </section>
  );
}
