import React from "react";

const TributeMilkhaSingh = () => {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif", background: "#f8fafc", borderRadius: 10, padding: 24, boxShadow: "0 2px 12px #bbb" }}>
      <h1 style={{ color: "#ea580c", marginBottom: 12 }}>Milkha Singh</h1>
      <h2 style={{ fontWeight: "normal", marginTop: 0 }}>The Flying Sikh (1929–2021)</h2>
      <img
        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?fit=crop&w=500&q=80"
        alt="Milkha Singh"
        style={{ width: "100%", borderRadius: 8, marginBottom: 16 }}
      />
      <blockquote style={{ fontStyle: "italic", color: "#656565", borderLeft: "4px solid #ea580c", margin: "18px 0", paddingLeft: 14 }}>
        “You can achieve anything in life. It just depends on how desperate you are to achieve it.”
      </blockquote>
      <p>
        <b>Milkha Singh</b> was one of India’s greatest athletes: an Olympic sprinter and a legendary sportsman whose story inspired the movie <i>Bhaag Milkha Bhaag</i>.
        He overcame immense challenges as a child during the Partition, joined the Indian Army, and won gold medals at the Asian and Commonwealth Games, representing India in three Olympics.
      </p>
      <h3 style={{ marginTop: 24, color: "#ea580c" }}>Key Achievements</h3>
      <ul>
        <li style={{ marginBottom: 8 }}>
          Gold Medal, 1958 Commonwealth Games (440 yards) – First Indian male to win an individual athletics gold at the Commonwealth Games
        </li>
        <li style={{ marginBottom: 8 }}>Multiple Golds at Asian Games (1958, 1962)</li>
        <li style={{ marginBottom: 8 }}>Represented India in 1956, 1960, 1964 Olympics</li>
        <li>Fourth in 400m final at 1960 Rome Olympics, setting a national record</li>
      </ul>
      <p style={{ marginTop: 22, fontWeight: "bold" }}>
        His legacy continues to inspire generations of Indian athletes.
      </p>
    </div>
  );
};

export default TributeMilkhaSingh;
