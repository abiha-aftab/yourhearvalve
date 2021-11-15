import React from 'react'
import HeroSmall from '../../containers/Hero/variants/HeroSmall'
import pagebanner from '../../assets/images/page-banner.jpeg'
import SidebarDefault from '../../components/Sidebar/variants/SidebarDefault'
import PaginationDefault from '../../components/Pagination/variants/PaginationDefault'
import { heartBasicsSidebar } from '../../assets/data/links'
import AccordionBasic from '../../components/Accordion/variants/AccordionBasic'
import { accordionData } from '../../assets/data/accordion'

const page = () => {
  return (
    <>
      <HeroSmall data={{ image: pagebanner }} />
      <section className="section">
        <div className="container">
          <h2 className="text-crimson">Heart Basics</h2>
          <PaginationDefault />
          <div className="grid-1 grid-md-12 mt-2 gap-1 gap-md-2">
            <div className="col-md-4 order-2 order-md-1">
              <SidebarDefault sidebarLinks={heartBasicsSidebar} />
            </div>
            <div className="col-md-8 order-1 order-md-2">
              <h3>Frequently asked questions</h3>
              <p>
               Click to see answers
              </p>
              <AccordionBasic data={accordionData}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
