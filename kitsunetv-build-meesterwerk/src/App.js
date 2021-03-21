import React, { useEffect } from  "react";
import  "./App.css";
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux"; 
import { login, logout, selectUser } from "./features/userSlice";
import SignInScreen from "./screens/SignInScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
        //logged in
      } else {
        //logout
        dispatch(logout);
      }
    })

     return unsubscribe;
  },);

  return (
    <div className="app">
      <Router> 
        {!user ? (
          <SignInScreen />
        ) : (
        <Switch>
          <Route exact path="/">
          <HomeScreen />
          </Route>
      
        </Switch>
        )}
    </Router>
    </div>
  );
}

export default App;
