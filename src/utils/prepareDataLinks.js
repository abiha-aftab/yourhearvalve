export const prepareDataLinks = (data) => {
  let navLinks = []
  data.forEach(link => {
    const { name, url, linked_items } = link.elements
    navLinks.push({
      name: name.value,
      url: url.value,
      links: linked_items.value.length ? extractChillLinks(linked_items.value, url.value) : []
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
      url: url.value.indexOf('https') !== -1 ? url.value : baseURL+url.value,
    })
  })
  return childLinks
}
