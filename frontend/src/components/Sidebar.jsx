import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Create", path: "/create" },
    { name: "My Events", path: "/myevents" },
    { name: "Notifications", path: "/notifications" },
    { name: "Login", path: "/login" }
  ];

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">⚡ EventHub</h2>

      <div className="menu">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;