import React from 'react'
import { useState } from 'react'

function Movie() {
    const [movie, setMovie] = useState({title: "Lion King", year: 2020, rating: 6})

    const updateRating = () =>{
        setMovie((movie)=> ({...movie, rating: 8}))
        // setMovie((movie)=>{
        //     const copyMovie = {...movie, rating: 8}
        //     return copyMovie;
        // } )
    }

  return (
    <div>
        <h2>Movie details</h2>
        <h4>Title: {movie.title}</h4>
        <h5>Year: {movie.year}</h5>
        <h5>Rating: {movie.rating}</h5>
        <button onClick={updateRating}>Update Rating</button>
    </div>
  )
}

export default Movie