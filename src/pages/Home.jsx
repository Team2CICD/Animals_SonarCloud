import React from "react";
import "./Home.css"
import animalpic from '../assets/animalpic.jpg';
import bird from '../assets/bird.jpg';
import { Link } from "react-router-dom";



const Home = () =>{
    return(
        <div className="homepage">
          <div className="animal">
         <Link to = './animal'> <img src={animalpic} alt="animal pic" /></Link>
          </div>
          <div className="bird">
          <Link to = './bird'><img src={bird} alt="bird pic" /></Link>
          </div>
        </div>
    )
}

export default Home;