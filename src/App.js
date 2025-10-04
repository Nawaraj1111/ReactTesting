// import { BrowserRouter } from 'react-router-dom';
import React,{ Suspense,lazy } from 'react';
import Form from './Form';
import Practice from './Practice';

const Contact = lazy(() => import('./Contact'));


function App() {
  const myValue = {
    color:"green",
    backgroundColor: "black",
    padding:"10px",
    fontfamily:"Sans-Serif"
  }

  return (
    <div style={{myValue}}>
      <Suspense fallback={<p>loading.....</p>}>
       <Contact />
       <Form />
      <Practice />
      </Suspense>
    </div>
  );
}

export default App;