import React from 'react'
import { Link } from 'gatsby'
import {
  ImageElement,
  RichTextElement,
} from '@kentico/gatsby-kontent-components'

const HeroLarge = ({ data }) => {
  if (!data) {
    return null
  }
  console.log('data', data)
  const {
    body,
    anchors: { value: anchors },
    images: {
      value: [image],
    },
  } = data.elements
  const { id, codename } = data.system
  const {
    alt: { value: image_alt },
    asset: {
      value: [image_asset],
    },
  } = image.elements

  return (
    <section className="heroLarge" data-kontent-item-id={id}>
      <div className="heroLarge__container">
        <div className="heroLarge__content">
          <RichTextElement
            data-kontent-element-codename={codename}
            value={body.value}
          />
          {anchors.map((anchor) => {
            const {
              name: { value: name },
              url: { value: url },
              aria_label: { value: aria_label },
            } = anchor.elements
            return (
              <Link
                to={url}
                aria-label={aria_label || name}
                data-kontent-element-codename={codename}
                className="heroLarge__btn btn btn-blue"
              >
                {name}
              </Link>
            )
          })}
        </div>
      </div>
      <ImageElement
        image={image_asset}
        className="heroLarge__image"
        alt={image_alt || 'Patient in snow'}
      />
    </section>
  )
}

export default HeroLarge
