import React, {useState,useContext} from "react";
import {MovieContext} from "./MovieContext";

function AddMovie(){

    const [movieName,setMovieName]=useState();
    const [movieDescription,setMovieDescription]=useState();
    const [moviePrice,setMoviePrice]=useState();
    const [movieList,setMovieList]= useContext(MovieContext);

    const updateMovieName=function(e){
        setMovieName(e.target.value);
    }
    const updateMovieDescription=function(e){
        setMovieDescription(e.target.value);
    }
    const updateMoviePrice=function(e){
        setMoviePrice(e.target.value);
    }
    const addMovie=e=>{
        e.preventDefault();
        setMovieList(prevMovie=> [...prevMovie,{"name":movieName,"desc":movieDescription,"price":moviePrice}])
        console.log(movieName+" "+ movieDescription+" "+moviePrice);
    }

    return(
        <div>
            
            <form onSubmit={addMovie}> 
                <input placeholder="movie name" value={movieName} onChange={updateMovieName}/>
                <input placeholder="movie description" value={movieDescription} onChange={updateMovieDescription}/>
                <input placeholder="movie price" value={moviePrice} onChange={updateMoviePrice}/>
                <button type="submit">submit</button>
            </form>

        </div>
    )

}

export default AddMovie;