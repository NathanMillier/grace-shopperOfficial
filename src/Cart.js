import React from "react";

const Cart = ({ cartItems, setCartItems, addItemToCart }) => {
  const handleCheckOut = (event) => {
    event.preventDefault();
  };

  // const removeItemFromCart = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === currentProduct.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };

  return (
    <div className="cart-container">
      {
        //map through cartItems to display each item in a container
      }
      {cartItems.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
            <h4>{item.qty}</h4>
            <div>
              <button onClick={() => addItemToCart(item)}>+</button>
              <button onClick={() => removeItemFromCart(item)}>-</button>
            </div>
          </div>
        );
      })}

      <div className="checkout-container">
        <h3>total: </h3>
        <p>$100</p>
        <button>Purchase</button>
      </div>
    </div>
  );
};
export default Cart;
