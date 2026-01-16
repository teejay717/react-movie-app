import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [moviesDisplayed, setMoviesDisplayed] = useState(false)
  const [searchedFor, setSearchedFor] = useState('');

  async function fetchSearch() {
    setLoading(true)
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY

    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchInput}`)
      
      if (!res.ok) {
        console.log("Error fetching")
        return;
      }

      const data = await res.json();
      console.log(data)
      setSearchResults(data.results)
    }
    catch (error) {
      console.log("Error fetching")
    }
    finally {
      setLoading(false)
      setMoviesDisplayed(true)
    }
  }

  console.log(searchResults.results)

  return (
    <>
    <div className="min-h-screen bg-neutral-900">
      <div className='flex justify-center items-center'>
        <div className='flex gap-2 mt-30 bg-neutral-800 p-8 rounded-lg border-1 border-neutral-600 hover:scale-101 transition hover:shadow-2xl shadow-lg hover:border-neutral-400'>
          <input placeholder="Search for a movie!" className="border-1 border-neutral-500 bg-neutral-700 py-2 px-4 rounded-lg placeholder:text-neutral-500 text-white text-xl z-auto hover:scale-101 transition hover:shadow-2xl shadow-lg hover:border-neutral-400'" type='text' value = {searchInput} 
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
                fetchSearch()
                setSearchedFor(searchInput)
            }
          }}
          ></input>
          <button className='border-1 hover:cursor-pointer border-neutral-500 bg-neutral-700 py-2 px-4 rounded-lg text-white hover:scale-101 transition hover:shadow-2xl shadow-lg hover:border-neutral-400'
          onClick={() => {
            fetchSearch()
            setSearchedFor(searchInput)
          }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
      </div>
      {loading ? 
      <div className='flex justify-center items-center w-full h-screen'>
        <FontAwesomeIcon icon={faSpinner} className="animate-spin text-6xl" /> 
      </div>
      : 
      
      <div className="container mx-auto px-4 py-8 pt-10 h-full">
        {!moviesDisplayed ? <p className='text-center text-white text-3xl font-bold'>Search for your favorite Movie!</p> : <p className='text-center text-white text-3xl font-bold'>Search results for: {searchedFor}</p>}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 m-8">
        {searchResults.map((movie) => (
                        <div className="bg-neutral-800 rounded-lg shadow-lg p-2 hover:scale-101 hover:shadow-2xl hover:bg-neutral-700 transition cursor-pointer flex flex-col items-center w-full border-1 border-neutral-600 text-center" 
                        
                        key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                            <img alt={movie.title}
                            className="w-full h-64 object-cover rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <p className='text-white font-bold py-4'>{movie.title}</p>
                            </Link>
                        </div>
                    ))}
        </div>
        </div>}
        </div>
    </>
    
  )
}

export default Search