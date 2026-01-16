import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/"}>İzlenecekler</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to={"/watched"}>İzlenenler</Link>
            </li>
            <li>
              <Link to={"/add"} className="btn">
                <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
