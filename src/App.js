import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm'; 
import SignupForm from './Components/SignupForm'; 
import Home from './Components/Home';
import Epic from './Components/Epic';
import CreateStory from './Components/CreateStory';
import Navbar from './Components/Navbar';



function App() {

  const currentPath = window.location.pathname;
  const isAuthPage = currentPath === '/' || currentPath === '/signup';
  return (
   
    <Router>
        {!isAuthPage && <Navbar />}
      <Routes>
       <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/epic" element={<Epic />} />
        <Route path="/createstory" element={<CreateStory />} />
      </Routes>
    </Router> 
  

  );
}

export default App;