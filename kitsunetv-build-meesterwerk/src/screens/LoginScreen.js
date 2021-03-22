import React, { useState } from "react";
import CarouselKitsune from "../CarouselKitsune";
import "./LoginScreen.css";
import AboutKitsuneTV from "../AboutKitsuneTv";
import SignInScreen from "./SignInScreen";
import WatchEverywhere from "../WatchEverywhere";
import KitsuneTVQuestions from "../KitsuneTVQuestions";

function LoginScreen() {
  const [signIn] = useState(false);

  return (
    <div className="loginScreen container-fluid">
      {signIn ? (
        <SignInScreen />
      ) : (
        <>
          <div className="loginScreen_Background">
            <a
              href="/signIn"
              className="loginScreen_button btn_login"
            >
              Login
            </a>
            <CarouselKitsune />
          </div>
          <AboutKitsuneTV />
          <WatchEverywhere />
          <KitsuneTVQuestions />
          
        </>
      )}
      ;
    </div>
  );
}

export default LoginScreen;
