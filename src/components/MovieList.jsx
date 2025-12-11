import React, { useState, useEffect } from 'react'
import noImage from '../assets/Movie_Error_Loading.png'
import '../App.css';


const MovieList = () => {
    
      const [movies, setMovies] = useState([])
      const [search, setSearch] = useState("")
      
      const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=8ecfc63b&s`
    
      useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setMovies(data.Search || []))
      }, [])
    
      const searchMovie = (e) => {
        e.preventDefault()
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8ecfc63b&s=${search}`)
        .then(res => res.json())
        .then(data => setMovies(data.Search || []))
      }

      function filterMovies(filter) {
        console.log(filter)
        if (filter === 'NEWEST_TO_OLDEST') {
          setMovies(movies.slice().sort((a,b) => b.Year - a.Year))
        }
        if (filter === 'OLDEST_TO_NEWEST') {
          setMovies(movies.slice().sort((a,b) => a.Year - b.Year))
        }
      
      }

  return (
      <div className="movieList__app">
      <h1 className='movielist__title'>Search Movies Here:</h1>
      <form onSubmit={searchMovie}>
        <input 
          type="text" 
          placeholder="Search for movies" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className='movieList__btn'>Search</button>

        <div className='movieFilterBar'>
        <select name="movieSort" defaultValue="DEFAULT" id="movieSort" onChange={(event) => filterMovies(event.target.value)}>
          <option value="default" disabled>Sort by:</option>
          <option value="RATING">Rating</option>
          <option value="NEWEST_TO_OLDEST">Newest to Oldest</option>
          <option value="OLDEST_TO_NEWEST">Oldest to Newest</option>
        </select>
          </div>
        
      </form>

     <div className="movie-container">
        {movies.map(movie => (
          <div key={movie.imdbID} className='movie-card'>
            <img src={movie.Poster} 
            onError={(e) => (e.target.src = noImage)}/>
            <h3 className='movie-card__title'>{movie.Title}</h3>
            <h3 className='movie-card__date'>{movie.Year}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList;
