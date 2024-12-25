import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const Api_key='c45a857c193f6302f2b5061c3b85e743'
    const imgbase='https://image.tmdb.org/t/p/w500'

    const[state,updatestate]=useState([])

    useEffect(()=>{
        console.log(state,"movie")
    },[state])

    async function all(){
        try{
        const response=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`) 
        if(response){
        updatestate(response.data.results)
        }}
        
    
    
    catch(error){
        console.log(error)
    }
}
    all()

  return (
    <div>
    
    {state.map((movie)=>(
        <div>
    <h1>  {movie.title}</h1>
    <h1>{state.release_date}</h1>
    <img src={`${imgbase}${movie.poster_path}`} alt='error'/>
    </div>
    ))}
    
    </div>
  )
}

export default Home