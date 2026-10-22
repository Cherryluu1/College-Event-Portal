import { Link } from "react-router-dom";
import "../App.css"; // make sure path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">⚡ EventHub</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/create">Create</Link>
        <Link to="/myevents">My Events</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;