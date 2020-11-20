import React from 'react';

export const SwapiFilmPage = ({films, error, isLoaded}) => {
    if(error) {
        return <div>Error : {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            films.map(film => 
                <div key={film.title}>
                    <h3> Title: {film.title} </h3>
                    <p> Director: {film.director} </p>
                    <p> Release date: {film.release_date}</p>
                </div>
            )
        )
    }
}

