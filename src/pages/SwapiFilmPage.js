import React from 'react';

export const SwapiFilmPage = ({films}) => (
    films.map(film => 
        <div>
            <h3> Title: {film.title} </h3>
            <p> Director: {film.director} </p>
            <p> Release date: {film.release_date}</p>
        </div>
    )
)
    
