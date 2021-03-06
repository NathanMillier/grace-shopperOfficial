import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Payment,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";

function Footer() {
  return (
    <div className="footerCont">
      <div className="footerLeft">
        <a href="/">
          <h1>Feet Heat</h1>
        </a>

        <div className="footerDesc">
          <p>
            Serving the latest and hottest shoe brands on the market Copyright ©
            2022 Feat Heat LTD. All Rights Reserved.
          </p>
          <p>Designed by Team Feet Heat</p>
        </div>
        <div className="socialCont">
          <div className="socialIcon">
            <Facebook />
          </div>
          <div className="socialIcon">
            <Twitter />
          </div>
          <div className="socialIcon">
            <Instagram />
          </div>
        </div>
      </div>
      <div className="footerCenter">
        <div id="title">Useful Links</div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Cart">Cart</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/Login">My Account</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
        </ul>
      </div>
      <div className="footerRight">
        <div id="title">Connect With Us</div>
        <div className="contactItem">
          <Room style={{ marginRight: "10px" }} />
          Address
        </div>
        <div className="contactItem">
          <Phone style={{ marginRight: "10px" }} />
          904-123-456
        </div>
        <div className="contactItem">
          <MailOutline style={{ marginRight: "10px" }} />
          ContactUs@FeetHeat.com
        </div>
        <div className="contactItem">
          <Payment style={{ marginRight: "10px" }} />
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
