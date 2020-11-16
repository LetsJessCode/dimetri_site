import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import Dimetri from '../Img/Dimetri.jpg'

export class NavBar extends Component {
    render() {
        return (
    <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={Dimetri}
            className="nav-logo"
            alt="Logo."
            onClick={this.scrollToTop}/>
          
            <ul className="nav-items">
                <Link activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}> Bio </Link> <br />

                    <Link activeClass="active"
                    to="film"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}> TV/Film </Link> 
                    <br />

                    <Link activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}> Contact </Link> 
                    <br />
                    
                    <Link activeClass="active"
                    to="listen"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}> Listen </Link> 
                    <br />
                {/* <Link >TV/Film /></Link>><br /> */}
                {/* <NavLink to="/contact">Contact</NavLink> <br /> */}
                {/* <NavLink to="/listen">Listen</NavLink> <br /> */}
            </ul>
        </div>
    </nav>
        )
    }
}

export default NavBar;
