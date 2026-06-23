import { useEffect, useState } from "react";
import API from "../api";

function Events() {
  const [events, setEvents] = useState([]);

  // ✅ DEFAULT EVENTS
  const defaultEvents = [
    {
      _id: "1",
      title: "Hackathon 2026",
      date: "2026-07-10",
      description: "24-hour coding challenge"
    },
    {
      _id: "2",
      title: "AI Workshop",
      date: "2026-07-15",
      description: "Hands-on AI tools training"
    },
    {
      _id: "3",
      title: "Cultural Fest",
      date: "2026-08-01",
      description: "Music, dance & fun"
    }
  ];

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
      <h1>All Events</h1>

      <div className="cards">
        {events.map(e => (
          <div className="card" key={e._id}>
            <h2>{e.title}</h2>
            <p>📅 {e.date}</p>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;