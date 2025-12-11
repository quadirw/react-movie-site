import React from 'react'
import { useState, useEffect } from 'react';
import MovieSwiper from './MovieSwiper';
import '../App.css';


 
function Home () {
        const [movies, setMovies] = useState([]);

        const fetchData = () => {
            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8ecfc63b&s=man`)
            .then(res => res.json())
            .then(data => setMovies(data.Search || []))
            .catch(e => console.log(e.message));
        }

        useEffect(() => {
            fetchData();
        }, []);

        return (
<div>
    <MovieSwiper slides={movies}/>
</div>
      )
    }
    
export default Home;
