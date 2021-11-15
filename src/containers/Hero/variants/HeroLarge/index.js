import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const HeroLarge = ({ data }) => {
  if (!data) {
    return null
  }
  const { title, description, cta_text_1, cta_link_1, cta_text_2, cta_link_2 } =
    data
  return (
    <div className="heroLarge">
      <div className="heroLarge__container">
        <div className="heroLarge__content">
          <h1 className="heroLarge__title">{title}</h1>
          <p className="heroLarge__description">{description}</p>
          <a href={cta_link_1} className="heroLarge__btn btn btn-sky">
            {cta_text_1}
          </a>
          <a href={cta_link_2} className="heroLarge__btn btn btn-sky">
            {cta_text_2}
          </a>
        </div>
      </div>
      <StaticImage
        className="heroLarge__image"
        src="../../../../assets/images/banner-home.jpeg"
        alt="Patient in snow"
      />
    </div>
  )
}

export default HeroLarge
