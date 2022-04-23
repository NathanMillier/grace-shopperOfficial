import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Home = ({ user }) => {
  if (!user) {
    return <div></div>;
  }
  return (
    <div>
      <Announcement />
      <Navbar />
      <p>Welcome {user.email}</p>
    </div>
  );
};

export default Home;
