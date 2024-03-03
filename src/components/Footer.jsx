import React from "react";
import "./Footer.css";
import up from "./images/up.png";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-text">
          <p>Copright © 2023 by Codevk | All rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-alt" />
            <img src={up} className="uparrow" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
