import React from "react";
import './App.css';
import SignIn from './login/SignIn';
import SignUp from "./login/SignUp";
import { Switch, Route } from 'react-router';
import Sidebar from "./sidebar/Sidebar";
import Feed from './feed/Feed';
import Timeline from "./news/Timeline";
import Notifications from "./notification/Notifications";
import Container from './container/Container'

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
        <Container>
          <Route path="/explore" >
            <Sidebar />
            <Timeline />
          </Route>
          <Route path="/home" >
            <Sidebar />
            <Feed />
            {/* <Notifications/> */}

            {/* <Timeline/> */}
          </Route>
        </Container>

      </Switch>

    </>
  );
}

export default App;
