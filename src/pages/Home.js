import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = ({ user }) => {
  if (!user) {
    return <div></div>;
  }
  return (
    <div>
      <Announcement />
      <Navbar />
      <p>Welcome {user.email}</p>
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
