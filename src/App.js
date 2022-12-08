import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import User from "./components/User";
import Main from "./pages/Main";
import Event from "./pages/Event";
import EventList from "./pages/EventList";
import Cart from "./pages/Cart";
import EventNavBar from "./components/EventNavBar";
import Admin from "./pages/Admin";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listCofcEvents, listPurchasedSeats } from './graphql/queries'

function App() {
  const [selectedEvent, setSelectedEvent] = useState()
  const [allPurchasedSeats, setAllPurchasedSeats] = useState()
  const [purchasedSeats, setPurchasedSeats] = useState()
  const [eventList, setEventList] = useState()
  const [cartList, setCartList] = useState([{}])
  const [itemNumber, setItemNumber] = useState(0)
  const [passCart, setPassCart] = useState([])
  // const [selectedSeats, setSelectedSeats] = useState([{}])

  function passCartSeats(e){
    setItemNumber(itemNumber + e.length)
    setPassCart([...passCart, ...e])
  }
  

  const eventFunctions = {
    selectEvent: (cofcEvent) => {
      console.log(cofcEvent);
      const found = eventList.find(obj => {
        return obj.eventID == cofcEvent;
      })
      setSelectedEvent(found)
      var thisList = allPurchasedSeats.filter(pSeat => pSeat.eventID == cofcEvent )
      setPurchasedSeats(thisList)
    }
  }

  const cartFunctions = {
    addToCart: (item) => {
      setCartList([...cartList, item])
      setItemNumber(cartList.length)
    }
  }

  const getEvents = async () => {
    const eventData = await API.graphql(graphqlOperation(listCofcEvents))
    setEventList(eventData.data.listCofcEvents.items)
  }

  const getPurchasedSeats = async () => {
    const purchasedSeatData = await API.graphql(graphqlOperation(listPurchasedSeats, {limit: 500}))
    setAllPurchasedSeats(purchasedSeatData.data.listPurchasedSeats.items)
  }

  useEffect(() => {
    getEvents()
    getPurchasedSeats()
  }, [])

  return (
    <Router>
      <EventNavBar itemNumber={itemNumber} />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/event" element={<Event selectedEvent={selectedEvent} cartFunctions={cartFunctions} purchasedSeats={purchasedSeats} passCart={passCart} passCartSeats={passCartSeats} />} />
          <Route path="/eventlist" element={<EventList eventFunctions={eventFunctions} eventList={eventList} />} />
          <Route path="/cart" element={<Cart passCart={passCart}/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Main eventFunctions={eventFunctions}/>} />
        </Routes>
    </Router>
  );
}

export default App