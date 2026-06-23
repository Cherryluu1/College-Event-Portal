import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/login"
      : "http://localhost:5000/api/register";

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
}

alert(data.message);
    alert(data.message || "Success");
  };

  return (
    <div className="page">
      <div className="auth-card">

        {/* 🔘 BUTTON SWITCH */}
        <div className="auth-switch">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <h1>{isLogin ? "Login" : "Register"}</h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          )}

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;