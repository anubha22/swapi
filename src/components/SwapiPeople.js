import React, {useState, useEffect} from 'react';

export const SwapiPeople = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.results);
                setPeople(result.results);
            }
        )
    }, [])

    return(
        <div>
            <ul>
                {people.map(person => (
                    <li key={person.name}
                        style={{
                            listStyleType: "none",
                            padding: "10px", 
                            margin: "auto 400px",
                        }}
                    >
                        <p><strong>Name:</strong> {person.name} </p>
                        <p><strong>Gender:</strong> {person.gender}</p>
                        <p><strong>Eye colour:</strong> {person.eye_color}</p>
                        <p><strong>Hair colour:</strong> {person.hair_color}</p>
                        <p><strong>Height:</strong> {person.height}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}