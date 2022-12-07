import React from 'react'
import CartContainer from '../components/CartContainer'
import '../components/styles.css'

function Cart({itemNumber, passCart}) {
  return (
    <div className='cart'>
      <CartContainer itemNumber={itemNumber} passCart={passCart}/>
    </div>
  )
}

export default Cart