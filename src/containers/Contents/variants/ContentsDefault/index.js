import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const data = {
  title: 'Learn about the anatomy of the heart',
  description: 'The heart is a muscular organ that pumps blood to all the tissues in your body through a network of blood vessels. The right side of the heart pumps blood through the lungs where it picks up oxygen. The left side of the heart receives the blood containing oxygen and pumps the blood to the rest of your body.',
  cta_text: 'Learn more'
}

const ContentsDefault = () => {
  return (
    <section className="section bg-slate-2">
      <div className="container grid-1 grid-md-2">
        <div className="order-2 order-md-1">
          <h2 className="mw-25">
           {data.title}
          </h2>
          <p>
            {data.description}
          </p>
          <a href="!#" className="btn btn-blue" aria-label={data.title}>
            {data.cta_text}
          </a>
        </div>
        <StaticImage
          className="order-1 order-md-2"
          src="../../../../assets/images/yhv-patient-doctor.jpeg"
          alt="Patient with doctor"
        />
      </div>
    </section>
  )
}

export default ContentsDefault
