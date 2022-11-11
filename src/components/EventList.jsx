import React, { useState } from 'react';

export default function EventList(props){
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] =  useState(0);
    const [desc, setDesc] = useState('');
    const [ticket, setTicket] = useState({})

    const searchByDate = () => {

    }

    const searchByCategory = () => {

    }

    const sanitize = () => {

    }
    
    return (
        <div>
            <div>EventList</div>
            <form>
                <label>name</label>
                <input type="text" value={name} />
            </form>
        </div>
    )
}