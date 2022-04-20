import React from "react";

import { useNavigate } from "react-router-dom";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  error,
  setError,
  user,
  setUser,
  setToken,
}) => {
  const history = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      // console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        console.log("Logged in");
        history("/");
      }
      if (data.error) {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <label>Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <p>{error}</p>
    </div>
  );
};

export default Login;
