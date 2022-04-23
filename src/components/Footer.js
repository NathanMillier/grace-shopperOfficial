import React from "react";

function Footer() {
  return (
    <div className="footerCont">
      <div className="footerLeft">
        <h1>Feet Heat</h1>
        <div className="footerDesc">
          <p>
            Serving the latest and hottest shoe brands on the market Copyright ©
            2022 Feat Heat LTD. All Rights Reserved.
          </p>
          <p>Designed by APx</p>
        </div>
        <div className="socialCont">
          <div className="socialIcon">{/* <Facebook /> */}</div>
          <div className="socialIcon">{/* <Twitter /> */}</div>
          <div className="socialIcon">{/* <Instagram /> */}</div>
        </div>
      </div>
      <div className="footerCenter">
        <div id="title">Useful Links</div>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Categories</li>
          <li>My Account</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footerRight">
        <div id="title">Connect With Us</div>
        <div className="contactItem">
          {/* <Room style={{ marginRight: "10px" }} /> */}
          Address
        </div>
        <div className="contactItem">
          {/* <Phone style={{ marginRight: "10px" }} /> */}
          904-123-456
        </div>
        <div className="contactItem">
          {/* <MailOutline style={{ marginRight: "10px" }} /> */}
          ContactUs@FeetHeat.com
        </div>
        <div className="contactItem">
          {/* <Payment style={{ marginRight: "10px" }} /> */}
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
