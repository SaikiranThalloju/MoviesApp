
import React,{useState} from 'react'
import moviesData from "../Data/Moviedetails.js"
import Moviedisplay from './Moviedisplay.js'
const Movielist = () => {

    const [selectedMovie,setSelectedMovie] = useState(null)
    console.log(selectedMovie);


  return (
    <div>
        {
        moviesData.map(movie =>(
            <h3 onClick={()=>setSelectedMovie(movie)}
            style = {{backgroundColor : "black",
            color : "tomato",
           width : "30%"}
        }>{movie.title}</h3>
        ))
        }

      <Moviedisplay selectedMovie = {selectedMovie}/>

    </div>
  )
}

export default Movielist
