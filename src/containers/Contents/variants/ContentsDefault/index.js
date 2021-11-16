import React from 'react'
import { Link } from 'gatsby'

const ContentsDefault = ({ data }) => {
  const { page_home_heart_anatomy_name, page_home_heart_anatomy_description, page_home_heart_anatomy_images, page_home_heart_anatomy_anchor } = data
  const { component_image_alt, component_image_asset } = page_home_heart_anatomy_images.value[0].elements
  const { component_anchor_name, component_anchor_url, component_anchor_aria_label } = page_home_heart_anatomy_anchor.value[0].elements
  return (
    <section className="section bg-slate-2">
      <div className="container grid-1 grid-md-2">
        <div className="order-2 order-md-1">
          <h2 className="mw-25">
           {page_home_heart_anatomy_name.value}
          </h2>
          <p>
            {page_home_heart_anatomy_description.value}
          </p>
          <Link to={component_anchor_url.value} className="btn btn-blue" aria-label={component_anchor_aria_label.value || page_home_heart_anatomy_name.value}>
            {component_anchor_name.value}
          </Link>
        </div>
        <img
          className="order-1 order-md-2"
          src={component_image_asset.value[0].url || "../../../../assets/images/yhv-patient-doctor.jpeg"}
          alt={component_image_alt.value || "Patient with doctor"}
        />
      </div>
    </section>
  )
}

export default ContentsDefault
