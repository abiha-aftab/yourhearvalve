import React from 'react'
import HeroSmall from '../containers/Hero/variants/HeroSmall'
import pagebanner from '../assets/images/page-banner.jpeg'
import SidebarDefault from '../components/Sidebar/variants/SidebarDefault'
import PaginationDefault from '../components/Pagination/variants/PaginationDefault'
import { heartBasicsSidebar } from '../assets/data/links'

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
              <h3>Hello world</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                nobis molestias reprehenderit nostrum reiciendis. Voluptate
                excepturi reiciendis repellat eaque sit libero ad facere
                adipisci molestiae? Sint non aspernatur eveniet quibusdam!
              </p>
              <p>
                Excepturi, commodi. Tempora aliquid minima laboriosam libero
                magni accusamus est incidunt id ab doloremque cupiditate
                inventore optio soluta commodi, animi consequuntur qui unde
                possimus nobis explicabo cum provident, aspernatur quibusdam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
