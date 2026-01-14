import React from 'react'
import { useState, useEffect } from 'react'
import { data } from 'react-router-dom'


const Home = () => {

const [movies, setMovies] = ([])

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
            console.log(data)
        } 
        catch (err) {
            console.log(err)
        }

        
    }

useEffect(() => {
    fetchMovie()
}, [])



  return (
    <>
        <div>Home</div>
    </>
    
  )
}

export default Home