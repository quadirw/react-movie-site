import React, { useState, useEffect } from 'react'

const Home = () => {
    
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
      
  return (
      <div className="App">
      <h1>Movie Search Engine</h1>
      <form onSubmit={searchMovie}>
        <input 
          type="text" 
          placeholder="Search for movies" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>

        <div>Sort By Filter:
        <select name="movieSort" id="movieSort">
          <option value="default">Sort by Year</option>
          <option value="newest">Newest to Oldest</option>
          <option value="oldest">Oldest to Newest</option>
        </select>
          </div>
        
      </form>
     <div className="movie-container">
        {movies.map(movie => (
          <div key={movie.imdbID} className='movie-card'>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
