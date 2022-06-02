import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ({
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  token,
  setToken,
  error,
  setError,
}) => {
  const history = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(password);

    if (password !== confirm) {
      setError("Confirm password does not match original password");
      return;
    }

    const response = await fetch(`/api/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        email,
        password,
      }),
    });
    const info = await response.json();
    console.log(info);
    if (info.error) {
      setError(info.error.message);
    } else {
      setToken(info.token);
      localStorage.setItem("token", info.token);
      history("/");
    }
  };

  return (
    <div className="registerCont">
      <div className="registerCard">
        <h2>CREATE AN ACCOUNT</h2>
        <form onSubmit={(e) => handleRegister(e)}>
          <input
            required
            minLength=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            required
            type="password"
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <input
            required
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="confirm password"
          />
          <div className="registerAgreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>
          <button>LOGIN</button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Register;
