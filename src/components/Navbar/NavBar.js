import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './navBar.css'

export const NavBar = (props) => {
  return (
    <div className="column is-half is-offset-one-quarter">
      <div className="title">Frapp, Apply for unique Internships</div>
      <nav className="navbar ">
        <div id="navMenuExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink exact activeClassName="activeLink" className="navbar-item navMain" to='/'>List</NavLink>
            <NavLink activeClassName="activeLink" className="navbar-item topPadding navMain" to='/favorites'>Favourites</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}