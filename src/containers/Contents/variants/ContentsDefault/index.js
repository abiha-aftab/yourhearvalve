import React from 'react'
import { Link } from 'gatsby'
import { ImageElement } from '@kentico/gatsby-kontent-components'

const ContentsDefault = ({ data }) => {
  const {
    page_home_heart_anatomy_name,
    page_home_heart_anatomy_description,
    page_home_heart_anatomy_images,
    page_home_heart_anatomy_anchor,
  } = data.elements
  const { codename, id } = data.system
  const { component_image_alt, component_image_asset } =
    page_home_heart_anatomy_images.value[0].elements
  const {
    component_anchor_name,
    component_anchor_url,
    component_anchor_aria_label,
  } = page_home_heart_anatomy_anchor.value[0].elements
  return (
    <section className="section bg-slate-2" data-kontent-item-id={id}>
      <div className="container grid-1 grid-md-2">
        <div className="order-2 order-md-1">
          <h2 className="mw-25" data-kontent-element-codename={codename}>
            {page_home_heart_anatomy_name.value}
          </h2>
          <p data-kontent-element-codename={codename}>
            {page_home_heart_anatomy_description.value}
          </p>
          <Link
            to={component_anchor_url.value}
            className="btn btn-blue"
            aria-label={
              component_anchor_aria_label.value ||
              page_home_heart_anatomy_name.value
            }
          >
            {component_anchor_name.value}
          </Link>
        </div>
        <ImageElement
          image={component_image_asset.value[0]}
          className="order-1 order-md-2"
          src={
            component_image_asset.value[0].url ||
            '../../../../assets/images/yhv-patient-doctor.jpeg'
          }
          alt={component_image_alt.value || 'Patient with doctor'}
        />
      </div>
    </section>
  )
}

export default ContentsDefault
