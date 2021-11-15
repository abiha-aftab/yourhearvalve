import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const HeroSmall = ({ data }) => {
  if (!data) {
    return null
  }

  // const imgPath = getImage(image)

  // return <GatsbyImage className="heroSmall" image={image} />
  return (
    <section>
      <StaticImage
        className="heroSmall"
        src="../../../../assets/images/page-banner.jpeg"
        alt="hero image"
      />
    </section>
  )
}

export default HeroSmall
