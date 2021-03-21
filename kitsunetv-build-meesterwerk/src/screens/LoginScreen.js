import React from "react";
import CarouselKitsune from "../CarouselKitsune";
import "./LoginScreen.css";
import AboutKitsuneTV from "../AboutKitsuneTv.css";

function LoginScreen() {
  
    return <div className="loginScreen">
        <div className="loginScreen_Background">
            <button className="loginScreen_button btn_register">Registreer</button>
            <button className="loginScreen_button btn_login">Login</button>
            <CarouselKitsune/>
        </div>
        <AboutKitsuneTV/>
    </div>
    
}

export default LoginScreen
