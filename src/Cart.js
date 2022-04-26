import React from "react";

const Cart = ({
  cartItems,
  setCartItems,
  addItemToCart,
  products,
  user,
  token,
  fetchUser,
}) => {
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

  const decreaseQuantity = (currentProduct) => {
    const exist = products.find((product) => product.id === currentProduct.id);
    // console.log(exist);
    // setCartItems([exist]);

    const newItems = [];
    cartItems.forEach((x) => {
      if (x.id === currentProduct.id) {
        if (x.qty > 1) {
          newItems.push({ ...exist, qty: x.qty - 1 });
        }
      } else {
        newItems.push(x);
      }
    });

    setCartItems(newItems);
  };

  //fetch the user.cart.products
  //map over products to render

  return (
    <div className="cart-container">
// <<<<<<< wellsBranch
//       {
//         //map through cartItems to display each item in a container
//       }
//       {cartItems.map((item) => {
//         return (
//           <div className="cart-item" key={item.id}>
//             <h3>{item.title}</h3>
//             <h4>{item.price}</h4>
//             <h4>{item.qty}</h4>
//             <div>
//               <button onClick={() => addItemToCart(item)}>+</button>
//               {/* <button onClick={() => removeItemFromCart(item)}>-</button> */}
//             </div>
//           </div>
//         );
//       })}
// =======
      {user
        ? user.cart.products.map((product) => {
            return (
              <div className="single-product-container" key={product.id}>
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <h4>{product.quantity}</h4>
                <img src={product.imgurl} width="300"></img>
                <button onClick={() => addItemToCart(product)}>+</button>
                <button>-</button>
                <button onClick={() => deleteCartItem(product)}>
                  Remove from cart
                </button>
                <br></br>
              </div>
            );
          })
        : null}
<<<<<<< HEAD
=======

>>>>>>> 29b17fc7c5935635e1dcef4029f373c8ce8bfdab

      <div className="checkout-container">
        <h3>total: </h3>
        <p>$100</p>
        <button>Purchase</button>
      </div>
    </div>
  );
};
export default Cart;
