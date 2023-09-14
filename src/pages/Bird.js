import React from "react";
import Search from "../components/Search";
import Card from "../UI/Card";

const Bird = (props) => {
    const searchFilter = props.data.filter(animal =>{
        return animal.name.includes(props.searchInput)
    })
        return (
            <div >
            <h2>Birds: {props.data.length}</h2>
            <Search searchHandler={props.searchHandler} searchInput = {props.searchInput}/>
            <div className="cards">
            {searchFilter.map((item)=> <Card 
            key = {item.name} 
            name = {item.name} 
            likes = {item.likes} 
            removeCard = {()=>props.removeHandler(item.name)} 
            addLikes = {()=>props.likesHandler(item.name,'add')} 
            removeLikes = {()=>props.likesHandler(item.name,'remove')}/>)}
            </div>
            
                
            </div>
        )
       
    
    
        
    
    
    };
    
    export default Bird;


