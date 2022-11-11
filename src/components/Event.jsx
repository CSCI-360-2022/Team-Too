import React, { useState } from 'react';

export default function Event(props){
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] =  useState(0);
    const [desc, setDesc] = useState('');
    const [ticket, setTicket] = useState({})

    const sendToCart = () => {

    }
    
    return (
        <div>
            <div>Event</div>
            <form>
                <label>name</label>
                <input type="text" value={name} />
            </form>
        </div>
    )
}