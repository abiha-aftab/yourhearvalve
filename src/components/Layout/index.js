import React, { useEffect } from 'react'
import '../../assets/scss/main.scss'
import FooterDefault from '../../containers/Footer/variants/FooterDefault'
import NavbarDefault from '../../containers/Navbar/variants/NavbarDefault'
import { useStaticQuery, graphql } from 'gatsby'
import { prepareDataLinks } from '../../utils/prepareDataLinks'
import KontentSmartLink from '@kentico/kontent-smart-link'

const Layout = ({ children }) => {
  useEffect(() => {
    // This is just an example of SDK initialization inside ES6 module.
    // HTML markup should still contain all necessary data-attributes (e.g. .layout element).
    const kontentSmartLink = KontentSmartLink.initialize({
      queryParam: 'enable-ksl-sdk',
    })
    return () => {
      kontentSmartLink.destroy()
    }
  })

  const data = useStaticQuery(graphql`
    query NavigationQuery {
      kontentItemNavigationHeader {
        elements {
          navigation_header_linked_items {
            value {
              ... on kontent_item_navigation_general {
                elements {
                  name {
                    value
                  }
                  url {
                    value
                  }
                  navigation_general_linked_items {
                    value {
                      ... on kontent_item_navigation_general {
                        elements {
                          name {
                            value
                          }
                          url {
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
      kontentItemNavigationFooter {
        elements {
          navigation_footer_linked_items {
            value {
              ... on kontent_item_navigation_general {
                elements {
                  name {
                    value
                  }
                  url {
                    value
                  }
                  navigation_general_linked_items {
                    value {
                      ... on kontent_item_navigation_general {
                        elements {
                          name {
                            value
                          }
                          url {
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
  `)
  const navLinks = prepareDataLinks(
    data.kontentItemNavigationHeader.elements.navigation_header_linked_items
      .value
  )
  const footerLinks = prepareDataLinks(
    data.kontentItemNavigationFooter.elements.navigation_footer_linked_items
      .value
  )
  return (
    <div
      className="layout"
      data-kontent-project-id="ef0fe65a-50fe-0038-cf87-565345f32cff"
      data-kontent-language-codename="default"
    >
      <NavbarDefault navLinks={navLinks} />
      {children}
      <FooterDefault footerLinks={footerLinks} />
    </div>
  )
}

export default Layout
