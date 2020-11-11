import React from 'react';

const SimpsonList = ({people}) => (
    people.map(person => 
        <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Job: {person.job}</p>
        </div>
        )
        
    
)

export default SimpsonList;