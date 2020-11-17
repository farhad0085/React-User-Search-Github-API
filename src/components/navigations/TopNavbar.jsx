import React from 'react'
import { NavLink } from "react-router-dom";

const TopNavbar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <NavLink className="navbar-brand" to="/">React Github</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}


export default TopNavbar