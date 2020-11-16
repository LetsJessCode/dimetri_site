import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <nav>
            <Link to="/">Bio</Link> <br />
            <Link to="/">TV/Film</Link> <br />
             <NavLink to="/contact">Contact</NavLink> <br />
             <NavLink to="/listen">Listen</NavLink> <br />
            </nav>
        )
    }
}

export default NavBar;
