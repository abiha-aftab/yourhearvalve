import React from 'react'
import '../../assets/scss/main.scss'
import FooterDefault from '../../containers/Footer/variants/FooterDefault'
import NavbarDefault from '../../containers/Navbar/variants/NavbarDefault'
import {useStaticQuery, graphql} from 'gatsby'
import { prepareDataLinks } from '../../utils/prepareDataLinks'

const Layout = ({ children }) => {

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
                          name {value}
                          url {value}
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
          navigation_footer_linked_items{
            value {
              ... on  kontent_item_navigation_general{
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
                          name {value}
                          url {value}
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
  const navLinks = prepareDataLinks(data.kontentItemNavigationHeader.elements.navigation_header_linked_items.value)
  const footerLinks = prepareDataLinks(data.kontentItemNavigationFooter.elements.navigation_footer_linked_items.value)
  return (
    <>
      <NavbarDefault navLinks={navLinks} />
      {children}
      <FooterDefault footerLinks={footerLinks} />
    </>
  )
}

export default Layout
