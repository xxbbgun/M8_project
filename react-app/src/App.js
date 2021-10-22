import React from "react";
import './App.css';
import SignIn from './login/SignIn';
import SignUp from "./login/SignUp";
import { Switch, Route } from 'react-router';
import Sidebar from "./sidebar/Sidebar";
import Feed from './feed/Feed';
import Timeline from "./news/Timeline";

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
        <Route path="/explore" >
        <Sidebar />
        <Timeline/>
        </Route>
        <Route path="/" >
           <Sidebar />
          {/* <Feed />  */}
          {/* <Timeline/> */}
        </Route>
      </Switch>

    </>
  );
}

export default App;
