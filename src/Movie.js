import React from 'react';

function Movie({name,desc,price}){
    return(
        <div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <p>{price}</p>
        </div>
    );
}

export default Movie;