import React , {useState, useTransition} from 'react';
import './Login.css';
import { store } from './app/store';


function Fun() {
    const [inputs, setInputs] = useState({});
    const [isPending, startTransition] = useTransition();


    const handleChange = (e) => {
        e.preventDefault();
        // alert(`Hello, ${name}! Your email is ${email}.`);
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values, [name]:value}));

        //    // Non-urgent: Update search results
        startTransition(() => {
            setInputs(e.target.value);
          });
    };


    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Name: ${inputs.name} Email: ${inputs.email} MyText: ${inputs.mytext}`);
      }

    return (
        <div className="">
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="Email">Email</label>
                <input type="email" name="login"
                 value={inputs.name} onChange={handleChange}  id="login" />
                <br /> <br />
                <label htmlFor="Password">Password</label>
                { isPending? <p>Loading....</p> :
                <input type="password" name='password' id='login' />
                    }
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Fun;