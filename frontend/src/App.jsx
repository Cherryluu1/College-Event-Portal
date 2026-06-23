import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"; // ✅ ADD THIS
import "./App.css";

import Home from "./pages/Home";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import MyEvents from "./pages/MyEvents";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ TOP NAVBAR */}

      <div className="layout">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/myevents" element={<MyEvents />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;