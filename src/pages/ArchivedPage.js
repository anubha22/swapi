import React from 'react';
import { Link } from 'react-router-dom';

export const ArchivedPage = () => (
    <div>
        <h2>All Archived Pages</h2>
        <ul>
            <li><Link to="/archived/form">Form Page</Link></li>
            <li><Link to="/archived/hook">Hook News Page</Link></li>
            <li><Link to="/archived/toggle">Toogle State Page</Link></li>
            <li><Link to="/archived/user">User Profile Page</Link></li>
        </ul>
    </div>
);
