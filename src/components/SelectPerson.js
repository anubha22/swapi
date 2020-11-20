import React, { useState, useEffect } from 'react';

export const SelectPerson  = (props) => {
    const [id, setId]  =  useState(props.match.params.id);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(result => {
            // console.log(result);
            setPersons(result);
        })
    }, [id])

    
    return(
        <div>
            {console.log(persons)}
            <h2>You have selected the value <span style={{color: "red"}}>{id}</span></h2>
            <p>{persons.name}</p>
            <p>{persons.gender}</p>
            {persons.detail === "Not found" ? <p>Does not exists</p> : null}

        </div>
    )
}