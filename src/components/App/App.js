import React, { Component } from 'react';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { fetchFilms, getCharacters } from '../../apis/apiCalls';
import NavBar from '../NavBar/NavBar';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import Favorites from '../Favorites/Favorites';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      userInfo: [],
      currentCharacters: []
    }
  }

  componentDidMount = () => {
    fetchFilms().then(response => this.setState({
      films: response
    }))
  }

  addUserInfo = (userData) => {
    this.setState({ userInfo: userData })
  }

  getDetails = (id) => {
    return getCharacters(`https://swapi.co/api/films/${id}`)
      .then(response => this.setState({ currentCharacters: response }))
      .then(() => console.log('done!'))
      .catch(error => console.log('error', error))
  }

  render() {
    const { currentCharacters, films, userInfo, favorites } = this.state;
    const { name, quote, skillLevel } = userInfo;
    return (
      <Router>
        <div className="App">
          <NavBar name={name} quote={quote} skill={skillLevel} />
          <Route exact path='/' render={
            () => { return (<LoginForm addUserInfo={this.addUserInfo} />) }
          } />
          <Route exact path='/favorites' render={
            () => { return (<Favorites characters={favorites} />) }
          } />
          <Route exact path='/movies' render={
            () => { return (<MoviesContainer films={films} getDetails={this.getDetails} />) }
          } />
          <Route exact path='/movies/:episode' render={({ match }) => {
            const { episode } = match.params
            const filteredMovie = films.find(film => film.episode_id === parseInt(episode))
            return <SelectedMovie characters={currentCharacters} movie={filteredMovie} />
          }} />
        </div>
      </Router>
    );
  }
}

export default App;