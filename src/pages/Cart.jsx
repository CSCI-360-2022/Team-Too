import React from 'react'
import CartContainer from '../components/CartContainer'
import '../components/styles.css'

function Cart({itemNumber}) {
  return (
    <div className='cart'>
      <CartContainer itemNumber={itemNumber}/>
    </div>
  )
}

export default Cart