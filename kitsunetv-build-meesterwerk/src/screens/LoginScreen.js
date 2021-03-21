import React, {useState} from "react";
import CarouselKitsune from "../CarouselKitsune";
import "./LoginScreen.css";
import AboutKitsuneTV from "../AboutKitsuneTv";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
  
    return <div className="loginScreen">
        {signIn ? (
            <SignInScreen />

        ) : (

            <>
            <div className="loginScreen_Background">
            <button onclick={() => setSignIn(true)} className="loginScreen_button btn_login">Login</button>
            <CarouselKitsune/>
            </div>
            <AboutKitsuneTV/>
            </>

        )};
            
\
            
    </div>
    
}

export default LoginScreen
