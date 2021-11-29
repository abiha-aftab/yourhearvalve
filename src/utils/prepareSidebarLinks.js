export const prepareSidebarLinks = (data) => {
  let sidebarLinks = []
  let links = []
  let baseURL = ''
  const { title: {value: name} } = data.elements
  if(data.elements.menu_items) {
    links = data.elements.menu_items.value.forEach(menu => {
      links = menu.elements.links.value
      baseURL = menu.elements.slug.value
      sidebarLinks.push({
        name: name,
        url: ``,
      })
      sidebarLinks = prepareLinks(baseURL, links, sidebarLinks)
    })
  } else {
    links = data.elements.links.value
    baseURL = data.elements.slug.value
    sidebarLinks = prepareLinks(baseURL, links, sidebarLinks)
  }
  return sidebarLinks
}
const prepareLinks = (baseURL, links, sidebarLinks) => {
  links.forEach(link => {
    const { title: {value: name} } = link.elements
    let slug = link.elements.url ? link.elements.url.value : link.elements.slug.value
    let url = slug ? slug.indexOf("https") !== -1 ? slug : baseURL === slug ? `/${slug}` : `/${baseURL}/${slug}` : ""
    if(baseURL === slug) return
    sidebarLinks.push({
      name: name,
      url: url
    })
  })
  return sidebarLinks
}
