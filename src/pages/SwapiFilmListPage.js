import React, {useState, useEffect} from 'react';
import {SwapiFilmPage} from './SwapiFilmPage'

export const SwapiFilmListPage = () => {
    const [films, setFilm] = useState({ film: {} });

    useEffect(() => {
        const fetchFilm = async () =>{
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();
            setFilm(data.results);
            console.log(data);
        }
        fetchFilm();
    }, [])

    // useEffect(() => {
    //     fetch('https://swapi.dev/api/films/')
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setFilm(result)
    //             console.log(result)
    //         }
    //     )
    // },[])

    return(
        <>
            <h1>List of Films</h1>
            <SwapiFilmPage films={films} />
        </>
    )

}