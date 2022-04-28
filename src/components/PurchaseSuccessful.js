import React from "react";
import { Link } from "react-router-dom";

const PurchaseSuccessful = () => {
  return (
    <div className="purchasedCont">
      <div className="purchasedCard">
        <h2>Thank You For Your Purchase!</h2>
        <h3>Your Order is Being Processed!</h3>
        <div id="purchaseHomeButton">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccessful;
