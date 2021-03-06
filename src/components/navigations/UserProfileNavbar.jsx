import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

const UserProfileNavbar = ({ user }) => {

    const initialClasses = "navbar navbar-expand-lg navbar-dark bg-dark mb-4 p-4"
    const scrolledClasses = "navbar navbar-expand-lg navbar-dark bg-dark mb-4 p-4 fixed-top"

    const [navClasses, setNavClasses] = useState(initialClasses)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > window.innerHeight / 2) {
            setNavClasses(scrolledClasses)
        }
        else {
            setNavClasses(initialClasses)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <nav className={navClasses}>
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/repositories" className="nav-link card-link">Repositories ({user.public_repos})</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/gists" className="nav-link card-link">Gists ({user.public_gists})</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/followers" className="nav-link card-link">Followers ({user.followers})</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="activeSectionNav" to="/followings" className="nav-link card-link">Following ({user.following})</NavLink>
                </li>
            </ul>
        </nav>
    )

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(UserProfileNavbar)