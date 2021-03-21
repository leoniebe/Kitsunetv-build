import React from "react";
import "./SignInScreen.css";
import {Row, Col} from "react-bootstrap";

function SignInScreen() {

    const register = (e) => {
        e.preventDefault();
    }

    const signIn = (e) => 
    {
        e.preventDefault();
    }
    return (
        <div className='signInScreen'>
            <div className="signInScreen_Container">
                <Row>
                    <Col className="signInScreen_contentLeftside">
                    <img className="signInScreen_Logo" src="./img/logo/Asset2Yellow.svg" alt=""></img>
                    <img className="signInScreen_background" src="./img/Login/LoginScreen.jpg" alt=""></img>
                    </Col>
                    <Col className="signInScreen_contentRightside">
                        <form className="signInScreen_form">
                            <h1 className="signInScreen_Title">Inloggen</h1>
                            <p>E-mailadres</p>
                            <input class="signInScreen_input" placeholder="" type="email"/>
                            <p>Wachtwoord</p>
                            <input class="signInScreen_input" placeholder="" type="password"/>
                            <button className="signInScreen_Submit" onClick={signIn} type="submit"> LOG IN</button>
                        </form>
                        <div class="signInScreen_underline" align="center"></div>
                        <div>
                        <span className="signInScreen_grey" align="center"> Nog geen account?  </span>
                        <span className="signInScreen_link" onClick={register}> Meld je dan aan</span>
                        </div>
                    </Col>
                </Row>

            </div>

        </div>
    )
}

export default SignInScreen
