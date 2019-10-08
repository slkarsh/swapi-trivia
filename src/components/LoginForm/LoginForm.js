import React, { Component } from 'react';
import './LoginForm.scss';


class LoginForm extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <form>
                <label>Name</label>
                <input 
                type='text' 
                name='name' 
                value=''
                placeholder='Enter name here'
            />
            <label>Quote</label>
            <input 
                type='text' 
                name='quote' 
                value=''
                placeholder='Enter your favorite Star Wars quote'
            />
            <label>Skill Level</label>
            <select name="skill-level">
		        <option value='novice'>Novicee</option>
		        <option value='intermediate'>Intermediate</option>
		        <option value='expert'>Expert</option>
	        </select>
            <button type='button'>Submit</button>
            </form>
        )
    }
}

export default LoginForm