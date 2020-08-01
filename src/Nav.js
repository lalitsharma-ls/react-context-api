import React,{useContext} from "react";
import {MovieContext} from "./MovieContext";


function Nav(){
    const [movieList, setMovieList]= useContext(MovieContext)
    return(
        <nav>
            No. of movies: {movieList.length}
        </nav>
    );
}

export default Nav;