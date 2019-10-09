import React, { Component } from 'react';
import './LoginForm.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

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

    handleClick = () => {
        this.props.addUserInfo(this.state)
    }


    render() {
        return (
            <form>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    className='input-1'
                    value={this.state.name}
                    placeholder='Enter name here'
                    onChange={(e) => this.handleChange(e)}
                />
                <label>Quote</label>
                <input
                    type='text'
                    name='quote'
                    className='input-2'
                    value={this.state.quote}
                    placeholder='Enter your favorite Star Wars quote'
                    onChange={(e) => this.handleChange(e)}
                />
                <label>Skill Level</label>
                <select
                    name="skillLevel"
                    onChange={(e) => this.handleChange(e)}
                >
                    <option value=''>Select Skill Level</option>
                    <option value='novice'>Novicee</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='expert'>Expert</option>
                </select>
                <Link to="/moviesContainer" >
                    <button type='button' onClick={this.handleClick}>Submit</button>
                </Link>
            </form >
        )
    }
}

export default LoginForm