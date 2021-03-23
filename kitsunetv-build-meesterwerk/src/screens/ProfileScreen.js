import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selectUser);
    return <div className="profileScreen">
        <Nav/>
        <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
            <img src="./Img/icons/kitty_icon.svg" alt=""></img>
            <div className="profileScreen_details">
                <h2>{user.email}</h2>
                <div className="profileScreen_Donations">
                    <a href="/" onClick={() => auth.signOut()} className="profileScreen_signOut">Uitloggen</a>
                </div>
            </div>
        </div> 

        </div>
    </div>
    
}

export default ProfileScreen
