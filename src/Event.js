import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './App.css';

function Event(props){
    const name = useState(0);
    const date = useState(0);
    const price =  useState(0);
    const desc = useState(0);
    const ticket = new Array[useState(0)];
    
    return (
        <div>Event
            <form>
                <label>name</label>
                <input type="text" value={name} 
            </form>
        </div>
    )
}