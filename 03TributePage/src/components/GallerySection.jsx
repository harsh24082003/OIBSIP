import React from "react";

const images = [
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=400&q=80"
];

export default function GallerySection() {
  return (
    <section id="gallery" style={{ padding: "2em 0", background: "#fff" }}>
      <h2 style={{ color: "#ea580c" }}>Photo Gallery</h2>
      <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            style={{ width: 180, borderRadius: 8, boxShadow: "0 2px 8px #bbb" }}
          />
        ))}
      </div>
    </section>
  );
}
