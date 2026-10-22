import { useEffect, useState } from "react";
import API from "../api";

// ✅ DEFAULT EVENTS
const defaultEvents = [
  {
    _id: "1",
    title: "Hackathon 2026",
    date: "2026-07-10",
    category: "Technology",
    description: "A 24-hour intense coding challenge. Work in teams of 4 to design, build, and deploy a working application from scratch."
  },
  {
    _id: "2",
    title: "AI Workshop",
    date: "2026-07-15",
    category: "Workshops",
    description: "Hands-on training session covering prompt engineering, custom fine-tuning APIs, LLMs, and building conversational interfaces."
  },
  {
    _id: "3",
    title: "Cultural Fest",
    date: "2026-08-01",
    category: "Arts & Culture",
    description: "Our annual college cultural celebration featuring live music, rock bands, theater plays, choreographies, and food booths."
  },
  {
    _id: "4",
    title: "Robo Soccer League",
    date: "2026-08-08",
    category: "Technology",
    description: "Design custom wired or autonomous soccer bots. Team up, strategize, score, and compete in the ultimate robo-clash."
  },
  {
    _id: "5",
    title: "Cyber Capture The Flag",
    date: "2026-08-15",
    category: "Competitions",
    description: "Jeopardy-style cyber-security event testing skills in reverse engineering, binary exploitation, web vulnerabilities, and crypto."
  },
  {
    _id: "6",
    title: "Eco-Grid Hackathon",
    date: "2026-08-20",
    category: "Technology",
    description: "Solve urgent environmental issues with smart green IoT code systems. Winning prototypes receive hardware development kits."
  },
  {
    _id: "7",
    title: "Creative Art Showcase",
    date: "2026-08-24",
    category: "Arts & Culture",
    description: "Exhibition displaying hand-painted murals, abstract paintings, glass sculptures, and modern photography from creative minds."
  },
  {
    _id: "8",
    title: "Financial Trading Simulator",
    date: "2026-08-28",
    category: "Competitions",
    description: "Real-time mock stock market trading challenge. Pitch strategies to judges and maximize your virtual portfolio value."
  }
];

function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    API.get("/events")
      .then(res => {
        if (res.data.length === 0) {
          setEvents(defaultEvents); // fallback if empty
        } else {
          setEvents(res.data);
        }
      })
      .catch(() => {
        setEvents(defaultEvents); // fallback if error
      });
  }, []);

  return (
    <div className="page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#f8fafc" }}>All Events</h1>
        <span style={{ fontSize: "0.95rem", color: "#94a3b8" }}>Showing {events.length} events</span>
      </div>

      <div className="cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "25px", width: "100%" }}>
        {events.map(e => (
          <div 
            className="card" 
            key={e._id}
            onClick={() => setSelectedEvent(e)}
            style={{ 
              width: "auto", 
              minHeight: "220px", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              background: "rgba(30, 41, 59, 0.45)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              padding: "24px",
              cursor: "pointer"
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ 
                  background: e.category === "Technology" ? "rgba(56, 189, 248, 0.15)" : e.category === "Workshops" ? "rgba(168, 85, 247, 0.15)" : "rgba(244, 63, 94, 0.15)",
                  color: e.category === "Technology" ? "#38bdf8" : e.category === "Workshops" ? "#c084fc" : "#fb7185",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textTransform: "uppercase"
                }}>
                  {e.category || "General"}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#00f5d4", fontWeight: "600" }}>
                  📅 {e.date}
                </span>
              </div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>
                {e.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: "1.5" }}>
                {e.description}
              </p>
            </div>
            
            <div style={{ marginTop: "15px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Organizer: {e.createdBy ? e.createdBy.split("@")[0] : "Admin"}</span>
              <button 
                onClick={(ev) => { ev.stopPropagation(); setSelectedEvent(e); }}
                style={{ padding: "6px 12px", fontSize: "0.8rem", borderRadius: "6px", background: "rgba(0, 245, 212, 0.1)", color: "#00f5d4", border: "1px solid rgba(0, 245, 212, 0.2)" }}
              >
                Details
              </button>
            </div>
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
            📅 Date: {selectedEvent.date}
          </p>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "12px", fontWeight: "700" }}>About this Event</h3>
            <p style={{ color: "#94a3b8", lineHeight: "1.6", fontSize: "0.95rem" }}>
              {selectedEvent.description}
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
              Organizer: {selectedEvent.createdBy || "admin@eventhub.com"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;