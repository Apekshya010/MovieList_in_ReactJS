import Header from './Header';
import './App.css';
import searchlogo from './searchlogo1.png'; 
import { useEffect, useState } from 'react';
import List from './List';
import Optimize from './Optimize';

function App() {
  const[searchValue,setSearchValue]=useState('')
  const[movies,setMovies]=useState([])

//to take value from search (arg in function can be anything not necessarily e )
  const handleInputText=(a)=>{
    setSearchValue(a.target.value); //value is stored in value property of target property
  }

//To fetch movies from api url
  const searchMovies=async (title)=>{
    const a= await Optimize(title);
    setMovies(a);
  }
  console.log(movies);
//it is called everytime any change occur in set value
  useEffect(()=>{
    searchMovies('test')
  },[])
  //with []=> calls one time
  //without []=>calls infinite times
    return (
    <div className="app" style={{color:'red'}}>
      <Header/>
      <div className="search">
      <input placeholder='Search for movies' value={searchValue} onChange={(e)=>handleInputText(e)}/>
      <img src={searchlogo} alt="search" onClick={()=>searchMovies(searchValue)}/>
      </div>
      {movies && movies.length>0?(
        <div className='container'>
        {movies.map((movie)=>(
          <List title={movie.Title} type={movie.Type} year={movie.Year} image={movie.Poster} rating={movie.imdbID }/>
        ))}
        </div>
  ):(
    <div className='empty'>
      <h2>No movies found!!</h2>
    </div>
  ) }
      </div>
  );
}

export default App;
