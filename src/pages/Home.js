import React from "react";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";

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
