import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Admin = ({ products }) => {
  const [userss, setUserss] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const fetchAllUsers = async () => {
    const response = await fetch("http://localhost:3001/api/user/all", {});

    const data = await response.json();
    setUserss(data);
  };

  const updateProduct = async (e) => {
    const resp = await fetch(`http://localhost:3001/api/products`, {
      method: "PATCH",

      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });
    console.log("hit");
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <form id="myForm" onSubmit={updateProduct}>
        <select
          onChange={(e) => setCurrentProduct(e.target.value)}
          defaultValue={"Pick a Product"}
        >
          {products.map((p) => {
            return <option key={p.id}>{p.title}</option>;
          })}
        </select>
        <input
          placeholder="Change title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <input
          placeholder="Change description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button type="submit">Submit Changes</button>
      </form>
      {/* <div>
        {userss.map((u) => {
          return (
            <div key={u.id} id="card">
              <div>{u.id}</div>
              <div>{u.email}$</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Admin;
