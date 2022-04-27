import React from "react";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <div className="cartCont">
      <Navbar />
      <Announcement />
      <div className="cartWrapper">
        <h1>YOUR BAG</h1>
        <div className="cartTop">
          <button>CONTINUE SHOPPING</button>
          <div className="cartTopTxt">
            <div id="topTxt">Shopping Bag(2)</div>
            <div id="topTxt">Your Wishlist (0)</div>
          </div>
          <button id="topButton">CHECKOUT NOW</button>
        </div>
        <div className="cartBottom">
          <div className="cartInfo">
            <div className="cartProduct">
              <div className="cartProductDetail">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className="ProdDtetails">
                  <div className="prodName">
                    <b>Product:</b> ALLBIRDS TREE RUNNERS
                  </div>
                  <div className="prodId">
                    <b>ID:</b> 93813718293
                  </div>
                  <div className="prodColor" color="black">
                    BLK
                  </div>
                  <div className="prodSize">
                    <b>Size:</b> 10M
                  </div>
                </div>
              </div>
              <div className="priceDetail">
                <div className="ProdAmntCont">
                  <Add />
                  <Remove />
                  <h3 id="prodPrice">$ 30</h3>
                </div>
              </div>
            </div>
            <hr />
            <div className="cartProduct">
              <div className="cartProductDetail">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className="ProdDtetails">
                  <div className="prodName">
                    <b>Product:</b> ALLBIRDS TREE RUNNERS
                  </div>
                  <div className="prodId">
                    <b>ID:</b> 93813718293
                  </div>
                  <div className="prodColor" color="black">
                    BLK
                  </div>
                  <div className="prodSize">
                    <b>Size:</b> 10M
                  </div>
                </div>
              </div>
              <div className="priceDetail">
                <div className="ProdAmntCont">
                  <Add />
                  <Remove />
                  <h3 id="prodPrice">$ 30</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="cartSummary">
            <h2>ORDER SUMMARY</h2>
            <div className="cartSumItem">
              <div id="cartSumItemTxt">Subtotal</div>
              <div id="cartSumItemPrice">$ 560.00</div>
            </div>

            <div className="cartSumItem">
              <div id="cartSumItemTxt">Estimated Shipping</div>
              <div id="cartSumItemPrice">$ 33.50</div>
            </div>

            <div className="cartSumItem">
              <div id="cartSumItemTxt">Shipping Discount</div>
              <div id="cartSumItemPrice">$ -10.50</div>
            </div>

            <div className="cartSumItem" id="total">
              <div id="cartSumItemTxt">Total</div>
              <div id="cartSumItemPrice">$ 583.00</div>
            </div>
            <button id="bottomButton">CHECKOUT NOW</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
