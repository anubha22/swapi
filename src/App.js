import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { 
  WelcomePage,
  UserProfilePage, 
  SwapiPage,
  SwapiFilmListPage,
} from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Go to home page</Link> | 
        <Link to="/user">Go to user profile page</Link> | 
        <Link to="/swapi">Go to Star Wars API</Link> |
        <Link to="/film">Go to Star Wars Film</Link>

        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/user">
          <UserProfilePage />
        </Route>
        <Route path="/swapi">
          <SwapiPage />
        </Route>
        <Route path="/film">
          <SwapiFilmListPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
