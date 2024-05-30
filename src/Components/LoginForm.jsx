import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'
import user_icon from './Assets/person.jpeg'; 
import password_icon from './Assets/lock.jpeg';
import google_icon from './Assets/google_logo.png';
import axios from 'axios'
//import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //const navigate = useNavigate()

  const logingoogle = () =>
  {
    window.open("http://localhost:3001/auth/google/callback","_self");
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3001/user/', {email, password} )
    .then(result=> {
      console.log(result)
      const msg = result.data.message
      if(msg === "Not a user" ){
         alert("Not a user") }
      else if(msg === "incorrect password"){
        alert("Incorrect password")}
      else{
        window.location.href = "/home";
         }
      })
    .catch(err=> alert(err))
  }
    

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="inputbox">
          <input type="email" placeholder='Email' required value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <img src={user_icon} alt="" className="icon"/>
        </div>

        <div className="inputbox">
          <input type="password" placeholder='Password' required value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <img src={password_icon} alt="" className="icon"/>
        </div>

      <button type="submit" className='button'>Log In</button>
      <p>Dont have an account ?   
      <Link to="/signup" >   Sign Up</Link> </p>
      
      
    </form>
    <div className="google-login">
        <button className='loginwgoogle' onClick={logingoogle}>
          Continue with Google
        </button>
        <img src={google_icon} alt="" className="google-icon"/>
      </div>

    </div>
  )
}

export default LoginForm;