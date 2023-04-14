import React, { useRef } from 'react'
import classes from './AddMovies.module.css'

const AddMovie = (props) => {

    const titleRef = useRef('')
    const openingTextRef = useRef('')
    const releaseDateRef = useRef('')


    function submitHandler(event){
        event.preventDefault()

        const movie = {
            title:titleRef.current.value,
            openingText:openingTextRef.current.value,
            releaseDate:releaseDateRef.current.value
        }

        props.onAddMovie(movie)

        event.target.reset()

    }


  return (
    <div className={classes.moviess}>
    <form className={classes.movie} onSubmit={submitHandler}>
        
        <label htmlFor="movietitle">Title</label>
        <input type="text" id='title' ref={titleRef} />
       
        <label htmlFor="openingtext">Opening Text</label>
        <input type="text" id='openingtext' ref={openingTextRef} />
        
        <label htmlFor="releasedate">Released Date</label>
        <input type="text" id='releasedate' ref={releaseDateRef} />
        
        <section>
            <button>Add Movie</button>
            </section>
    </form>
    </div>
  )
}

export default AddMovie
