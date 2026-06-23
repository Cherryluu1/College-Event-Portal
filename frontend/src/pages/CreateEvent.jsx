import { useState } from "react";
import API from "../api";

function CreateEvent() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    description: ""
  });

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    await API.post("/events", {
      ...event,
      createdBy: user.email
    });

    alert("Event Created");
  };

  return (
    <div className="page">
      <h1>Create Event</h1>

      <input placeholder="Title" onChange={e => setEvent({...event, title: e.target.value})} />
      <input type="date" onChange={e => setEvent({...event, date: e.target.value})} />
      <textarea placeholder="Description" onChange={e => setEvent({...event, description: e.target.value})} />

      <button onClick={handleSubmit}>Create</button>
    </div>
  );
}

export default CreateEvent;