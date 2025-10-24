import React from 'react';
import './bhim.css';
import Home from '../src/pages/Home.js'


function Fun() {
    return (
        <div className="hello">
            <h1> Welcome to Bhim Prasad Luitel page</h1>
            <p style={{backgroundColor:"yellow"}}>I am bhim prasad luitel from bhojpur district. I live in Morang right now <br /> My Favorite food is Meat </p>
            <header className="app-header">🛒 React Add to Cart</header>
            <Home />
        </div>
    );
}

export default Fun;