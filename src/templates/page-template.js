import React from 'react'
import HeroSmall from '../containers/Hero/variants/HeroSmall'
import pageBanner from '../assets/images/page-banner.jpeg'
import SidebarDefault from '../components/Sidebar/variants/SidebarDefault'
import PaginationDefault from '../components/Pagination/variants/PaginationDefault'
import { sidebarLinks } from '../assets/data/links'
import ContentsPageTemplate from '../containers/Contents/variants/ContentsPageTemplate'

export default function PageTemplate({ pageContext: { item } }) {
  let path = item.url
  path = path.replace(/^\/+|\/+$/g, '')
  path = path.split('/')
  const sidebar = sidebarLinks[path[0]] ?? null
  const title = path[0].replace('-', ' ')
  let paginationLinks = []
  let incrementalPath = '/'
  paginationLinks.push({ text: 'Home', url: '/' })
  path.forEach((item) => {
    incrementalPath = `${incrementalPath}${item}/`
    paginationLinks.push({
      text: item.replace(/-/g, ' ').replace('faqs', 'FAQs'),
      url: incrementalPath,
    })
  })
  return (
    <>
      <HeroSmall data={{ image: pageBanner }} />
      <section className="section">
        <div className="container">
          <h2 className="text-crimson">{title}</h2>
          <PaginationDefault pagination={paginationLinks} />
          <div className="grid-1 grid-md-12 mt-2 gap-1 gap-md-2">
            <div className="col-md-4 order-2 order-md-1">
              <SidebarDefault sidebarLinks={sidebar} />
            </div>
            <div className="col-md-8 order-1 order-md-2">
              <ContentsPageTemplate item={item} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
