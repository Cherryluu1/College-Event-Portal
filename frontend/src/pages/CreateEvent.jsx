import { useState } from "react";
import API from "../api";

function CreateEvent() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    description: "",
    category: "Technology"
  });

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    await API.post("/events", {
      ...event,
      createdBy: user?.email || "demo@gmail.com"
    });

    alert("Event Created Successfully!");
  };

  return (
    <div className="page" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div style={{
        background: "rgba(30, 41, 59, 0.65)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        padding: "40px",
        width: "100%",
        maxWidth: "520px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{
            fontSize: "2.1rem",
            fontWeight: "800",
            background: "linear-gradient(90deg, #00f5d4, #ff00c8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "8px",
            letterSpacing: "-0.01em"
          }}>
            Create New Event
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
            Fill in the details below to publish your event on the portal.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Event Title</label>
            <input 
              placeholder="e.g. Hackathon 2026" 
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: "8px",
                marginTop: "6px",
                fontSize: "1rem",
                width: "100%",
                boxSizing: "border-box"
              }}
              onChange={e => setEvent({...event, title: e.target.value})} 
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Event Date</label>
              <input 
                type="date" 
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  marginTop: "6px",
                  fontSize: "1rem",
                  width: "100%",
                  boxSizing: "border-box"
                }}
                onChange={e => setEvent({...event, date: e.target.value})} 
              />
            </div>

            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Category</label>
              <select 
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  marginTop: "6px",
                  fontSize: "1rem",
                  width: "100%",
                  boxSizing: "border-box",
                  height: "46px"
                }}
                value={event.category}
                onChange={e => setEvent({...event, category: e.target.value})}
              >
                <option value="Technology">Technology</option>
                <option value="Workshops">Workshops</option>
                <option value="Arts & Culture">Arts & Culture</option>
                <option value="Competitions">Competitions</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Event Description</label>
            <textarea 
              placeholder="Tell us what the event is about, rules, guidelines, prizes, etc..." 
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: "8px",
                marginTop: "6px",
                fontSize: "1rem",
                width: "100%",
                minHeight: "100px",
                resize: "vertical",
                boxSizing: "border-box"
              }}
              onChange={e => setEvent({...event, description: e.target.value})} 
            />
          </div>
        </div>

        <button 
          onClick={handleSubmit}
          style={{
            background: "linear-gradient(90deg, #00f5d4, #ff00c8)",
            color: "#0f172a",
            fontWeight: "800",
            fontSize: "1.05rem",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginTop: "8px",
            boxShadow: "0 4px 15px rgba(0, 245, 212, 0.25)"
          }}
          onMouseEnter={(e) => { e.target.style.boxShadow = "0 6px 20px rgba(255, 0, 200, 0.4)"; }}
          onMouseLeave={(e) => { e.target.style.boxShadow = "0 4px 15px rgba(0, 245, 212, 0.25)"; }}
        >
          Publish Event
        </button>
      </div>
    </div>
  );
}

export default CreateEvent;