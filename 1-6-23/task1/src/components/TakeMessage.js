// import React from 'react'
import React, { useState } from 'react';

export default function TakeMessage(props) {

    const [newMessage,setNewMessage] = useState('') 

    const handleClick=()=>{
        props.onSubmit({
            text:newMessage
        })
        setNewMessage('')
    }

    const handleChange=(e)=>{
        setNewMessage(e.target.value)
    }
    return (
        <div>
            <p><input  name='newMessage'
                    value={newMessage}
                    onChange={handleChange}
                    placeholder='Enter yout text'
                    >
            </input></p>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}