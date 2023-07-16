import React from 'react'
import searchIcon from '../assets/si.png'
import logo from '../assets/ed.png'

const Nav = () => {
  return (
    <div>
         <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src={logo} alt="EDYODA Logo" />
        </div>
        <div className="dropdown">
          <button className="dropdown-btn">Courses</button>
          {/* Dropdown content */}
          <div className="dropdown-content">
            <a href="#">Course 1</a>
            <a href="#">Course 2</a>
            <a href="#">Course 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropdown-btn">Programs</button>
          {/* Dropdown content */}
          <div className="dropdown-content">
            <a href="#">Program 1</a>
            <a href="#">Program 2</a>
            <a href="#">Program 3</a>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="search">
          <img src={searchIcon} alt="Search Icon" />
        </div>
        <button className="lg">Login</button>
        <button className="join-now-btn blue">Join Now</button>
      </div>
    </nav>
    </div>
  )
}

export default Nav