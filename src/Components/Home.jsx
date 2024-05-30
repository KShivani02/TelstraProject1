import React from 'react';
import bgimg from './Assets/Telimg.jpg';

const Home = ()=> {

    return (
        <div>
            <h1>Welcome to Home Page!</h1>
        <img src={bgimg} alt=""  style={{ width:'98%', height: 'auto', padding: '18px'}}  />
        </div>
    );
}

export default Home;
        
     