import React from 'react'
import { Link } from 'gatsby'

const SidebarDefault = ({ sidebarLinks = null }) => {
  if (!sidebarLinks) return
  return (
    <aside className="sidebarDefault">
      <ul className="sidebarDefault__list">
        {sidebarLinks.map((link, index) => {
          return (
            <>
              {link.url === '/' ? (
                <li className="sidebarDefault__item sidebarDefault__item--headline" key={index}>
                    {link.name}
                </li>
              ) : (
                <li className="sidebarDefault__item" key={index}>
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
      </ul>
    </aside>
  )
}

export default SidebarDefault
