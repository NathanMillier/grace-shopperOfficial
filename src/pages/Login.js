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
    <div className="loginCont">
      <div className="loginCard">
        <h2>SIGN IN</h2>
        <form onSubmit={handleLogin}>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button type="submit">LOGIN</button>
          <div id="link">FORGOT YOUR PASSWORD?</div>
          <div id="link">CREATE A NEW ACCOUNT</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
