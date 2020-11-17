import React from 'react'
import { NavLink } from "react-router-dom";

const UserProfileNavbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 p-4">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/repositories" className="nav-link card-link">Repositories</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/gists" className="nav-link card-link">Gists</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/starred" className="nav-link card-link">Starred</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/followers" className="nav-link card-link">Followers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/followings" className="nav-link card-link">Following</NavLink>
                </li>
            </ul>
        </nav>
    )

}


export default UserProfileNavbar