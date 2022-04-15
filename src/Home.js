import React from "react";

const Home = ({ user, products }) => {
  return (
    <div>
      <p>TESSAasdT</p>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
