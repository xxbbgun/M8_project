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
        <Route path="/explore" >
          <Container>
            <Sidebar />
            <Timeline />
          </Container>
        </Route>
        <Route path="/Notifications" >
          <Container>
            <Sidebar />
            <Notifications />
          </Container>
        </Route>
        <Route path="/home" >
          <Container>
            <Sidebar />
            <Feed />
          </Container>
        </Route>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>

    </>
  );
}

export default App;
