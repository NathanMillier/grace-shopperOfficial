import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const SingleProductPage = () => {
  return (
    <div className="singleProdCont">
      <Navbar />
      <Announcement />
      <div className="singProdWrapper">
        <div className="singProdImgCont">
          <img
            src="https://s3.amazonaws.com/nikeinc/assets/86967/Nike-News-AJIV-Bred-6_hd_1600.jpg?1555005369"
            alt="Nike Air Jordan 4 Retro Bread"
          ></img>
        </div>
        <div className="singProdInfoCont">
          <h1>NIKE AIR JORDAN 4 RETRO</h1>
          <div className="singProdDesc">
            The Air Jordan IV was MJ's first signature model to take flight.
            Complete with never before seen “Wings” acting as lace locks and an
            unforgettable color scheme, the silhouette now returns in its truest
            form. Nodding to its 1989 debut, the new Air Jordan IV features
            iconic Nike Air branding on both the heel and outsole.
          </div>

          <div id="price">$450</div>

          <div className="addCont">
            <div className="amountCont">
              {/* <Remove />

              <Add /> */}
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
