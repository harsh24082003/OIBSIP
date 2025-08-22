import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#ea580c", color: "white", padding: "1.5em 0", textAlign: "center", marginTop: "2em"
    }}>
      &copy; {new Date().getFullYear()} Tribute to Milkha Singh &mdash; Inspired by The Flying Sikh’s Legacy
    </footer>
  );
}
