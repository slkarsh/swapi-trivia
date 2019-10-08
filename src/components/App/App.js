import React from 'react';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MoviesContainer from '../MoviesContainer/MoviesContainer';



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' render={
          () => {
            return (<LoginForm link={<Link to='/moviesContainer'></Link>} />)
          }
        } />
         <Route exact path='/moviesContainer' component={MoviesContainer} />
       
      <h1>SWAPI Trivia</h1>
    </div>
    </Router>
   
  );
}

export default App;
