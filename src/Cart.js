import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Cart = ({ addItemToCart, user, token, fetchUser }) => {
  const [total, setTotal] = useState(0);
  const handleCheckOut = (event) => {
    event.preventDefault();
  };

  const deleteCartItem = async (currentProduct) => {
    const response = await fetch("http://localhost:3001/api/order/deleteItem", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        orderId: user.cart.id,
        productId: currentProduct.id,
      }),
    });
    const data = await response.json();
    await fetchUser();
    console.log(data);
  };

  const decreaseQuantity = async (currentProduct) => {
    if (currentProduct.quantity > 1) {
      const response = await fetch(
        "http://localhost:3001/api/order/decreaseCartItem",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            orderId: user.cart.id,
            productId: currentProduct.id,
          }),
        }
      );
      const data = await response.json();
      await fetchUser();
      console.log(data);
    } else {
      deleteCartItem(currentProduct);
    }
  };

  const getOrderPrice = async (orderId) => {
    const response = await fetch("http://localhost:3001/api/order/orderPrice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        orderId,
      }),
    });
    const data = await response.json();
    console.log(data);
    let totalToAdd = 0;
    for (let i = 0; i < data.length; i++) {
      totalToAdd += data[i].price;
    }
    setTotal(totalToAdd);
  };

  useEffect(() => {}, [user.cart]);

  return (
    <div className="cart-container">
      {user
        ? user.cart.products.map((product) => {
            return (
              <div className="single-product-container" key={product.id}>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <h4>{product.quantity}</h4>
                <img src={product.imgurl} width="300"></img>
                <button onClick={() => addItemToCart(product)}>+</button>
                <button onClick={() => decreaseQuantity(product)}>-</button>
                <button onClick={() => deleteCartItem(product)}>
                  Remove from cart
                </button>
                <br></br>
              </div>
            );
          })
        : null}
      {/* {cartItems.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            <h4>{item.qty}</h4>
            <div>
              <button onClick={() => addItemToCart(item)}>+</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <button onClick={() => removeItemFromCart(item)}>
                Remove from cart
              </button>
            </div>
          </div>
        );
      })} */}

      <div className="checkout-container">
        <h3>total: </h3>
        <p>{total}</p>
        <button onClick={() => getOrderPrice(user.cart.id)}>Purchase</button>
      </div>
    </div>
  );
};
export default Cart;
