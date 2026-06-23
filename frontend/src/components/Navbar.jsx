import React from "react";
import "../App.css"; // make sure path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">⚡ EventHub</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/create">Create</a>
        <a href="/myevents">My Events</a>
        <a href="/notifications">Notifications</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;