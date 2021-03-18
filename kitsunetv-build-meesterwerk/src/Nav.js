import React, { useState, useEffect } from "react";
import "./Nav.css";

/* Nav transition animation*/
function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () =>{
    if(window.scrollY > 100)
    {
        handleShow(true);
    }
    else
    {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener("scroll", transitionNavBar);
}, []);

/* Nav */

    return <div className="nav">
        <div className={`nav ${show && "nav_dark"}`}>
         <div className="nav_contents">
             <img className="nav_logo" src="../Img/logo/Asset2WithoutText.svg" alt=""/>
             <img className="nav_avatar" src="../Img/icons/kitty_icon.svg" alt=""/>
         </div>
        </div>
    </div>;
    
}

export default Nav;
