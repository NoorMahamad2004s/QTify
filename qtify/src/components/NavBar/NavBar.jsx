

import React from "react";

import styles from "./NavBar.module.css";
import { Buttons } from "../Buttons/Buttons";
import Logo from "../../assets/BrandLogo.png";
import Search from "../Search/Search";
const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={Logo} alt="logo" width={67}/></div>
                 <Search search={"Search a song of your choice"}/>
                <Buttons children="Give Feedback"/>
            </nav>
        </>
  
  );
};

export default NavBar;