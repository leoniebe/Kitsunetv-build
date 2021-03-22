import React, { useState } from "react";
import CarouselKitsune from "../CarouselKitsune";
import "./LoginScreen.css";
import AboutKitsuneTV from "../AboutKitsuneTv";
import SignInScreen from "./SignInScreen";
import { useHistory } from "react-router-dom";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const history = useHistory();

  return (
    <div className="loginScreen">
      {signIn ? (
        <SignInScreen />
      ) : (
        <>
          <div className="loginScreen_Background">
            <a
            //   onclick={() => history.push('/signIn')}
              href="/signIn"
              className="loginScreen_button btn_login"
            >
              Loginss
            </a>
            <CarouselKitsune />
          </div>
          <AboutKitsuneTV />
        </>
      )}
      ;
    </div>
  );
}

export default LoginScreen;
