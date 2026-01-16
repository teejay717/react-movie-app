import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {

const { id } = useParams()
const [movie, setMovie] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
    async function fetchMovieDetail() {
        setLoading(true)
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
        } finally {
            setLoading(false)
        }
    }

    fetchMovieDetail()
}, [id])


  return (
    <>
    <div className='h-screen flex justify-center items-center text-xl'>
    {loading ? 
        <div className='flex justify-center items-center w-full h-screen'>
        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-6xl" /> 
        </div>
        : 
        <div className='mx-100 flex flex-row justify-center items-center border-1 p-8 rounded-lg text-white h-auto bg-neutral-800 border-neutral-600'>
            <img className='rounded-lg border-1 border-neutral-600' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
            <div className='flex flex-col pl-8'>
                <p className='text-4xl font-bold'>{movie.title}</p>
                <p>Release Date: {movie.release_date}</p>
                <div className='mt-4 mb-4'>{movie.genres?.map((genre) => (
                    <span className="border-1 py-1 px-4 text-xl bg-neutral-700 border-neutral-500 rounded-lg mr-1" key={genre.id}>{genre.name} </span>
                ))}</div>

                <p>Overview: {movie.overview}</p>
            </div>
        </div>}
    </div>
    </>
    
  )
}

export default MovieDetail