import React from 'react'

import { Link } from 'react-router-dom'
import Badge from "./badge";

const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          <Badge context="Главная" color='info' />

        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Bookmark">
          <Badge context="Избранные" color='info' />
        </Link>
      </li>
    </ul>
  )
}
export default NavBar
