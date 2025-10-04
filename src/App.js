// import { BrowserRouter } from 'react-router-dom';
import React,{ Suspense,lazy } from 'react';
import Form from './Form';
import Fun from './Fun';
import Practice from './Practice';

const Contact = lazy(() => import('./Contact'));


function App() {

  return (
    <div>
      <Suspense fallback={<p>loading.....</p>}>
       <Contact />
       <Form />
       <Fun />
      <Practice />
      </Suspense>
    </div>
  );
}

export default App;