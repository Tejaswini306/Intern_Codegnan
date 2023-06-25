// import React from 'react'
import React, { useState } from 'react';
import DisplayMessage from './DisplayMessage'
import TakeMessage from './TakeMessage'

export default function MessageList() {

    const [MessageList,setMessageList] = useState([]);
    const addMessage=(e)=>{
        setMessageList([...MessageList,e]);
    }
    return (
        <div>
            <TakeMessage onSubmit={addMessage}/>
            {
                MessageList.map((m)=>(
                    <DisplayMessage showMessage={m.text} />
                ))
            }
        </div>
    )
}