import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (<ul className="nav">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Главная</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Users">Страница участника</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Bookmark">Избранные</Link>
        </li>
    </ul>
    );
};
export default NavBar;
