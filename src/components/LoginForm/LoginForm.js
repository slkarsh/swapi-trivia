import React, { Component } from 'react';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      skillLevel: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (event) => {
    const { name, quote, skillLevel } = this.state;
    if (!name || !quote || !skillLevel) {
      event.preventDefault()
    } else {
      this.props.addUserInfo(this.state)
    }
  }

  render() {
    const { name, quote, skillLevel } = this.state
    return (
      <form>
        <h1>STAR WARS HUB</h1>
        <h4>Join the force</h4>
        <label>Name</label>
        <input
          type='text'
          name='name'
          className='input-1'
          value={name}
          placeholder='Enter name here'
          onChange={(e) => this.handleChange(e)}
        />
        <label>Quote</label>
        <input
          type='text'
          name='quote'
          className='input-2'
          value={quote}
          placeholder='Enter your favorite Star Wars quote'
          onChange={(e) => this.handleChange(e)}
        />
        <label>Skill Level</label>
        <select
          name="skillLevel"
          onChange={(e) => this.handleChange(e)}
        >
          <option value=''>Select Skill Level</option>
          <option value='Jedi Initiate'>Jedi Initiate</option>
          <option value='Jedi Knight'>Jedi Knight</option>
          <option value='Jedi Master'>Jedi Master</option>
        </select>
        <div>
          <Link to="/movies" >
            <button
              type='button'
              onClick={(event) => this.handleClick(event)}>
              Submit
            </button>
          </Link>
        </div>
      </form >
    )
  }
}

LoginForm.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  skillLevel: PropTypes.string
};

export default LoginForm