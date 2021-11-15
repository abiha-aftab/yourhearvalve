import React from 'react'

const CardBasic = ({ data }) => {
  if (!data) {
    return null
  }
  const { title, icon, description, cta_link, cta_text } = data
  return (
    <article className="cardBasic">
      <h3 className="cardBasic__title">{title}</h3>
      <div className="cardBasic__icon">{icon}</div>
      <p className="cardBasic__description">{description}</p>
      <a href={cta_link} className="btn btn-blue cardBasic__cta" aria-label={`Learn more about ${title}`}>
        {cta_text}
      </a>
    </article>
  )
}

export default CardBasic
