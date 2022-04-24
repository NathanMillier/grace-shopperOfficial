import React from "react";
import AllProducts from "../components/AllProducts";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const Home = ({ user }) => {
  //   if (!user) {
  //     return <div></div>;
  //   }
  return (
    <div>
      <Announcement />
      <Navbar />
      <p>Welcome {}</p>
      <Slider />
      <Categories />
      <AllProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
