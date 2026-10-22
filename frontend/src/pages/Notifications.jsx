import { useState } from "react";

// ✅ DEFAULT NOTIFICATIONS
const defaultNotifications = [
  {
    id: 1,
    icon: "🎉",
    title: "Event Created Successfully",
    message: "Your event 'WebDev BootCamp' has been successfully created and published to the event board.",
    time: "10 mins ago",
    type: "success"
  },
  {
    id: 2,
    icon: "📢",
    title: "New Hackathon Announced",
    message: "Registration for the annual 'Hackathon 2026' is now officially open. Register your team of 4 to secure a spot.",
    time: "2 hours ago",
    type: "info"
  },
  {
    id: 3,
    icon: "🔥",
    title: "AI Workshop Seats Filling Fast",
    message: "Less than 10 seats remaining for the AI & Machine Learning Workshop. Register now to avoid missing out.",
    time: "5 hours ago",
    type: "warning"
  },
  {
    id: 4,
    icon: "🏆",
    title: "Winners Announced: Speed Coding",
    message: "The rankings for the Speed Coding Arena are live. Congratulations to the top 3 algorithmic solvers!",
    time: "1 day ago",
    type: "success"
  },
  {
    id: 5,
    icon: "⚙️",
    title: "System Update Completed",
    message: "EventHub security patches and performance optimization upgrades have been completed successfully.",
    time: "2 days ago",
    type: "system"
  },
  {
    id: 6,
    icon: "📅",
    title: "Reminder: Cultural Fusion Night",
    message: "The annual Cultural Night entry passes are available at the student activity desk. Gates open at 6 PM.",
    time: "3 days ago",
    type: "info"
  },
  {
    id: 7,
    icon: "💡",
    title: "Arts & Culture Filter Added",
    message: "You can now filter and create events in the new 'Arts & Culture' category. Discover creative showcases!",
    time: "4 days ago",
    type: "info"
  }
];

function Notifications() {
  const [notifications] = useState(defaultNotifications);

  return (
    <div className="page" style={{ maxWidth: "700px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#f8fafc" }}>Notifications</h1>
        <span style={{ fontSize: "0.95rem", color: "#00f5d4", fontWeight: "600" }}>Mark all as read</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {notifications.map((note) => (
          <div 
            key={note.id}
            style={{
              display: "flex",
              gap: "20px",
              background: "rgba(30, 41, 59, 0.45)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              padding: "20px",
              alignItems: "flex-start",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(5px)";
              e.currentTarget.style.borderColor = "rgba(0, 245, 212, 0.3)";
              e.currentTarget.style.background = "rgba(30, 41, 59, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.background = "rgba(30, 41, 59, 0.45)";
            }}
          >
            {/* Icon Block */}
            <div style={{
              fontSize: "1.5rem",
              background: note.type === "success" ? "rgba(34, 197, 94, 0.12)" : note.type === "warning" ? "rgba(234, 179, 8, 0.12)" : "rgba(59, 130, 246, 0.12)",
              padding: "12px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "48px",
              height: "48px"
            }}>
              {note.icon}
            </div>

            {/* Info Block */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#f1f5f9" }}>
                  {note.title}
                </h3>
                <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: "500" }}>
                  {note.time}
                </span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: "1.5" }}>
                {note.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;