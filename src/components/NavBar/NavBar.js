import React from 'react'
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = ({ name, quote, skill }) => {
    return (
        <nav>
            <header>
                <ul>
                    <div className='user-info-nav'>
                        <li className='user-info'>Name: <span>{name}</span></li>
                        <li className='user-info'>Favorite Quote: <span>{quote}</span></li>
                        <li className='user-info'>Skill Level: <span>{skill}</span></li>
                    </div>
                </ul>
            </header>
            <footer>
                <ul>
                    <div>
                        <li>
                            <Link to='/movies' className='nav-link'>
                                Movies
                        </Link>
                        </li>
                        <li>
                            <Link to='/favorites' className='nav-link'>
                                Favorites
                        </Link>
                        </li>
                    </div>
                    <li>
                        <Link to='/' className='nav-link-logout'>
                            Log out
                        </Link>
                    </li>
                </ul>
            </footer>
        </nav>
    )
}


export default NavBar