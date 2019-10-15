import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.scss';
import { fetchFilms, getCharacters } from '../../apis/apiCalls';
import LoginForm from '../LoginForm/LoginForm'
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import NavBar from '../NavBar/NavBar';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import Favorites from '../Favorites/Favorites';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      userInfo: [],
      currentCharacters: [],
      favorites: []
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
      .catch(error => console.log('error', error))
  }

  checkFavorites = characterObj => {
    let faveNames = this.state.favorites.map(favorite => favorite.name)
    return faveNames.includes(characterObj.name)
  }

  handleMovieChange = () => {
    if (this.state.currentCharacters.length !== 0) {
      this.setState({ currentCharacters: [] })
    }
  }

  handleFavorite = (characterObject) => {
    const editedFaves = this.state.favorites.filter(favorite => favorite.name !== characterObject.name)
    !this.checkFavorites(characterObject)
      ? this.setState({ favorites: [...this.state.favorites, characterObject] })
      : this.setState({ favorites: editedFaves })
  }

  wipeUserInfo = () => {
    this.setState({
      userInfo: []
    })
  }

  render() {
    const { currentCharacters, films, userInfo, favorites } = this.state;
    const { name, quote, skillLevel } = userInfo;
    const toggleNavBar =
      !Array.isArray(userInfo) &&
      <NavBar
        name={name}
        quote={quote}
        skill={skillLevel}
        handleMovieChange={this.handleMovieChange}
        favorites={favorites}
        wipeUserInfo={this.wipeUserInfo}
      />;

    return (
      <div className="App">
        {toggleNavBar}
        <Route exact path='/' render={
          () => { return (<LoginForm addUserInfo={this.addUserInfo} />) }
        } />
        <Route exact path='/favorites' render={
          () => {
            return !name
              ? <Redirect to='/' />
              : <Favorites
                favorites={favorites}
                handleFavorite={this.handleFavorite}
                checkFavorites={this.checkFavorites}
              />
          }
        } />
        <Route exact path='/movies' render={() => {
          return !name
            ? <Redirect to='/' />
            : <MoviesContainer
              films={films}
              getDetails={this.getDetails} />
        }
        } />
        <Route exact path='/movies/:episode' render={({ match }) => {
          const { episode } = match.params
          const filteredMovie = films.find(film => film.episode_id === parseInt(episode))
          return !name
            ? <Redirect to='/' />
            : <SelectedMovie
              characters={currentCharacters}
              movie={filteredMovie}
              handleFavorite={this.handleFavorite}
              checkFavorites={this.checkFavorites}
            />
        }} />
      </div>
    );
  }
}

App.propTypes = {
  addUserInfo: PropTypes.func,
  getDetails: PropTypes.func,
  name: PropTypes.string,
  quote: PropTypes.string,
  skillLevel: PropTypes.string,
  films: PropTypes.array,
  currentCharacters: PropTypes.array,
  userInfo: PropTypes.string,
  favorites: PropTypes.array,
};

export default App;