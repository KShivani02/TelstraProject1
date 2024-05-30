import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/user/signup', {name, email, password} )
    .then(result=> console.log(result))
    .catch(err=> console.log(err))
    navigate("/")
  } 

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="inputbox">
          <input 
            type="text" placeholder='Name' required='true'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="inputbox">
          <input 
            type="email" placeholder='Email' required='true' 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="inputbox">
          <input 
            type="password" placeholder='Password' required='true' 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className='button'>Sign Up</button>
        <p>Already have a account?
        <Link to="/">  Login</Link></p> 
        
      </form>
    </div>
  );
}

export default SignupForm;