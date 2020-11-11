import React, {useState, useEffect} from 'react';

export const UserProfilePage = () => {
    const [user, setUser] = useState({ name: {} });

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('https://randomuser.me/api')
            const data = await response.json();
            setUser(data.results[0]);
        }
        fetchUser();
    }, [])

    return(
        <div>
            <h3>{user.name.title} {user.name.first} {user.name.last} </h3>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}