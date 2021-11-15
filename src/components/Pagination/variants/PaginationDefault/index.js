import React from 'react'
import { Link } from 'gatsby'
import { FaAngleDoubleRight } from 'react-icons/fa'

const PaginationDefault = ({ pagination = null }) => {
  let links = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Heart Basics',
      url: '/',
    },
    {
      text: 'Heart Anatomy',
      url: '/',
    },
  ]
  links = pagination ?? links
  const length = links.length
  return (
    <ul className="paginationDefault">
      {links.map((link, index) => {
        const { text, url } = link
        const counter = index + 1
        if (counter !== length) {
          return (
            <li className="paginationDefault__item" key={index}>
              <Link to={url} className="paginationDefault__link">
                {text}
              </Link>
              <FaAngleDoubleRight className="paginationDefault__icon" />
            </li>
          )
        } else {
          return (
            <li className="paginationDefault__item" key={index}>
              <Link to={url} className="paginationDefault__link">
                {text}
              </Link>
            </li>
          )
        }
      })}
    </ul>
  )
}

export default PaginationDefault
