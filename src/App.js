// import { BrowserRouter } from 'react-router-dom';
import React,{Suspense} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css'

import Registration from './Registration.js';
import LoginForm from './LoginForm.js';
import Form from './Form.js';
import Contact from './Contact.js';
// import Form from '/Form';
import Fun from './Fun';
import Cart from './Cart.js';
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./About'));
// const Registration = lazy(() => import('./Registration'));
// const LoginForm = lazy(() => import('./LoginForm'));
// const Form = lazy(() => import('./Form'));   


// const Contact = lazy(() => import('./Contact'));
import Login from './Login.js'
import ApiPractice from './ApiPractice.js';
import ApiPractice2 from './ApiPractice2.js';


function App() {

  return (
    <div>

      <Suspense fallback={<p>loading.....</p>}>
      <BrowserRouter>
      <nav className='nav'>
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
                    <li>
                      <Link to="/Registration" >Registration</Link>
                    </li>
                    <li>
                      <Link to="/apipractice" >API Practice</Link>                      
                    </li>
                    <li>
                      <Link to="/ApiPractice2">API Self practice</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="" element={<Login/>}/>
                <Route path="/ApiPractice2" element={<ApiPractice2 />}/>
                <Route path="/" element={<Login />} />
                <Route path="/apipractice" element={<ApiPractice />} />
                <Route path="/about" element={<LoginForm />}>
                    <Route path="team" element={<Form />} />
                    <Route path="company" element={<Fun />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/cart" element={<Cart />} />
            </Routes>
       </BrowserRouter>
     
      </Suspense>
    </div>
  );
}

export default App;