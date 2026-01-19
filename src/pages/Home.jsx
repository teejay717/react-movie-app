import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

const [movies, setMovies] = useState([])
const [loading, setLoading] = useState(false)

async function fetchMovie() {
        setLoading(true)
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY

        try {
            const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
            const res = await fetch(apiUrl);

            if (!res.ok) {
                console.log("Error fetching")
                return;
            }

            const data = await res.json();
            setMovies(data)
            
        } 
        catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

        
    }

useEffect(() => {
    fetchMovie()
    
}, [])


console.log(movies)

  return (
    <>
    <div className="container mx-auto px-4 py-8 pt-20">
        <div className='flex flex-col justify-center items-center p-8  text-white font-bold rounded-lg'>
            <h1 className='text-5xl mb-2'>Movie Explorer</h1>
            <p className='font-thin italic text-xl'>Movie Database (React + TMDB API Practice) by teejay.dev</p>
        </div>
    <div className='flex justify-center items-center'>
        <p className="text-2xl mt-10 text-center text-white bg-neutral-800 py-2 px-8 rounded-lg border-1 border-neutral-600 font-bold hover:scale-102 transition  hover:shadow-2xl shadow-lg hover:border-neutral-400">Trending Movies</p>
    </div>
    {loading ? 
        <div className='flex justify-center items-center w-full h-screen bg-neutral-900 text-white'>
        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-6xl" /> 
        </div>
        : movies.length === 0 ? 
        <div className='flex justify-center w-full h-screen bg-neutral-900 text-white'>
            <p className='font-thin text-4xl mt-32'>Failed to fetch Trending Movies!</p>
        </div> 
        : <div className="grid grid-cols-2 md:grid-cols-5 gap-6 m-16 mt-8 py-4 bg-neutral-900">
           {movies.results?.map((movie) => (
                <div className="bg-neutral-800 rounded-lg shadow-lg p-2 hover:scale-101 hover:shadow-2xl hover:bg-neutral-700 transition cursor-pointer flex flex-col items-center w-full border-1 border-neutral-600 text-center hover:border-neutral-400" 
                // hover:scale-101 transition hover:bg-neutral-700 hover:shadow-2xl shadow-lg
                key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                    <img alt={movie.title}
                    className="w-full h-64 object-cover rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <p className='text-white font-bold py-4'>{movie.title}</p>
                    </Link>
                </div>
            ))}
        </div>}
        
        </div>
    </>
    
  )
}

export default Home