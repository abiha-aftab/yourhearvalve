import React from 'react'
import { cardLinks } from '../../../../assets/data/links'
import CardBasic from '../../../../components/Card/variants/CardBasic'

const FeaturesDefault = () => {
  return (
    <div className="section">
      <div className="container-sm">
        <p className="text-center lead">
          A patient information resource from Edwards Lifesciences, the leader
          in heart valve therapy
        </p>
        <div className="grid-md-2 gap-1 gap-md-2">
          {cardLinks.map((card, index) => {
            return <CardBasic data={card} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturesDefault
