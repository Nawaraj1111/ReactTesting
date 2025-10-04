import React, { Suspense } from 'react';

const mystyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    fontFamily: "Arial"
};

function Practice() {

    return (
        <div className={mystyle}>
            <Suspense fallback={<div>Loading...</div>}>
            <h1>Hello, React!</h1>
            <p>This is a basic React component.</p>
            </Suspense>
            <button onClick={() => alert('Button Clicked!')}>Click Me</button>
            <p>Additional text can be added here.</p>
        </div>
    );
}


export default Practice;