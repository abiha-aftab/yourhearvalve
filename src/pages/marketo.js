import React from 'react'
import SidebarDefault from '../components/Sidebar/variants/SidebarDefault'
import { sidebarLinks } from '../assets/data/links'
import HeroSmall from '../containers/Hero/variants/HeroSmall'
import pageBanner from '../assets/images/page-banner.jpeg'
import FormBasic from '../components/Form/variants/FormBasic'

const marketo = () => {
  const sidebar = sidebarLinks['contact-us']
  return (
    <>
      <HeroSmall data={{ image: pageBanner }} />
      <div className="section container">
        <div className="grid-1 grid-md-12 mt-2 gap-1 gap-md-2">
          <div className="col-md-3 order-2 order-md-1">
            <SidebarDefault sidebarLinks={sidebar} />
          </div>
          <div className="col-md-9 order-1 order-md-2">
            <h3>Marketo Form</h3>
            <FormBasic id="1277"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default marketo
