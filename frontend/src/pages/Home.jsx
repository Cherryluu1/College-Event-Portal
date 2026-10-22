import { useState } from "react";

function Home() {
  const [active, setActive] = useState("trending");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const data = {
    trending: [
      { title: "Hackathon 2026", desc: "24-hour coding challenge. Work in teams of 4 to solve real-world problems and win prizes!", date: "2026-07-10", category: "Technology" },
      { title: "AI & ML Workshop", desc: "Learn hands-on AI tools, prompt engineering, and building LLM apps.", date: "2026-07-15", category: "Workshops" },
      { title: "WebDev BootCamp", desc: "Master modern frontend libraries, Vite, React, and backend state integration.", date: "2026-07-22", category: "Workshops" },
      { title: "Cyber Security CTF", desc: "Jeopardy-style web exploit and network analysis capture-the-flag.", date: "2026-07-29", category: "Competitions" },
      { title: "Game Dev Jam", desc: "Create a playable desktop/web game in 48 hours using Unity or Godot.", date: "2026-08-05", category: "Competitions" },
      { title: "UI/UX Design Dash", desc: "Sprint-based mobile app design and user flow presentation challenge.", date: "2026-08-12", category: "Competitions" }
    ],
    upcoming: [
      { title: "Tech Fest 2026", desc: "The biggest annual inter-college technology festival. Workshops, keynotes, and prizes.", date: "2026-09-05", category: "Technology" },
      { title: "Cultural Fusion Night", desc: "A colorful night of dance, acoustic music performances, and visual art showcase.", date: "2026-09-12", category: "Arts & Culture" },
      { title: "Cloud Computing Summit", desc: "Guest lectures from AWS, Google Cloud, and Azure experts on serverless apps.", date: "2026-09-18", category: "Technology" },
      { title: "Robotics Arena Clash", desc: "Design and build fighting bots. High-octane matches in a safety enclosure.", date: "2026-09-25", category: "Technology" },
      { title: "Data Science Seminar", desc: "Industrial application of neural networks and analytics in fintech and biotech.", date: "2026-10-02", category: "Technology" },
      { title: "Alumni Meet & Greet", desc: "Network with senior graduates working in top tier FAANG and unicorn tech firms.", date: "2026-10-10", category: "General" }
    ],
    competitions: [
      { title: "Speed Coding Arena", desc: "Algorithm-based competitive programming. Solve 5 problems under 60 minutes.", date: "2026-08-20", category: "Competitions" },
      { title: "Poster Design Contest", desc: "Creative graphic design competition under the theme 'Smart Cities & Green Grid'.", date: "2026-08-25", category: "Competitions" },
      { title: "Startup Pitch Battle", desc: "Present your business ideas to early-stage venture capitalists and get seed funding.", date: "2026-09-02", category: "Competitions" },
      { title: "Code Debug Marathon", desc: "Find, fix, and explain hidden vulnerabilities and logic bugs in pre-written codebases.", date: "2026-09-09", category: "Competitions" },
      { title: "Robo-Maze Runner", desc: "Program autonomous line-follower and maze-solving bots. Fast completion wins.", date: "2026-09-16", category: "Competitions" },
      { title: "Mock Parliament Debate", desc: "Compelling debates on modern technology ethics, privacy regulations, and social media.", date: "2026-09-23", category: "Competitions" }
    ]
  };

  return (
    <div className="page">
      {/* Premium Hero Banner */}
      <div style={{
        background: "linear-gradient(135deg, rgba(0, 245, 212, 0.1), rgba(255, 0, 200, 0.1))",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "15px",
        padding: "35px 25px",
        marginBottom: "30px",
        textAlign: "center",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(4px)"
      }}>
        <h1 style={{ 
          fontSize: "2.6rem", 
          fontWeight: "800", 
          background: "linear-gradient(90deg, #00f5d4, #ff00c8)", 
          WebkitBackgroundClip: "text", 
          WebkitTextFillColor: "transparent", 
          marginBottom: "12px",
          letterSpacing: "-0.02em"
        }}>
          Campus Event Portal
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.5" }}>
          Your one-stop destination for managing, discovering, and coordinating the most exciting hackathons, workshops, and competitions.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#e2e8f0" }}>Featured Events</h2>
        <span style={{ fontSize: "0.85rem", color: "#00f5d4", fontWeight: "600", textTransform: "uppercase" }}>Keep Exploring</span>
      </div>

      <div className="tabs">
        <button
          className={active === "trending" ? "active" : ""}
          onClick={() => setActive("trending")}
        >
          Trending
        </button>

        <button
          className={active === "upcoming" ? "active" : ""}
          onClick={() => setActive("upcoming")}
        >
          Upcoming
        </button>

        <button
          className={active === "competitions" ? "active" : ""}
          onClick={() => setActive("competitions")}
        >
          Competitions
        </button>
      </div>

      <div className="cards">
        {data[active].map((item, index) => (
          <div 
            className="card" 
            key={index}
            onClick={() => setSelectedEvent(item)}
            style={{ cursor: "pointer" }}
          >
            <h2>{item.title}</h2>
            <p style={{ marginTop: "10px", fontSize: "0.95rem", color: "#cbd5e1", lineHeight: "1.4" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Floating detail bar drawer */}
      {selectedEvent && (
        <div style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "400px",
          height: "100vh",
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.6)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "40px 30px",
          zIndex: 2000,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          boxSizing: "border-box",
          animation: "fadeInRight 0.3s forwards"
        }}>
          <button 
            onClick={() => setSelectedEvent(null)}
            style={{
              alignSelf: "flex-end",
              background: "rgba(255, 255, 255, 0.08)",
              color: "#e2e8f0",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.9rem"
            }}
          >
            ✕ Close
          </button>
          
          <span style={{
            background: selectedEvent.category === "Technology" ? "rgba(56, 189, 248, 0.15)" : selectedEvent.category === "Workshops" ? "rgba(168, 85, 247, 0.15)" : "rgba(244, 63, 94, 0.15)",
            color: selectedEvent.category === "Technology" ? "#38bdf8" : selectedEvent.category === "Workshops" ? "#c084fc" : "#fb7185",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: "700",
            alignSelf: "flex-start",
            textTransform: "uppercase"
          }}>
            {selectedEvent.category || "General"}
          </span>

          <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#f8fafc", lineHeight: "1.2" }}>
            {selectedEvent.title}
          </h2>

          <p style={{ color: "#00f5d4", fontWeight: "700", fontSize: "1.1rem" }}>
            📅 Date: {selectedEvent.date || "TBD"}
          </p>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "12px", fontWeight: "700" }}>About this Event</h3>
            <p style={{ color: "#94a3b8", lineHeight: "1.6", fontSize: "0.95rem" }}>
              {selectedEvent.desc}
            </p>
          </div>

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            <button 
              style={{
                background: "linear-gradient(90deg, #00f5d4, #ff00c8)",
                color: "#0f172a",
                fontWeight: "800",
                padding: "14px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1.05rem",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0, 245, 212, 0.3)"
              }}
              onClick={() => { alert(`Registered for ${selectedEvent.title}!`); }}
            >
              Register for Event
            </button>
            <span style={{ textAlign: "center", fontSize: "0.8rem", color: "#64748b" }}>
              Organizer: admin@eventhub.com
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;