import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import logo from '../../../../assets/images/logo.svg'
import Nav from './Nav'
import { Link } from 'gatsby'

const NavbarDefault = ({ navLinks = null }) => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobile, setMobile] = useState(false)
  const toggleMobile = () => {
    setMobile(!mobile)
  }
  return (
    <nav className="navbarDefault">
      <div className="navbarDefault__container">
        <div className="navbarDefault__top">
          <Link to="/">
            <img
              src={logo}
              className="navbarDefault__logo"
              alt="YourHeartvalve logo"
            />
          </Link>
          <button className="navbarDefault__toggle" onClick={toggleMobile}>
            <FiMenu />
          </button>
        </div>
        <Nav
          navLinks={navLinks}
          mobile={mobile}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />
      </div>
    </nav>
  )
}

export default NavbarDefault
