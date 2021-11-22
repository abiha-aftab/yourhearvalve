import React from 'react'
import HeroLarge from '../containers/Hero/variants/HeroLarge'
import FeaturesDefault from '../containers/Features/variants/FeaturesDefault'
import ContentsDefault from '../containers/Contents/variants/ContentsDefault'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  const {
    home: { elements: containers },
  } = data
  const {
    page_banner: {
      value: [pageBanner],
    },
    patient_information: {
      value: [patientInformation],
    },
    heart_anatomy: {
      value: [heartAnatomy],
    },
  } = containers
  return (
    <div
      data-kontent-item-id={data.system.id}
      data-kontent-element-codename="heart_anatomy"
      data-kontent-add-button
      data-kontent-add-button-render-position="bottom"
      data-kontent-add-button-insert-position="after"
    >
      <HeroLarge data={pageBanner} />
      <FeaturesDefault data={patientInformation} />
      <ContentsDefault data={heartAnatomy} />
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    home: kontentItemPageHome {
      system {
        id
        codename
      }
      elements {
        page_banner {
          value {
            ... on kontent_item_container {
              system {
                id
                codename
              }
              elements {
                body {
                  value
                }
                anchors {
                  value {
                    ...link
                  }
                }
                images {
                  value {
                    ...image
                  }
                }
              }
            }
          }
        }
        patient_information {
          value {
            ... on kontent_item_container {
              system {
                id
                codename
              }
              elements {
                body {
                  value
                }
                cards {
                  value {
                    ...card
                  }
                }
              }
            }
          }
        }
        heart_anatomy {
          value {
            ... on kontent_item_container {
              system {
                id
                codename
              }
              elements {
                body {
                  value
                }
                anchors {
                  value {
                    ...link
                  }
                }
                images {
                  value {
                    ...image
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
