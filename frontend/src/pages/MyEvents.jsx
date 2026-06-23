import { useEffect, useState } from "react";

function MyEvents() {
  const [events, setEvents] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ DEFAULT MY EVENTS
  const defaultMyEvents = [
    {
      _id: "101",
      title: "My Coding Contest",
      description: "Practice coding competition",
      createdBy: user?.email || "demo@gmail.com"
    },
    {
      _id: "102",
      title: "Poster Presentation",
      description: "Show your creativity",
      createdBy: user?.email || "demo@gmail.com"
    }
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then(res => res.json())
      .then(data => {
        const myEvents = data.filter(
          e => e.createdBy === user?.email
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
      <h1>My Events</h1>

      <div className="cards">
        {events.map(event => (
          <div className="card" key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyEvents;