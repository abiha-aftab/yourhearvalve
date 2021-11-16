import React from 'react'
import { Link } from 'gatsby'

const HeroLarge = ({ data }) => {
  if (!data) {
    return null
  }
  const {
    page_home_page_banner_name,
    page_home_page_banner_description,
    page_home_page_banner_anchors,
    page_home_page_banner_assets,
  } = data.elements
  const { codename, id } = data.system
  const { component_image_alt, component_image_asset } =
    page_home_page_banner_assets.value[0].elements

  return (
    <section className="heroLarge" data-kontent-item-id={id}>
      <div className="heroLarge__container">
        <div className="heroLarge__content">
          <h1
            className="heroLarge__title"
            data-kontent-element-codename={codename}
          >
            {page_home_page_banner_name.value}
          </h1>
          <p
            className="heroLarge__description"
            data-kontent-element-codename={codename}
          >
            {page_home_page_banner_description.value}
          </p>
          {page_home_page_banner_anchors.value.map((anchor) => {
            const {
              component_anchor_name,
              component_anchor_url,
              component_anchor_aria_label,
            } = anchor.elements
            const { codename, id } = anchor.system

            return (
              <Link
                to={component_anchor_url.value}
                aria-label={
                  component_anchor_aria_label.value ||
                  component_anchor_name.value
                }
                key={id}
                data-kontent-element-codename={codename}
                data-kontent-item-id={id}
data-kontent-add-button
             data-kontent-add-button-insert-position="end"
             data-kontent-add-button-render-position="right-end"
                className="heroLarge__btn btn btn-blue"
              >
                {component_anchor_name.value}
              </Link>
            )
          })}
        </div>
      </div>
      <img
        className="heroLarge__image"
        src={
          component_image_asset.value[0].url ||
          '../../../../assets/images/banner-home.jpeg'
        }
        alt={component_image_alt.value || 'Patient in snow'}
      />
    </section>
  )
}

export default HeroLarge
