import { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  // ✅ DEFAULT NOTIFICATIONS
  const defaultNotifications = [
    "🎉 Event created successfully",
    "📢 New Hackathon announced",
    "🔥 Registration open for AI Workshop",
    "🏆 Winners announced for Coding Contest"
  ];

  useEffect(() => {
    // you can later connect backend here
    setNotifications(defaultNotifications);
  }, []);

  return (
    <div className="page">
      <h1>Notifications</h1>

      <div className="cards">
        {notifications.map((note, index) => (
          <div className="card" key={index}>
            <p>{note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;