import React from "react";
import AllPopProducts from "../components/AllPopProducts";
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
        <Navbar />
        <Announcement />
        <Slider />
        <Categories />
        <AllPopProducts />
        <Newsletter />
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Announcement />
      <p>Welcome back, USERNAMEHERE!</p>
      <Slider />
      <Categories />
      <AllPopProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
