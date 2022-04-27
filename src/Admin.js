import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Admin = ({ products, token, fetchProducts }) => {
  const [userss, setUserss] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  // if (!products[0]) {
  //   return <div></div>;
  // }

  const fetchAllUsers = async () => {
    const response = await fetch("http://localhost:3001/api/user/all");
    const data = await response.json();
    setUserss(data);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const resp = await fetch(`http://localhost:3001/api/products`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: currentProduct[0].id,
        title: title,
        description: description,
        imgurl: imgurl,
        stock: stock,
        price: price,
      }),
    });
    const info = await resp.json();
    fetchProducts();
  };

  const setCurrent = async (id) => {
    const resp = await fetch(`http://localhost:3001/api/products/${id}`);
    const info = await resp.json();
    setCurrentProduct(info);
  };

  useEffect(() => {
    fetchAllUsers();
    if (!products[0]) {
      return;
    }
    setCurrent(products[0].id);
  }, [products]);

  return (
    <div>
      <form id="myForm" onSubmit={updateProduct}>
        <select
          onChange={(e) => setCurrent(e.target.value)}
          defaultValue={"Pick a Product"}
          name="test"
        >
          {products.map((p) => {
            return (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            );
          })}
        </select>
        <input
          placeholder="Change title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Change description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Change Image Url"
          value={imgurl}
          onChange={(e) => setImgurl(e.target.value)}
        />
        <input
          placeholder="Change Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          placeholder="Change Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Submit Changes</button>
      </form>

      <div>
        ALL USERS
        {userss.map((u) => {
          return (
            <div key={u.id}>
              <div>{u.id}</div>
              <div>{u.email}$</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
