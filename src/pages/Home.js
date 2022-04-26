import React from "react";
import Slider from "../components/Slider";

const Home = ({ user }) => {
  if (!user) {
    return <div></div>;
  }
  return (
    <div>
      {/* <p>Welcome {user}</p> */}
      <Slider />
    </div>
  );
};

export default Home;
