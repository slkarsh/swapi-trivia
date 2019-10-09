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
      films: []
    }
  }

  componentDidMount = () => {
    fetchFilms().then(response => this.setState({
      films: response
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>SWAPI TRIVIA</h1>
          <Route exact path='/' render={
            () => {
              return (<LoginForm link={<Link to='/moviesContainer'></Link>} />)
            }
          } />
          <Route exact path='/moviesContainer' component={MoviesContainer} />
        </div>
      </Router>
      // <MoviesContainer films={this.state.films} />
    );
  }
}

export default App;
