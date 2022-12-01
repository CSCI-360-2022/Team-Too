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
import { eventData, purchasedSeatData } from './__mocks__/mockdata' 
import Footer from "./components/Footer";

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState()
  const [purchasedSeats, setPurchasedSeats] = useState()
  const [eventList, setEventList] = useState(eventData.events)
  const [cartList, setCartList] = useState([{}])
  const [itemNumber, setItemNumber] = useState(0)

  const eventFunctions = {
    selectEvent: (cofcEvent) => {
      const found = eventList.find(obj => {
        return obj.eventID == cofcEvent;
      });
      setSelectedEvent(found)
      var thisList = purchasedSeatData.purchasedSeats.filter(pSeat => pSeat.eventID == cofcEvent )
      setPurchasedSeats(thisList)
    }
  }

  const cartFunctions = {
    addToCart: (item) => {
      setCartList([...cartList, item])
      setItemNumber(cartList.length)
    }
  }

  return (
    <Router>
      <EventNavBar itemNumber={itemNumber} />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/event">
            <Event selectedEvent={selectedEvent} cartFunctions={cartFunctions} purchasedSeats={purchasedSeats} />
          </Route>
          <Route path="/eventlist">
            <EventList eventFunctions={eventFunctions} eventList={eventList} />
          </Route>
          <Route path="/cart">
            <Cart cartFunctions={cartFunctions} />
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