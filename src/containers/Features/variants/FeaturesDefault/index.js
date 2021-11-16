import React from 'react'
import CardBasic from '../../../../components/Card/variants/CardBasic'
import { prepareDataPatientInformation } from '../../../../utils/prepareDataPatientInformation'

const FeaturesDefault = ({ data }) => {
  const patientInformationCards = prepareDataPatientInformation(data.elements)
  const { codename, id } = data.system
  return (
    <section className="section" data-kontent-item-id={id}>
      <div className="container-sm">
        <p
          className="text-center lead"
          data-kontent-element-codename={codename}
        >
          {data.elements.page_home_patient_information_description.value}
        </p>
        <div className="grid-md-2 gap-1 gap-md-2"
          data-kontent-element-codename={codename}
          data-kontent-add-button
          data-kontent-add-button-insert-position="end"
          data-kontent-add-button-render-position="right-end">
          {patientInformationCards.map((card, index) => {
            return <CardBasic data={card} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesDefault
