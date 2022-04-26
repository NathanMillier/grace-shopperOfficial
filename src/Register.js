// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Register = ({
//   email,
//   setEmail,
//   password,
//   setPassword,
//   confirm,
//   setConfirm,
//   token,
//   setToken,
//   error,
//   setError,
// }) => {
//   const history = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     console.log(password);

//     if (password !== confirm) {
//       setError("Confirm password does not match original password");
//       return;
//     }

//     const response = await fetch(`http://localhost:3001/api/user/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },

//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     const info = await response.json();
//     console.log(info);
//     if (info.error) {
//       setError(info.error.message);
//     } else {
//       setToken(info.token);
//       localStorage.setItem("token", info.token);
//       history("/");
//     }
//   };

//   return (
//     <>
//       <div className="registerCard">
//         <h1>Register</h1>
//         <form onSubmit={(e) => handleRegister(e)}>
//           <input
//             required
//             minLength=""
//             placeholder="Enter email..."
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             required
//             type="password"
//             minLength="8"
//             placeholder="Enter password..."
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             required
//             type="password"
//             placeholder="Confirm password..."
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//           />
//           <button type="submit">Register</button>
//         </form>
//         <p>{error}</p>
//       </div>
//     </>
//   );
// };

// export default Register;
