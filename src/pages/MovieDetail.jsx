import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieDetail = () => {

const { id } = useParams()
const [movie, setMovie] = useState([])

useEffect(() => {
    async function fetchMovieDetail() {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)

            if (!res.ok) {
                console.log("Error fetching movie details");
                return;
            }

            const data = await res.json();
            setMovie(data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    fetchMovieDetail()
}, [id])


  return (
    <>
        <div className='flex flex-col justify-center items-center border-1'>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            <div>{movie.genres?.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
            ))}</div>
           
            <p>Overview: {movie.overview}</p>
            
        </div>
    </>
    
  )
}

export default MovieDetail