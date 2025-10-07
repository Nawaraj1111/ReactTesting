// import { BrowserRouter } from 'react-router-dom';
import React,{Suspense, useTransition} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import LoginForm from './LoginForm.js';
import Form from './Form.js';
import Contact from './Contact.js';
// import Form from '/Form';
import Fun from './Fun'

// const Contact = lazy(() => import('./Contact'));
import Login from './Login.js'


function App() {

  return (
    <div>

      <Suspense fallback={<p>loading.....</p>}>
      <BrowserRouter>
      <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/about" element={<LoginForm />}>
                    <Route path="team" element={<Form />} />
                    <Route path="company" element={<Fun />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
       </BrowserRouter>
     
      </Suspense>
    </div>
  );
}

export default App;