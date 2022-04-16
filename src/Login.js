import React from "react";
<<<<<<< HEAD
const Login = ({ user }) => {
  return <div>Login</div>;
=======

const Login = ({
  token,
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  error,
  setError,
}) => {
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
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
>>>>>>> 7292303c49601094e2aa920fc432b40298976123
};

export default Login;
