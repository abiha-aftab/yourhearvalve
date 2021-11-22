import React, { useEffect } from 'react'
import '../../assets/scss/main.scss'
import FooterDefault from '../../containers/Footer/variants/FooterDefault'
import NavbarDefault from '../../containers/Navbar/variants/NavbarDefault'
import { useStaticQuery, graphql } from 'gatsby'
import { prepareDataLinks } from '../../utils/prepareDataLinks'
import KontentSmartLink from '@kentico/kontent-smart-link'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      header: kontentItemNavigationHeader {
        system {
          id
          codename
        }
        elements {
          url {
            value
          }
          image {
            value {
              ...image
            }
          }
          linked_items {
            value {
              ... on kontent_item_navigation_general {
                system {
                  id
                  codename
                }
                elements {
                  name {
                    value
                  }
                  url {
                    value
                  }
                  linked_items {
                    value {
                      ...navLink
                    }
                  }
                }
              }
            }
          }
        }
      }
      footer: kontentItemNavigationFooter {
        system {
          id
          codename
        }
        elements {
          linked_items {
            value {
              system {
                id
                codename
              }
              ... on kontent_item_navigation_general {
                system {
                  id
                  codename
                }
                elements {
                  name {
                    value
                  }
                  url {
                    value
                  }
                  url_slug {
                    value
                  }
                  linked_items {
                    value {
                      ...navLink
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

  const navLinks = prepareDataLinks(data.header.elements.linked_items.value)
  const footerLinks = prepareDataLinks(data.footer.elements.linked_items.value)
  return (
    <div
      className="layout"
      data-kontent-project-id={process.env.GATSBY_PROJECT_ID}
      data-kontent-language-codename={process.env.GATSBY_LANGUAGE_CODENAMES}
    >
      <NavbarDefault navLinks={navLinks} />
      {children}
      <FooterDefault footerLinks={footerLinks} />
    </div>
  )
}

export default Layout

export const query = graphql`
  fragment navLink on kontent_item_navigation_general {
    system {
      id
      codename
    }
    elements {
      name {
        value
      }
      url {
        value
      }
      url_slug {
        value
      }
    }
  }

  fragment image on kontent_item_component_image {
    system {
      id
      codename
    }
    elements {
      asset {
        value {
          url
          description
          width
          height
        }
      }
      alt {
        value
      }
    }
  }

  fragment link on kontent_item_component_anchor {
    system {
      id
      codename
    }
    elements {
      name {
        value
      }
      url {
        value
      }
      aria_label {
        value
      }
    }
  }

  fragment card on kontent_item_component_card {
    system {
      id
      codename
    }
    elements {
      name {
        value
      }
      description {
        value
      }
      svg {
        value
      }
      anchor {
        value {
          ...link
        }
      }
    }
  }
`
