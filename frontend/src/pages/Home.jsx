import { useState } from "react";

function Home() {
  const [active, setActive] = useState("trending");

  const data = {
    trending: [
      { title: "Hackathon 2026", desc: "24hr coding event" },
      { title: "AI Workshop", desc: "Learn AI tools" }
    ],
    upcoming: [
      { title: "Tech Fest", desc: "Biggest college fest" },
      { title: "Cultural Night", desc: "Dance & music" }
    ],
    competitions: [
      { title: "Coding Contest", desc: "Win prizes" },
      { title: "Poster Design", desc: "Creative minds" }
    ]
  };

  return (
    <div className="page">
      <h1>Home</h1>

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
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;