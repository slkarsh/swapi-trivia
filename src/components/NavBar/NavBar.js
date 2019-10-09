import React, { Component } from 'react'
import './NavBar.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';


const NavBar = ({name, quote, skill}) => {
    return (
        <nav>
            <header>
                <ul>
                    <li>{name}</li>
                    <li>{quote}</li>
                    <li>{skill}</li>
                </ul>
            </header>
            <footer>
                <ul>
                <li>
                    <Link to='/moviesContainer'>
                        Movies
                    </Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        Favorites
                    </Link>
                </li>
                </ul>
            </footer>
        </nav>
    )
}


export default NavBar