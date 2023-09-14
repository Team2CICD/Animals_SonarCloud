import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.title}</h1>
    
    <nav> 
        <ul>
          <li><NavLink to = '/'>Home</NavLink></li>
          <li><NavLink to = '/animal'>Animals ({props.animalData.length})</NavLink></li>
          <li><NavLink to = '/bird'>Birds ({props.birdsData.length})</NavLink></li>
          <li><NavLink to = '/about'>About</NavLink></li>
        </ul>
    </nav>
        </div>
    );
};

export default Header;