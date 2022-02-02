import React from "react";
import { useState } from 'react';
import Star from "./Star";

function Counter() {

    const [ counter, setCounter ] = useState(0)
    const StarsArray = []

    for (let i = 0; i < counter; i++) {
        StarsArray.push(<Star/>)
    }
    
    return (
        <div>
            <div style={counterStyle}>
                <button onClick={() => setCounter(counter - 1)}>Remove</button>
                <div>{counter}</div>
                <button onClick={() => setCounter(counter + 1)}>Add</button>
            </div>
            <div style={starContainerStyle}>
                {StarsArray}
            </div>
        </div>
    )
}

const counterStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "30px"
}

const starContainerStyle = {
    display: "flex",
}
export default Counter