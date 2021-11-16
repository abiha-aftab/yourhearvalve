import React from 'react'
import { Link } from 'gatsby'

const CardBasic = ({ data }) => {
  if (!data) {
    return null
  }
  const { title, icon, description, cta_link, cta_text, cta_aria_label } = data
  return (
    <article className="cardBasic">
      <h3 className="cardBasic__title">{title}</h3>
      <div className="cardBasic__icon">{icon}</div>
      <p className="cardBasic__description">{description}</p>
      <Link to={cta_link} className="btn btn-blue cardBasic__cta" aria-label={cta_aria_label}>
        {cta_text}
      </Link>
    </article>
  )
}

export default CardBasic
