import React, {useState, useEffect} from 'react';
import {SwapiFilmPage} from './SwapiFilmPage'

export const SwapiFilmListPage = () => {
    const [films, setFilm] = useState([]);
    const [isLoaded, setIsLoaded]  = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
        .then(res => res.json())
        .then(
            (result) => {
                setFilm(result.results)
                console.log(result)
                setIsLoaded(true)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    return(
        <>
            <h1>List of Films</h1>
            <SwapiFilmPage films={films} error={error} isLoaded={isLoaded}/>
        </>
    )

}