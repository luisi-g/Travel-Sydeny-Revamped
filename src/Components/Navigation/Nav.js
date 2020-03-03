import React from "react"
import "./_Nav.scss"
import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <div id="mainbox" onClick={openFunction}>&#9776;</div>

            <div id="menu" className="sidemenu">
                <button className="closebtn" onClick={closeFunction}>&times;</button>
                <NavLink to="/" onClick={closeFunction} activeClassName="active" >Home</NavLink>
                <NavLink to="/explore" onClick={closeFunction} activeClassName="active" >Explore</NavLink>
                {/* <a href="#" onClick={closeFunction}>Projects</a> */}
                {/* <a activeClassName="active" onClick={closeFunction}>Contact</a> */}
            </div>
        </nav>
    )
}

const openFunction = () => {
    document.getElementById("menu").classList.add("menu__show")
    document.getElementById("mainbox").classList.add("mainbox__show")
}

const closeFunction = () => {
    document.getElementById("menu").classList.remove("menu__show");
    document.getElementById("mainbox").classList.remove("mainbox__show")
}


export default Nav