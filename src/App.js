import React, {useState} from "react";
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
import { eventData } from './__mocks__/mockdata' 

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState()
  const [eventList, setEventList] = useState(eventData.events)

  const eventFunctions = {
    selectEvent: (cofcEvent) => {
      const found = eventList.find(obj => {
        return obj.eventID == cofcEvent;
      });
      setSelectedEvent(found)
    }
  }

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
            <Event selectedEvent={selectedEvent} />
          </Route>
          <Route path="/eventlist">
            <EventList eventFunctions={eventFunctions} eventList={eventList} />
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