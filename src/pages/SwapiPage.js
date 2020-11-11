import React, {useState, useEffect} from 'react';

export const SwapiPage = () => {
 const [people, setPeople] = useState({ people: {} });

 useEffect(() => {
    const fetchUser = async () => {
        const response = await fetch('https://swapi.dev/api/people/1/');
        const data = await response.json();
        setPeople(data);
        console.log(data);
    } 
    fetchUser();
 }, [])

 return(
     <div>
        <h1>SwapiPage</h1>
        <h3>Name: {people.name}</h3>
        <p>Gender: {people.gender}</p>
        <p>Homeworld: {people.homeworld}</p>
        {/* <p>Starship: {people.starships[0]}</p> */}
     </div>
 )
}