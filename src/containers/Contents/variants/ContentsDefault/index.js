import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const ContentsDefault = () => {
  return (
    <div className="section bg-slate-2">
      <div className="container grid-1 grid-md-2">
        <div className="order-2 order-md-1">
          <h2>
            Learn about the anatomy
            <br />
            of the heart
          </h2>
          <p>
            The heart is a muscular organ that pumps blood to all the tissues in
            your body through a network of blood vessels. The right side of the
            heart pumps blood through the lungs where it picks up oxygen. The
            left side of the heart receives the blood containing oxygen and
            pumps the blood to the rest of your body
          </p>
          <a href="!#" className="btn btn-sky">
            Learn more
          </a>
        </div>
        <StaticImage
          className="order-1 order-md-2"
          src="../../../../assets/images/yhv-patient-doctor.jpeg"
          alt="Patient with doctor"
        />
      </div>
    </div>
  )
}

export default ContentsDefault
