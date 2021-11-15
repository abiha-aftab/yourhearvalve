import React from 'react'
import { Link } from 'gatsby'

const FooterDefault = ({ footerLinks = null}) => {
  return (
    <footer className="footerDefault section bg-slate">
      <div className="container">
        <div className="gap-2 grid-md-4">
          {footerLinks.map((item, index) => {
            const { name, url, links } = item
            return (
              <div className="footerDefault__item" key={index}>
                <Link to={url} className="footerDefault__title-link">
                  <h4 className="footerDefault__title">{name}</h4>
                </Link>
                <ul className="footerDefault__list">
                  {links.map((link, index) => {
                    const { name, url } = link
                    return (
                      <li className="footerDefault__list-item" key={index}>
                        <Link to={url} className="footerDefault__list-link">
                          {name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <hr />
        <p className="small text-white">
          © 2021 Edwards Lifesciences LLC. All rights reserved. Information
          provided by Edwards Lifesciences
        </p>
      </div>
    </footer>
  )
}

export default FooterDefault
