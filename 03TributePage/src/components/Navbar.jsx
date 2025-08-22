import React from "react";

export default function Navbar() {
  return (
    <nav style={{ background: "#ea580c", padding: "1em 0", color: "white", position:'sticky', top:2 }}>
      <ul style={{ display: "flex", gap: "2em", listStyle: "none", justifyContent: "center", margin: 0 }}>
        <li><a href="#hero" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#bio" style={{ color: "white", textDecoration: "none" }}>Biography</a></li>
        <li><a href="#timeline" style={{ color: "white", textDecoration: "none" }}>Timeline</a></li>
        <li><a href="#gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</a></li>
        <li><a href="#awards" style={{ color: "white", textDecoration: "none" }}>Awards</a></li>
        <li><a href="#quotes" style={{ color: "white", textDecoration: "none" }}>Quotes</a></li>
      </ul>
    </nav>
  );
}
