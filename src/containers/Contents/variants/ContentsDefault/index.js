import React from 'react'
import { Link } from 'gatsby'
import {
  ImageElement,
  RichTextElement,
} from '@kentico/gatsby-kontent-components'

const ContentsDefault = ({ data }) => {
  if (!data) {
    return null
  }
  const {
    body,
    anchors: { value: anchors },
    images: {
      value: [image],
    },
  } = data.elements
  if (image) {
    const {
      alt: { value: image_alt },
      asset: {
        value: [image_asset],
      },
    } = image.elements
  }
  return (
    <section className="section bg-slate-2">
      <div className="container grid-1 grid-md-2">
        <div className="order-2 order-md-1">
          <RichTextElement value={body.value} />
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
                className="btn btn-blue"
              >
                {name}
              </Link>
            )
          })}
        </div>
        {image && (
          <ImageElement
            image={image}
            className="order-1 order-md-2"
            alt={image.elements.alt.value || 'Patient with doctor'}
          />
        )}
      </div>
    </section>
  )
}

export default ContentsDefault
