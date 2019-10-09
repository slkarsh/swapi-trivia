import React, { Component } from 'react';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { fetchFilms } from '../../apis/apiCalls';

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
  }

  addUserInfo = (userData) => {
    this.setState({ userInfo: userData })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={
            () => { return (<LoginForm addUserInfo={this.addUserInfo} />) }
          } />
          <h1>SWAPI Trivia</h1>
          <Route exact path='/moviesContainer' render={
            () => { return (<MoviesContainer films={this.state.films} />) }
          } />
        </div>
      </Router>
    );
  }
}

export default App;
