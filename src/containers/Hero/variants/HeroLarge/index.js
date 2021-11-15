import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { useStaticQuery, graphql } from 'gatsby'

const HeroLarge = ({ data }) => {
  const content = useStaticQuery(graphql`
    query homebannerquery {
      kontentItemPageHomePageBanner {
        elements {
          page_home_page_banner_name {
            value
          }
          page_home_page_banner_name {
            value
          }
          page_home_page_banner_description {
            value
          }
          page_home_page_banner_anchors {
            value {
              ... on kontent_item_component_anchor {
                elements {
                  component_anchor_name {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(content)
  const { title, description, cta_text_1, cta_link_1, cta_text_2, cta_link_2 } =
    data

  if (!data) {
    return null
  }
  return (
    <section
      className="heroLarge"
      data-kontent-item-id="fe54d41a-5018-40cf-b270-bb75d52376ef"
    >
      <div
        className="heroLarge__container"
        data-kontent-element-codename="page_home_page_banner"
      >
        <div
          className="heroLarge__content"
          data-kontent-element-codename="page_home_page_banner"
        >
          <h1
            className="heroLarge__title"
            data-kontent-element-codename="page_home_page_banner"
          >
            {
              content.kontentItemPageHomePageBanner.elements
                .page_home_page_banner_name.value
            }
          </h1>
          <p
            className="heroLarge__description"
            data-kontent-element-codename="page_home_page_banner"
          >
            {
              content.kontentItemPageHomePageBanner.elements
                .page_home_page_banner_description.value
            }
          </p>
          <a href={cta_link_1} className="heroLarge__btn btn btn-blue">
            {cta_text_1}
          </a>
          <a href={cta_link_2} className="heroLarge__btn btn btn-blue">
            {cta_text_2}
          </a>
        </div>
      </div>
      <StaticImage
        className="heroLarge__image"
        src="../../../../assets/images/banner-home.jpeg"
        alt="Patient in snow"
      />
    </section>
  )
}

export default HeroLarge
