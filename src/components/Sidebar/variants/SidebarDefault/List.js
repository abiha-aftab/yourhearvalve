import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { dropdownVariant } from '../../../../assets/animations/animations'

const List = ({ sidebarLinks }) => {
  return (
    <motion.ul
      variants={dropdownVariant}
      initial="start"
      animate="end"
      exit="exit"
      className="sidebarDefault__list"
    >
      {sidebarLinks.map((link) => {
        return (
          <>
            {link.url === '/' ? (
              <li
                className="sidebarDefault__item sidebarDefault__item--headline"
                key={link.url}
              >
                {link.name}
              </li>
            ) : (
              <li className="sidebarDefault__item" key={link.url}>
                <Link
                  activeClassName="sidebarDefault__link--active"
                  className="sidebarDefault__link"
                  to={link.url}
                >
                  {link.name}
                </Link>
              </li>
            )}
          </>
        )
      })}
    </motion.ul>
  )
}

export default List
