import React, { Component } from 'react';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { fetchFilms, getCharacters } from '../../apis/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }

  componentDidMount = () => {
    fetchFilms().then(response => this.setState({
      films: response
    }))
    getCharacters('https://swapi.co/api/films/1').then(response => console.log(response))
    // getCharacter('https://swapi.co/api/people/1/')
    // getFilms().then(response => console.log(response))
  }

  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <Route exact path='/' render={
      //       () => {
      //         return (<LoginForm link={<Link to='/moviesContainer'></Link>} />)
      //       }
      //     } />
      //     <Route exact path='/moviesContainer' component={MoviesContainer} />
      //     <h1>SWAPI Trivia</h1>
      //   </div>
      // </Router>
      <MoviesContainer films={this.state.films} />
    );
  }
}

export default App;
