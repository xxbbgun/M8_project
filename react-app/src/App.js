import React from "react";
import './App.css';
import SignIn from './login/SignIn';
import SignUp from "./login/SignUp";
import { Switch, Route } from 'react-router';
function App() {
  return (
    <>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up" >
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
