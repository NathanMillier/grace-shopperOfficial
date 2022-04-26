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
          <div className="singProdfilterCont">
            <div className="singProdfilter">
              <h3>Size</h3>
              <select>
                <option disabled>Size</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <h3>Quantity</h3>
              <select>
                <option disabled>Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
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
