//import '/.movies.css';
function Movies(props){
    const list= props.movies.map(movie=>{
        return <li key={movie.id}>{movie.name}
        <br></br>
        {movie.description}</li>
    })
    return(
        <ul>{list} </ul>
    );

    
}
export default Movies;