import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { APIURL } from "./App";

const Register = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(password);

    if (password !== confirm) {
      setError("Confirm password does not match original password");
      return;
    }

    const resp = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const info = await resp.json();
    console.log(info);
    if (info.error) {
      setError(info.error.message);
    }

    setToken(info.data.token);
    localStorage.setItem("token", info.data.token);

    history.push("/");
  };

  return (
    <>
      <div className="registerCard">
        <h1>Register</h1>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            required
            minLength="3"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            minLength="8"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            required
            placeholder="Confirm password..."
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button type="submit">Register</button>
          <p>{error}</p>
        </form>
      </div>
    </>
  );
};

export default Register;
