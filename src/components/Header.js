import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div style={{backgroundColor: "lightgray", padding: "10px"}}>
    <header>
      <h1>Star Wars API App</h1>
      <ul>
        <li style={{listStyleType: "none", display: "inline-block", padding: "0 10px"}}>
          <Link to="/">Home </Link>
        </li>
        <li style={{listStyleType: "none", display: "inline-block", padding: "0 10px"}}>
          <Link to="/swapi">Star Wars API</Link> 
        </li>
        <li style={{listStyleType: "none", display: "inline-block", padding: "0 10px"}}>
          <Link to="/film">Star Wars Film</Link> 
        </li>
        <li style={{listStyleType: "none", display: "inline-block", padding: "0 10px"}}>
          <Link to="/register">Register</Link>
        </li>
        <li style={{listStyleType: "none", display: "inline-block", padding: "0 10px"}}>
          <Link to="/people">People</Link>
        </li>
        <li style={{listStyleType: "none", display: "inline-block", padding: "0 10px"}}>
          <Link to="/select">Select a person</Link>
        </li>
        <li style={{listStyleType: "none", display: "inline-block", padding: "0 10px"}}>
          <Link to="/person-form">Person Form</Link>
        </li>
        <li style={{
          listStyleType: "none", 
          display: "inline-block", 
          padding: "0 10px", 
          float: "right",
        }}>
          <Link to="/archived">Archived pages</Link> 
        </li>
      </ul>
      
       
      
      
    </header>
  </div>
);
