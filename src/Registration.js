import React, {useState} from 'react'


function Registration() {
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
  return (
    <div style={{textAlign:"center", alignItems:"center", border:"3px solid green", padding:"3px", width:"50%", marginLeft:"30%", marginTop:"10px"}}>
      <h1>Registration Page</h1>
      <form action="">
        <label htmlFor="Name">Name</label>
        <input type="text" name="name" id="name" />
        <br /><br />
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" id="email" />
        <br />   <br />
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <br /><br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" value={cPassword} onChange={(e)=>setCPassword(e.target.value)} />
        <br /><br />
        <input type="submit" value="Submit" />

      </form>
    </div>
  )
}

export default Registration;