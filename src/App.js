import React,{useContext} from "react";
import MovieList from "./MovieList.js"
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import {MovieProvider} from "./MovieContext"

function App(){
  return(
    <div>
    <MovieProvider>
      <Nav/>
      <AddMovie/>
      <MovieList/>
    </MovieProvider>
    </div>
    
  );
}

export default App;