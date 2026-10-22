import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/users/login"
      : "http://localhost:5000/api/users/register";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", form.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
    }

    alert(data.message || "Success");
  };

  return (
    <div className="page" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div style={{
        background: "rgba(30, 41, 59, 0.7)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        padding: "40px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "25px"
      }}>
        {/* Modern Switch Buttons */}
        <div style={{
          display: "flex",
          background: "rgba(15, 23, 42, 0.4)",
          borderRadius: "8px",
          padding: "4px"
        }}>
          <button
            type="button"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: isLogin ? "#00f5d4" : "transparent",
              color: isLogin ? "#0f172a" : "#94a3b8",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: isLogin ? "0 4px 12px rgba(0, 245, 212, 0.2)" : "none"
            }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "none",
              background: !isLogin ? "#00f5d4" : "transparent",
              color: !isLogin ? "#0f172a" : "#94a3b8",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: !isLogin ? "0 4px 12px rgba(0, 245, 212, 0.2)" : "none"
            }}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{
            fontSize: "2.1rem",
            fontWeight: "800",
            background: "linear-gradient(90deg, #00f5d4, #ff00c8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "6px",
            letterSpacing: "-0.02em"
          }}>
            {isLogin ? "Welcome Back" : "Register"}
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
            {isLogin ? "Access your college events hub" : "Create an account to host & join fests"}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {!isLogin && (
            <div>
              <label style={{ fontSize: "0.8rem", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Name</label>
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  background: "rgba(15, 23, 42, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  marginTop: "6px",
                  fontSize: "0.95rem",
                  width: "100%",
                  boxSizing: "border-box"
                }}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>
          )}

          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Address</label>
            <input
              type="email"
              placeholder="you@college.edu"
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: "8px",
                marginTop: "6px",
                fontSize: "0.95rem",
                width: "100%",
                boxSizing: "border-box"
              }}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: "700", color: "#38bdf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: "8px",
                marginTop: "6px",
                fontSize: "0.95rem",
                width: "100%",
                boxSizing: "border-box"
              }}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          {/* Remember Me and Forgot Password Group */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "0.9rem", color: "#cbd5e1" }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: "16px",
                  height: "16px",
                  accentColor: "#00f5d4",
                  cursor: "pointer",
                  margin: 0
                }}
              />
              Remember Me
            </label>
            {isLogin && (
              <span style={{ fontSize: "0.85rem", color: "#38bdf8", cursor: "pointer", fontWeight: "600" }}>
                Forgot Password?
              </span>
            )}
          </div>

          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #00f5d4, #ff00c8)",
              color: "#0f172a",
              fontWeight: "800",
              fontSize: "1.05rem",
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginTop: "8px",
              boxShadow: "0 4px 15px rgba(0, 245, 212, 0.25)"
            }}
            onMouseEnter={(e) => { e.target.style.boxShadow = "0 6px 20px rgba(255, 0, 200, 0.4)"; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = "0 4px 15px rgba(0, 245, 212, 0.25)"; }}
          >
            {isLogin ? "Sign In" : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;