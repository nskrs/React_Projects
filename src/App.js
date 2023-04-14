import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './Movie/MoviesList';
import AddMovie from './Movie/AddMovies';
import './App.css';

function App() {

  const [movies,setMovies] = useState([])
  const [isloading,setisLoading] = useState(false)
  const [error,setError] = useState(null)

  useEffect(()=> {
    fetchMovieHandler();
  },[])


  async function fetchMovieHandler (){
    setisLoading(true)
    setError(null)

    try{

      const response = await fetch('https://swapi.dev/api/films')

      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const data = await response.json()

  
      const transformedMovies = data.results.map(movieData => {
        return {
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseDate:movieData.release_date
        }
      })
      setMovies(transformedMovies)
    }
    catch(error){
      setError(error.message)
    }

    setisLoading(false)
  }

  function addMovieHandler(movie){
    console.log(movie)
  }


return (
  <React.Fragment>
    <AddMovie onAddMovie={addMovieHandler} />
    <section>
      <button onClick={fetchMovieHandler} >Fetch Movies</button>
    </section>
    <section>
    {!isloading && movies.length >0 && <MoviesList movies={movies} />}
        {!isloading && movies.length === 0 && !error && <p>No movies to show.</p>}
        {isloading && <p>Loading....</p>}
        {!isloading && error && <p>{error}</p>}
    </section>
  </React.Fragment>
);
}
export default App;
