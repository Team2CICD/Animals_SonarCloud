import React from 'react';
import './Card.css';

const Card = (props) => {

    return(
        <div className='cards'>
          <div className='card'>
          <img src = {`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}/>
          <p>{props.name}</p>
          <div className='remove'>
            <button onClick={props.removeCard}>x</button>
          </div>
          <div className='btn'>
          <button onClick={props.addLikes}>👍🏻</button>
          {props.likes>=0 ? <p>❤️ {props.likes}</p> :<p>💔  {props.likes}</p> }
          
          <button onClick={props.removeLikes}>👎🏻</button>
          </div>
         </div>
       
        </div>
         
      
    )

};

export default Card;