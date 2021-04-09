import React from "react";
import "./NavBar.css";
import logoaleia from "../../assets/logoaleia.png";
import BurgerMenu from "../../assets/BurgerMenu.png";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logoaleia} alt="logo" className="logo" />
        <img src={BurgerMenu} alt="menu" className="Burger-menu" />
        <div className="navbar-menu">
          <div className="navbar-left">
            <a href="#home">About us</a>
            <a href="#about">Services</a>
            <a href="#projects">Carreres</a>
            <a href="#contact">Functions</a>
          </div>
          <div className="navbar-option">
            <button>Contact us</button>
            <a href="#">FR</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
