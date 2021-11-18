import React from 'react'
import { Link } from 'gatsby'

const CardBasic = ({ data, codename, id }) => {
  if (!data) {
    return null
  }
  const {
    title,
    icon,
    description,
    cta_link,
    cta_text,
    cta_aria_label,
    cardCodename,
    cardId,
  } = data
  return (
    <article className="cardBasic"     
        data-kontent-item-id={id}
          data-kontent-element-codename={codename}
          data-kontent-add-button
          data-kontent-add-button-render-position="right"
          data-kontent-add-button-insert-position="end"
       >
      <h3
        className="cardBasic__title"        
        data-kontent-item-id={cardId}
        data-kontent-element-codename={cardCodename}
      >
        {title}
      </h3>
      <div     
        data-kontent-item-id={cardId}
        data-kontent-element-codename={cardCodename}
        className="cardBasic__icon">{icon}</div>
      <p
        className="cardBasic__description"    
        data-kontent-item-id={cardId}
        data-kontent-element-codename={cardCodename}
      >
        {description}
      </p>
      <Link
        to={cta_link}
        className="btn btn-blue cardBasic__cta"
        aria-label={cta_aria_label}
      >
        {cta_text}
      </Link>
    </article>
  )
}

export default CardBasic
