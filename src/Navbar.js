import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      NAV
      <div>
        <Link to="/" className="link">
          Hello
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
