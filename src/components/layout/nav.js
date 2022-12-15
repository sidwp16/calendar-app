import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Calendar App
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
