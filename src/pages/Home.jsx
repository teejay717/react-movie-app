import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

const [movies, setMovies] = useState([])

async function fetchMovie() {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY

        try {
            const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
            const res = await fetch(apiUrl);

            if (!res.ok) {
                console.log("Error fetching")
                return;
            }

            const data = await res.json();
            setMovies(data.results)
            
        } 
        catch (err) {
            console.log(err)
        }

        
    }

useEffect(() => {
    fetchMovie()
    
}, [])


console.log(movies)

  return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-8">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <p>{movie.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    </>
    
  )
}

export default Home