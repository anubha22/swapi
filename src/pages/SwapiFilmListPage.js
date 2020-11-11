import React, {useState, useEffect} from 'react';
import {SwapiFilmPage} from './SwapiFilmPage'

export const SwapiFilmListPage = () => {
    const [films, setFilm] = useState({ film: {} });
    const [isLoaded, setIsLoaded]  = useState(false);
    const [error, setError] = useState(null)

    // useEffect(() => {
    //     const fetchFilm = async () =>{
    //         const response = await fetch('https://swapi.dev/api/films/');
    //         const data = await response.json();
    //         setFilm(data.results);
    //         console.log(data);
    //     }
    //     fetchFilm();
    // }, [])

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setFilm(result)
                console.log(result)
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
            {/* <SwapiFilmPage films={films} /> */}
        </>
    )

}