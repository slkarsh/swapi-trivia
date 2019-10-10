import React, { Component } from 'react';
import './App.scss';
import LoginForm from '../LoginForm/LoginForm'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { fetchFilms, getCharacters } from '../../apis/apiCalls';
import NavBar from '../NavBar/NavBar';
import SelectedMovie from '../SelectedMovie/SelectedMovie'


class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [{title: 'hello', episode_id: 1, release_date: 2001 }, {title: 'hello2', episode_id: 2, release_date: 2002 }, {title: 'hello3', episode_id: 3, release_date: 2003 }, {title: 'hello4', episode_id: 4, release_date: 2005 }],
      userInfo: []
    }
  }

  // componentDidMount = () => {
  //   fetchFilms().then(response => this.setState({
  //     films: response
  //   }))
    // getCharacters('https://swapi.co/api/films/1').then(response => console.log(response))
    // getCharacter('https://swapi.co/api/people/1/')
    // getFilms().then(response => console.log(response))
  // }

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
          <Route exact path='/movies' render={
            () => { return (<MoviesContainer films={this.state.films} />) }
          } />
          <Route exact path='/movies/:episode' render={({match}) => {
           return <SelectedMovie />
          } } />
        </div>
      </Router>
    );
  }
}

export default App;
