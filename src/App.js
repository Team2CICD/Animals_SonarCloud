import React,{Component} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
/* import Animal from './pages/Animal';
import Bird from './pages/Bird'; */
import {animals} from './animalsList';
import {birds} from "./animalsList";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import List from './pages/List';




class App extends Component {
 
  state = {
    animals:animals,
    birds: birds,
    title: 'Living Things',
    searchInput: ''
  };


  
  likesHandler = (name,action,list) => {
    this.setState(((prevState) =>{
      const updateArray = prevState[list].map((item) => {
        if(item.name === name){
          if(action==='add'){
            return {...item,likes:item.likes + 1}  //spreading, curly bracket here shows we are working with obejcts

          }else{
            return {...item,likes:item.likes - 1} 
          }
        } else {
          return item;
        }

      })

      localStorage.setItem("lists", JSON.stringify(updateArray))
      return {
        [list]:updateArray
      }
   
    
    }))

   /* console.log('like handler clicked',name,action) */
  };

/*   likesHandlerBirds = (name,action) => {
    this.setState((prevState)=>{
      const updatedBirdArray = prevState.birds.map((bird)=>{
        if(bird.name === name){
          if(action === 'add'){
            return {...bird,likes:bird.likes +1}
          }else{
            return{...bird,likes:bird.likes -1}
          }
        }else{
          return bird;
        }
      })
      localStorage.setItem("birds", JSON.stringify(updatedBirdArray))
      return {
        birds:updatedBirdArray
      }
    })
  } */
  removeHandler = (name,remove) =>{
   const updateArray = this.state[remove].filter((animal)=> animal.name !==name)
   this.setState({
    [remove]:updateArray
   })
    /* console.log('remove card',name) */
  }

/*   removeHandlerBirds = (name) =>{
    const updatedBirdArray = this.state.birds.filter((bird)=> bird.name!==name)
    this.setState({
      birds:updatedBirdArray
    })
  } */

  searchHandler = (e) =>{
    this.setState({
      searchInput:e.target.value
    })

  }
  getFromStorage = () =>{
    const animalData = JSON.parse(localStorage.getItem("lists"));
 /*   const birdData = JSON.parse(localStorage.getItem("birds")); */
  this.setState({
      animals : animalData,
      birds : animalData
  })
}
  
  render() {
    
 
  
  return (
    <div className="App">
      <BrowserRouter>
 
    
      <Header title = {this.state.title} animalData = {this.state.animals} birdsData = {this.state.birds}/>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/animal' element = { <List title = "animals"
        data = {this.state.animals} likesHandler = {this.likesHandler} removeHandler = {this.removeHandler} searchHandler ={this.searchHandler} searchInput ={this.state.searchInput}/>}/>
        <Route path='/bird' element = { <List title = "birds" 
        data = {this.state.birds} likesHandler = {this.likesHandler} removeHandler = {this.removeHandler} searchHandler ={this.searchHandler} searchInput ={this.state.searchInput} />}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
  }
}


export default App;
