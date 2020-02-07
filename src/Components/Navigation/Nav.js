import React from "react"
import "./_Nav.scss"

const Nav = () => {
    return (
        <nav>
            <div id="mainbox" onClick={openFunction}>&#9776;</div>

            <div id="menu" className="sidemenu">
                <button className="closebtn" onClick={closeFunction}>&times;</button>
                <a href="#" onClick={closeFunction}>Home</a>
                <a href="#" onClick={closeFunction}>About</a>
                <a href="#" onClick={closeFunction}>Projects</a>
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