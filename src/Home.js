import React from "react";

const Home = ({ user }) => {
  console.log(user, "prout");
  if (!user) {
    return (
      <div>
        <h2>Feet Heat</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Feet Heat</h2>
      <p>Welcome {user.email}</p>
    </div>
  );
};

export default Home;
