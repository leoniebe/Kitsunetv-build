import React, {useRef} from "react";
import "./SignInScreen.css";
import {Row, Col} from "react-bootstrap";
import { auth } from "../firebase";

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch( (error) =>{
            alert(error.message);
        });

    };

    const signIn = (e) => 
    {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
            window.location = "/";
        })
        .catch((error) => alert (error.message)); 
    }
    return (
        <div className='signInScreen'>
            <div className="signInScreen_Container">
                <Row>
                    <Col className="signInScreen_contentLeftside">
                    <img className="signInScreen_Logo" src="./Img/logo/Asset2Yellow.svg" alt=""></img>
                    <img className="signInScreen_background" src="./Img/Login/RegisterScreen.jpg" alt=""></img>
                    </Col>
                    <Col className="signInScreen_contentRightside">
                        <form className="signInScreen_form">
                            <h1 className="signInScreen_Title">Inloggen</h1>
                            <p>E-mailadres</p>
                            <input ref={emailRef} className="signInScreen_input" placeholder="" type="email"/>
                            <p>Wachtwoord</p>
                            <input ref={passwordRef} className="signInScreen_input" placeholder="" type="password"/>
                            <button className="signInScreen_Submit" onClick={signIn} type="submit"> LOG IN</button>
                        </form>
                        <div className="signInScreen_underline" align="center"></div>
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
