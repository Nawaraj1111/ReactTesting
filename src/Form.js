import React, { useState } from 'react';

function Form() {
    // const [ , setName] = useState("Null");
    // const [email, setEmail] = useState("Null");
    // const [mytext, setMyText] = useState("Null");
    const [inputs, setInputs] = useState({name:"Null", email:"Null", mytext:"Null", vehicle:"car"});
    // const [myvalue, setMyValue] = useState();
    const handleChange = (e) => {
        e.preventDefault();
        // alert(`Hello, ${name}! Your email is ${email}.`);
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values, [name]:value}));
    };

    const handleSubmit=(e)=>{
      e.preventDefault();
      alert(`Name: ${inputs.name} Email: ${inputs.email} MyText: ${inputs.mytext}`);
    }
  return (
    <div>
        <h1>Hello world</h1>
        <form action="" onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"300px", margin:"auto"}}> 
            <input type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange} 
            placeholder="Enter your name here"
            />

            <input type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Enter your email here"
            />

            Male: <input type="radio" name="gender" value="male" onChange={handleChange}   />
            Female: <input type="radio" name="gender" value="female" onChange={handleChange}  />

            <textarea  name="mytext" value={inputs.mytext} onChange={handleChange}></textarea>
            <p>Select Your vehicle</p>
            <select name="vehicle" value={inputs.vehicle} onChange={handleChange}>
              <option value="car" defaultValue >Car</option>
              <option value="bike">Bike</option>
              <option value="cycle">Cycle</option>
              <option value="none">None of the above</option>
            </select> 

            <button type="submit">Submit</button>
        </form>
        
        <p>Name:{inputs.name} <br /> Email:{inputs.email} <br />MyText:{inputs.mytext} <br />  Gender:{inputs.gender} <br /> My vechicle: {inputs.vehicle}  </p>
    </div>    
  );
}

export default Form;