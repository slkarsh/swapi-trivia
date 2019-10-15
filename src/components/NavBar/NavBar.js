import React from 'react'
import './NavBar.scss';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ name, quote, skill, handleMovieChange, favorites, wipeUserInfo }) => {
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
              <NavLink to='/movies' className='nav-link' onClick={(e) => handleMovieChange()}>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to='/favorites' className='nav-link'>
                Favorites: {favorites.length}
              </NavLink>
            </li>
          </div>
          <li>
            <Link to='/' className='nav-link-logout' onClick={() => wipeUserInfo()}>
              Log out
                        </Link>
          </li>
        </ul>
      </footer>
    </nav>
  )
}

NavBar.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  skill: PropTypes.string
};

export default NavBar