import React, { useState } from "react";
import img from "./images/v3.png";
import "../App.css";
import c from './images/close.png'
import menu from './images/menu.png'
function Header() {
  const [isopen, setIspoen] = useState(true);
  const onIsopenClick = () => {
    console.log(isopen);
    setIspoen(!isopen);
  };

function Ball(){
  if(!Ball){
  document.body.style.backgroundImage="linear-gradient(to right,#784bf6,#3490fa)";
  }else{
  document.body.style.backgroundImage="";
  }
  Ball=!Ball;
}
// const h=document.getElementById("Hamburger");

// h.onclick = function(){
//   h.style.img.src={c};
// }


  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={img} alt="" className="logov" />
        </a>

        <div>
          <div className="hamburger" onClick={onIsopenClick}>
          
            <img className="ham-btn" onClick={onIsopenClick}  src={isopen ? c : menu}  alt="" />
          
          </div>
        </div>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about" className="active">About</a>
          <a href="#skills" className="active">Skills</a>
          <a href="#portfolio" className="active">Projects</a>
          <a href="#contact" className="active">Contact</a>
             



        </nav>
        <div className="container">
                <input id="checkbox" name="checkbox" type="checkbox" />
                <label className="label"  onClick={Ball}  htmlFor="checkbox">
                </label>
              </div>
      </header>
      {isopen ? (
        <div className="mobile-nav">
          <nav className="mobile-navbar">
            <a href="#home" className="mob-nav-li">
              Home
            </a>
            <a className="mob-nav-li" href="#about">About</a>
            <a className="mob-nav-li" href="#skills">Skills</a>
            <a className="mob-nav-li" href="#portfolio">Projects</a>
            <a className="mob-nav-li" href="#contact">Contact</a>
            <div className="container">
                <input id="checkbox" name="checkbox" type="checkbox" />
               
              </div>
          </nav>
              
        </div>
       ) : (
        ""
      )} 
    </>
  );
}

export default Header;
