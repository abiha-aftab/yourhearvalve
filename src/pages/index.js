import React from 'react'
import HeroLarge from '../containers/Hero/variants/HeroLarge'
import FeaturesDefault from '../containers/Features/variants/FeaturesDefault'
import ContentsDefault from '../containers/Contents/variants/ContentsDefault'
import { graphql } from 'gatsby'

export default function Home({ data }) {
  const dataPageBanner =
    data.kontentItemPageHome.elements.page_home_page_banner.value[0]
  const dataPatientInformation =
    data.kontentItemPageHome.elements.page_home_patient_information.value[0]
      .elements
  const dataHeartAnatomy =
    data.kontentItemPageHome.elements.page_home_heart_anatomy.value[0].elements

  console.log('data', data)
  return (
    <>
      <HeroLarge data={dataPageBanner} />
      <FeaturesDefault data={dataPatientInformation} />
      <ContentsDefault data={dataHeartAnatomy} />
    </>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    kontentItemPageHome {
      elements {
        page_home_page_banner {
          value {
            ... on kontent_item_page_home_page_banner {
              system {
                codename
                id
              }
              elements {
                page_home_page_banner_name {
                  value
                }
                page_home_page_banner_description {
                  value
                }
                page_home_page_banner_anchors {
                  value {
                    ... on kontent_item_component_anchor {
                      system {
                        codename
                        id
                      }
                      elements {
                        component_anchor_name {
                          value
                        }
                        component_anchor_url {
                          value
                        }
                        component_anchor_aria_label {
                          value
                        }
                      }
                    }
                  }
                }
                page_home_page_banner_assets {
                  value {
                    ... on kontent_item_component_image {
                      elements {
                        component_image_alt {
                          value
                        }
                        component_image_asset {
                          value {
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        page_home_patient_information {
          value {
            ... on kontent_item_page_home_patient_information {
              elements {
                page_home_patient_information_description {
                  value
                }
                page_home_patient_information_cards {
                  value {
                    ... on kontent_item_component_card {
                      elements {
                        component_card_name {
                          value
                        }
                        component_card_description {
                          value
                        }
                        component_card_svg {
                          value
                        }
                        home_page_patient_information_anchor {
                          value {
                            ... on kontent_item_component_anchor {
                              elements {
                                component_anchor_name {
                                  value
                                }
                                component_anchor_url {
                                  value
                                }
                                component_anchor_aria_label {
                                  value
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        page_home_heart_anatomy {
          value {
            ... on kontent_item_page_home_heart_anatomy {
              elements {
                page_home_heart_anatomy_name {
                  value
                }
                page_home_heart_anatomy_description {
                  value
                }
                page_home_heart_anatomy_images {
                  value {
                    ... on kontent_item_component_image {
                      elements {
                        component_image_alt {
                          value
                        }
                        component_image_asset {
                          value {
                            url
                          }
                        }
                      }
                    }
                  }
                }
                page_home_heart_anatomy_anchor {
                  value {
                    ... on kontent_item_component_anchor {
                      elements {
                        component_anchor_name {
                          value
                        }
                        component_anchor_url {
                          value
                        }
                        component_anchor_aria_label {
                          value
                        }
                      }
                    }
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
