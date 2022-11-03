import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './App.css';

function Event(props){
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] =  useState(0);
    const [desc, setDesc] = useState('');
    const [ticket, setTicket] = useState({})
    
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