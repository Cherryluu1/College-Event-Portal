import { useEffect, useState } from "react";
import API from "../api";

function MyEvents() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user?.email || "demo@gmail.com";

    const defaultMyEvents = [
      {
        _id: "101",
        title: "My Coding Contest",
        description: "An algorithm and data-structure focused practice coding competition designed for intermediate students.",
        createdBy: userEmail,
        date: "2026-08-20",
        category: "Competitions"
      },
      {
        _id: "102",
        title: "Poster Presentation",
        description: "Show your graphic designing and visualization skills under the theme 'Green Earth, Smart Future'.",
        createdBy: userEmail,
        date: "2026-08-25",
        category: "Competitions"
      },
      {
        _id: "103",
        title: "Tech Trivia Quiz",
        description: "A fast-paced trivia challenge spanning history of computing, tech giants, and software engineering concepts.",
        createdBy: userEmail,
        date: "2026-09-02",
        category: "Competitions"
      },
      {
        _id: "104",
        title: "UI/UX Design Sprints",
        description: "Redesigning daily applications for accessibility. Collaborate with teammates and build visual wireframes.",
        createdBy: userEmail,
        date: "2026-09-09",
        category: "Competitions"
      },
      {
        _id: "105",
        title: "Open Source Day",
        description: "Collaborative session to make pull requests to famous repositories. Mentoring provided by expert alumni.",
        createdBy: userEmail,
        date: "2026-09-16",
        category: "Competitions"
      },
      {
        _id: "106",
        title: "Web Security Capture The Flag",
        description: "Jeopardy-style CTF covering cryptography, reverse engineering, web vulnerabilities, and binary analysis.",
        createdBy: userEmail,
        date: "2026-09-23",
        category: "Competitions"
      }
    ];

    API.get("/events")
      .then(res => {
        const myEvents = res.data.filter(
          e => e.createdBy === userEmail
        );

        if (myEvents.length === 0) {
          setEvents(defaultMyEvents); // fallback
        } else {
          setEvents(myEvents);
        }
      })
      .catch(() => {
        setEvents(defaultMyEvents); // fallback on error
      });
  }, []);

  return (
    <div className="page">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#f8fafc" }}>My Registered Events</h1>
        <span style={{ fontSize: "0.95rem", color: "#94a3b8" }}>Total: {events.length}</span>
      </div>

      <div className="cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "25px", width: "100%" }}>
        {events.map(event => (
          <div 
            className="card" 
            key={event._id}
            onClick={() => setSelectedEvent(event)}
            style={{
              width: "auto",
              minHeight: "180px",
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
                  background: "rgba(0, 245, 212, 0.15)",
                  color: "#00f5d4",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textTransform: "uppercase"
                }}>
                  Registered
                </span>
              </div>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#f1f5f9", marginBottom: "8px" }}>
                {event.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: "1.5" }}>
                {event.description}
              </p>
            </div>
            
            <div style={{ marginTop: "15px", borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.8rem", color: "#64748b" }}>By: {event.createdBy ? event.createdBy.split("@")[0] : "You"}</span>
              <span style={{ fontSize: "0.85rem", color: "#38bdf8", fontWeight: "600" }}>Active 🟢</span>
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
            📅 Date: {selectedEvent.date || "TBD"}
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
              Registered Active
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

export default MyEvents;