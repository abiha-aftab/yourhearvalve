import React from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { dropdownVariant } from '../../../../assets/animations/animations'

const Dropdown = ({
  activeDropdown,
  setActiveDropdown,
  id,
  link: { name, url, links },
}) => {
  const toggleDropdown = (e, id) => {
    e.preventDefault()
    if (activeDropdown === id) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(id)
    }
  }

  const isBrowser = () => typeof window !== "undefined"

  return (
    <li className="navbarDefault__nav-item">
      <a
        href={url}
        className={
          activeDropdown === id || (isBrowser() && window.location.pathname.indexOf(url) !== -1)
            ? 'navbarDefault__nav-link navbarDefault__nav-link--active'
            : 'navbarDefault__nav-link'
        }
        onClick={(e) => toggleDropdown(e, id)}
      >
        {name} {activeDropdown === id ? <FaCaretUp /> : <FaCaretDown />}
      </a>
      <AnimatePresence>
        {activeDropdown === id && (
          <motion.ul
            key={id}
            variants={dropdownVariant}
            initial="start"
            animate="end"
            exit="exit"
            className="navbarDefault__dropdown"
          >
            {links.map((link, index) => {
              const { name, url } = link
              return (
                <li className="navbarDefault__dropdown-item" key={index}>
                  <a href={url} className="navbarDefault__dropdown-link">
                    {name}
                  </a>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Dropdown
