import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({
  addItemToCart,
  user,
  token,
  fetchUser,
  cartItems,
  setCartItems,
}) => {
  const [userTotal, setUserTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const history = useNavigate();

  const visitorCheckout = () => {
    history("/PurchaseSuccessful");
  };

  const handleCheckOut = async (orderId, creatorId) => {
    const response = await fetch(
      "http://localhost:3001/api/order/checkoutOrder",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orderId,
          creatorId,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    fetchUser();
    history("/PurchaseSuccessful");
  };

  // FUNCTIONS WHEN A USER IS LOGGED IN
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
    setUserTotal(totalToAdd);
  };
  //END OF FUNCTIONS WHEN USER IS LOGGED IN

  //FUNCTIONS WHEN USER IS NOT LOGGED IN
  const decreaseCartItemQuantity = (currentProduct) => {
    const exist = cartItems.find(
      (cartItem) => cartItem.id === currentProduct.id
    );
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.id !== currentProduct.id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) => {
          const tempItem = { ...exist, qty: cartItem.qty - 1 };
          tempItem.displayPrice = tempItem.price * tempItem.qty;
          return cartItem.id === currentProduct.id ? tempItem : cartItem;
        })
      );
    }
  };

  const removeCartItem = (currentProduct) => {
    const exist = cartItems.find(
      (cartItem) => cartItem.id === currentProduct.id
    );
    setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== currentProduct.id)
    );
  };
  //END OF FUNCTIONS WHEN USER IS NOT LOGGED IN

  useEffect(() => {
    if (user && user.cart) {
      getOrderPrice(user.cart.id);
    }
  }, [user]);

  useEffect(() => {
    let newTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
      newTotal = newTotal + cartItems[i].displayPrice;
    }
    setTotal(newTotal);
  }, [cartItems]);

  //WHEN USER IS LOGGED IN

  if (user) {
    if (!user.cart.products.length) {
      return <h1>YOUR CART IS EMPTY</h1>;
    } else {
      return (
        <>
          <div>
            {user.cart.products.map((product) => {
              return (
                <div className="single-product-container" key={product.id}>
                  <h1>{product.title}</h1>
                  <h4>
                    {product.price} for {product.quantity}
                  </h4>
                  <div className="img-buttons">
                    <img src={product.imgurl} width="200"></img>
                    <button
                      className="button2"
                      onClick={() => addItemToCart(product)}
                    >
                      +
                    </button>
                    <button
                      className="button2"
                      onClick={() => decreaseQuantity(product)}
                    >
                      -
                    </button>
                    <button
                      className="button2"
                      onClick={() => deleteCartItem(product)}
                    >
                      Remove from cart
                    </button>
                  </div>
                  <br></br>
                </div>
              );
            })}
          </div>

          <div className="checkout-container">
            <h3>Total: {userTotal}$ </h3>
            <button
              className="button2"
              onClick={() => handleCheckOut(user.cart.id, user.id)}
            >
              Purchase
            </button>
          </div>
        </>
      );
    }
  }
  //WHEN NO USER LOGGED IN
  else {
    if (!cartItems.length) {
      return <h1>YOUR CART IS EMPTY</h1>;
    } else {
      return (
        <>
          <div></div>
          {cartItems.map((item) => {
            return (
              <>
                <div className="single-product-container" key={item.id}>
                  <h1>{item.title}</h1>
                  <h4>{item.displayPrice}$</h4>
                  <h4>x {item.qty}</h4>

                  <div className="img-buttons">
                    <img src={item.imgurl} width="200"></img>
                    <button
                      className="button2"
                      onClick={() => addItemToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="button2"
                      onClick={() => decreaseCartItemQuantity(item)}
                    >
                      -
                    </button>
                    <button
                      className="button2"
                      onClick={() => removeCartItem(item)}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <div className="checkout-container">
            <h3>total: {total}$ </h3>
            <button className="button2" onClick={() => visitorCheckout()}>
              Purchase
            </button>
          </div>
        </>
      );
    }
  }

  {
    /* // return (
  //   <div className="cart-container"> */
  }
  //     {//IF A USER IS LOGGED IN
  //     user
  //       ? user.cart.products.map((product) => {
  //           return (
  //             <div className="single-product-container" key={product.id}>
  //               <h3>{product.title}</h3>
  //               <h4>{product.price}</h4>
  //               <h4>{product.quantity}</h4>
  //               <img src={product.imgurl} width="300"></img>
  //               <button onClick={() => addItemToCart(product)}>+</button>
  //               <button onClick={() => decreaseQuantity(product)}>-</button>
  //               <button onClick={() => deleteCartItem(product)}>
  //                 Remove from cart
  //               </button>
  //               <br></br>
  //             </div>
  //           );
  //         })
  //       : //IF NO USER LOGGED IN

  //         cartItems.map((item) => {
  //           return (
  //             <div className="single-product-container" key={item.id}>
  //               <h3>{item.title}</h3>
  //               <h4>{item.price}</h4>
  //               <h4>{item.qty}</h4>
  //               <div>
  //                 <button onClick={() => addItemToCart(item)}>+</button>
  //                 <button onClick={() => decreaseCartItemQuantity(item)}>
  //                   -
  //                 </button>
  //                 <button onClick={() => removeCartItem(item)}>
  //                   Remove from cart
  //                 </button>
  //               </div>
  //             </div>
  //           );
  //         })}

  //     <div className="checkout-container">
  //       <h3>total: </h3>
  //       <p>{total}</p>
  //       <button onClick={() => getOrderPrice(user.cart.id)}>Purchase</button>
  //     </div>
  //   </div>
  // );
};
export default Cart;
