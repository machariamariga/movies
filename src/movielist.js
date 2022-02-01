import { useState } from 'react';
//import './movielist.css';
import {movies} from './movie';
import Movies from './movies.js'

function ListMovies(){
    const [movies1,setMovies]=useState(movies);
    console.log(movies1);

    return (
        <div>
            <h1> MovieList</h1>
            <Movies movies={movies} />
        </div>
        
    )
    }

export default ListMovies;