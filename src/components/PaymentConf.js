import React, { useState } from 'react';
import Cart from './Cart'

export default function PaymentConf() {
    const [totalPrice, setTotalPrice] = useState(0)
    
    const completePurchase = () => {

    }

    return (
    <div>
        <div>PaymentConf</div>
        <div className="PaymentConf">
            <Cart func={setTotalPrice}/>
        </div>
        <div button role = "completePurchase" onClick={() => {
            props.func(totalPrice)
        }}>Complete Purchase</div>

    </div>
    );
    
    
}