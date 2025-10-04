import React, { useState } from 'react';

function Ram(props) {
    const [con, setCon] = useState(false);
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <div>
            <button onClick={() => setCon(!con)}>Click me </button>
            {props.value && con && <p>I am props and {props.value}</p>}

            {con && <p>The button has been clicked!</p>}

           <ul style={{backgroundColor:"lightblue", padding:"10px", borderRadius:"10px", }}>
            {cars.map((car,index)=> <li key={index}>{car}</li>)}
           </ul>
        </div>
    );
}

export default Ram;