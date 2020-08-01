import React,{useContext} from "react";
import {MovieContext} from "./MovieContext.js"
import Movie from "./Movie.js"

function MovieList(){
  const [movieList,setMovieList]= useContext(MovieContext)
  return(
      <div>
            {
                movieList.map(
                    movie =>(
                    <Movie name={movie.name} desc={movie.desc} price={movie.price}/>
                    )
                )
            };
    </div>
  );
}

export default MovieList;