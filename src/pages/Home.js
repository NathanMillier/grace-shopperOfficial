import React from "react";
import Navbar from "../components/Navbar";

const Home = ({ user }) => {
  if (!user) {
    return <div></div>;
  }
  return (
    <div>
      <Navbar />
      <p>Welcome {user.email}</p>
    </div>
  );
};

export default Home;
