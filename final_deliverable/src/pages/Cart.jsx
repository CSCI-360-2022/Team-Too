import React from 'react'
import CartContainer from '../components/CartContainer'
import '../components/styles.css'

function Cart({passCart}) {
  return (
    <div className='cart'>
      <CartContainer passCart={passCart}/>
    </div>
  )
}

export default Cart