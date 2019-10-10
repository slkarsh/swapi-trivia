import React, { Component } from 'react';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { fetchFilms, getCharacters } from '../../apis/apiCalls';
import NavBar from '../NavBar/NavBar';


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      userInfo: []
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

  addUserInfo = (userData) => {
    this.setState({ userInfo: userData })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar name={this.state.userInfo.name} quote={this.state.userInfo.quote} skill={this.state.userInfo.skillLevel} />
          <Route exact path='/' render={
            () => { return (<LoginForm addUserInfo={this.addUserInfo} />) }
          } />
          <Route exact path='/moviesContainer' render={
            () => { return (<MoviesContainer films={this.state.films} />) }
          } />
        </div>
      </Router>
    );
  }
}

export default App;
