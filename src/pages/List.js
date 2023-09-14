import React from "react";

import Card from '../UI/Card';
import './Animal.css';
import Search from '../components/Search';
import Add from "../components/Add";



const List = (props) => {
const searchFilter = props.data.filter(item =>{
    return item.name.includes(props.searchInput)
})
    return (
        <div >
        <h2>{props.title}: {props.data.length}</h2>
        <Search searchHandler={props.searchHandler} searchInput = {props.searchInput}/>
        <Add/>
        <div className="cards">
        {searchFilter.map((item)=> <Card 
        key = {item.name} 
        name = {item.name} 
        likes = {item.likes} 
        removeCard = {()=>props.removeHandler(item.name,props.title)} //binding data,can be sent it back to original trigger in App.js in this case.
        addLikes = {()=>props.likesHandler(item.name,'add', props.title)} 
        removeLikes = {()=>props.likesHandler(item.name,'remove', props.title)}/>)}
        </div>
        </div>
    )
   


    


};

export default List;