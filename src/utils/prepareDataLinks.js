export const prepareDataLinks = (data) => {
  let navLinks = []
  data.forEach(link => {
    const { name, url, navigation_general_linked_items } = link.elements
    navLinks.push({
      name: name.value,
      url: url.value,
      links: navigation_general_linked_items.value.length ? extractChillLinks(navigation_general_linked_items.value, url.value) : []
    })
  })
  return navLinks
}
const extractChillLinks = (data, baseURL) => {
  let childLinks = []
  data.forEach(link => {
    const { name, url } = link.elements
    childLinks.push({
      name: name.value,
      url: baseURL+url.value,
    })
  })
  return childLinks
}
