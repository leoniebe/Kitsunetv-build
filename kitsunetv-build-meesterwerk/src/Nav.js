import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

/* Nav transition animation*/
function Nav() {
const [show, handleShow] = useState(false);
const history = useHistory();

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

    return <div className="nav navbar-expand-lg">
        <div className={`nav ${show && "nav_dark"}`}>
         <div className="nav_contents">
             <img onClick={() => history.push("/")} className="nav_logo" src="../Img/logo/Asset2WithoutText.svg" alt=""/>
             <img onClick={() => history.push("/profile")} className="nav_avatar" src="../Img/icons/kitty_icon.svg" alt=""/>
         </div>
        </div>
    </div>;
    
}

export default Nav;
