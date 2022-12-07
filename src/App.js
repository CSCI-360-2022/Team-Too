import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
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
import { eventData, purchasedSeatData, cartItemData } from './__mocks__/mockdata' 
// import { API, Auth, graphqlOperation } from "aws-amplify";
// import { listCofcEvents } from './graphql/queries'

function App() {
  const [selectedEvent, setSelectedEvent] = useState(19)
  const [purchasedSeats, setPurchasedSeats] = useState()
  const [eventList, setEventList] = useState(eventData.events)
  const [cartList, setCartList] = useState([{}])
  const [itemNumber, setItemNumber] = useState(0)
  const [todos, setTodos] = useState([])
  const [nextEventID, setNextEventID] = useState()
  const [passCart, setPassCart] = useState(cartItemData.cartItems)
  // const [selectedSeats, setSelectedSeats] = useState([{}])

  function passCartSeats(e){
    setPassCart(e)
  }
  

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

  // const getEvents = async () => {
  //   const eventData = await API.graphql(graphqlOperation(listCofcEvents))
  //   setTodos(eventData.data.listCofcEvents.items)
  //   let highestEventID = Math.max(...eventData.data.listCofcEvents.items.map(o => o.eventID))
  //   setNextEventID(highestEventID + 1)
  // }

  const changeNextEventID = () => {
    setNextEventID(nextEventID)
  }

  // useEffect(() => {
  //   getEvents()
  // }, [])

  return (
    <Router>
      <EventNavBar itemNumber={itemNumber} />
      {todos.map((todo, i) => {
        <h3>{todo.name}</h3>
      })}
      <div>
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/event">
            <Event selectedEvent={selectedEvent} cartFunctions={cartFunctions} purchasedSeats={purchasedSeats} passCartSeats={passCartSeats} />
          </Route>
          <Route path="/eventlist">
            <EventList eventFunctions={eventFunctions} eventList={eventList} />
          </Route>
          <Route path="/cart">
            <Cart cartFunctions={cartFunctions} passCart={passCart}/>
          </Route>
          <Route path="/admin">
            <Admin nextEventID = {nextEventID} changeNextEventID = {changeNextEventID} />
          </Route>
          <Route path="/" eventFunctions={eventFunctions}>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App