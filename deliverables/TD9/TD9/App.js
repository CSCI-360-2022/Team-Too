import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from "./components/User";
import Main from "./pages/Main";
import Event from "./pages/Event";

import { withAuthenticator } from "@aws-amplify/ui-react";
import EventList from "./pages/EventList";
import Cart from "./pages/Cart";
import EventNavBar from "./components/EventNavBar";

export default function App() {
  return (
    <Router>
      <EventNavBar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/eventlist">
            <EventList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}