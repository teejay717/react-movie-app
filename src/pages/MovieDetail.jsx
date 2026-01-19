import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MovieDetail = () => {

const { id } = useParams()
const [movie, setMovie] = useState([])
const [loading, setLoading] = useState(false)
const navigate = useNavigate()

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
    <div className='min-h-screen flex justify-center items-center text-xl flex-col'>
    {loading ? 
        <div className='flex justify-center items-center w-full h-screen'>
        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-6xl text-white" /> 
        </div>
        : 
        <>
        
        <div className='text-s sm:text-md md:text-lg xl:text-2xl mx-10 sm:mx-20 2xl:mx-100 flex flex-col md:flex-row justify-center items-center border-1 p-8 rounded-lg text-white h-auto bg-neutral-800 border-neutral-600 hover:scale-101 transition hover:shadow-2xl shadow-lg hover:border-neutral-400'>
            <img className='rounded-lg border-1 border-neutral-600' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
            <div className='flex flex-col md:pl-8 text-center md:text-left'>
                <p className='text-2xl sm:text-2xl md:text-4xl font-bold'>{movie.title}</p>
                <p className='text-lg'>Release Date: {movie.release_date}</p>
                <div className='mt-4 mb-4 flex flex-wrap gap-1 justify-center md:justify-start 
                
                '>{movie.genres?.map((genre) => (
                    <span className="border-1 py-1 px-4 text-s sm:text-md md:text-lg xl:text-xl 2xl:text-xl bg-neutral-700 border-neutral-500 rounded-lg mr-1 mb-1
                    hover:scale-101 transition hover:shadow-2xl shadow-lg hover:border-neutral-400 hover:cursor-default hover:bg-neutral-600
                    " key={genre.id}>{genre.name} </span>
                ))}</div>

                <p className='text-justify text-lg'>Overview: {movie.overview}</p>
            </div>
        </div>
        <button 
        onClick={() => {
            navigate(-1)
        }}
        className='bg-neutral-800 border-neutral-600 border-1 rounded-lg px-4 py-2 text-white mt-8 hover:cursor-pointer hover:scale-105 transition  hover:shadow-2xl shadow-lg hover:border-neutral-400'>
            Back <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
        </>}
    </div>
    </>
    
  )
}

export default MovieDetail