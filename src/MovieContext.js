import React,{useState,createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = props =>{
    const[movieList, setMovieList]=useState([
        {
            "name":"movie 1",
            "desc":"desc 1",
            "price":"Rs. 1",
        },  
        {
            "name":"movie 2",
            "desc":"desc 2",
            "price":"Rs. 2",
        },
        {
            "name":"movie 3",
            "desc":"desc 3",
            "price":"Rs. 3",
        },
        {
            "name":"movie 4",
            "desc":"desc 4",
            "price":"Rs. 4",
        }
    ]);

    return(
        <MovieContext.Provider value={[movieList,setMovieList]}>
            {props.children}
        </MovieContext.Provider>
    );
}