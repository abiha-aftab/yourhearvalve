import React from 'react'
import HeroLarge from '../containers/Hero/variants/HeroLarge'
import { homeHero } from '../assets/data/links'
import FeaturesDefault from '../containers/Features/variants/FeaturesDefault'
import ContentsDefault from '../containers/Contents/variants/ContentsDefault'

export default function Home() {
  return (
    <>
      <HeroLarge data={homeHero} />
      <FeaturesDefault />
      <ContentsDefault />
    </>
  )
}
