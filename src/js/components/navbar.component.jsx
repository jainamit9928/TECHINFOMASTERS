import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
const homeClass = location.pathname === "/" ? "active" : ""
const searchClass = location.pathname.match(/^\/search/) ? "active" : ""
return (
 <ul className="topnav">
            <li><Link className={homeClass} to="/">Home</Link></li>
            <li><Link className={searchClass} to="/search/data">Search</Link></li>
        </ul>
)
}
  
export default NavBar