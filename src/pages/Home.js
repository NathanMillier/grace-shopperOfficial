import React from "react";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = ({ user }) => {
  if (!user) {
    return (
      <div>
        <Slider />
      </div>
    );
  }
  return (
    <div>
      <p>Welcome back, {user.email}!</p>
      <Slider />
    </div>
  );
};

export default Home;
