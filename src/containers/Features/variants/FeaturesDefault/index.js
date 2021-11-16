import React from 'react'
import CardBasic from '../../../../components/Card/variants/CardBasic'
import { prepareDataPatientInformation } from '../../../../utils/prepareDataPatientInformation'

const FeaturesDefault = ({ data }) => {
  const patientInformationCards = prepareDataPatientInformation(data)
  return (
    <section className="section">
      <div className="container-sm">
        <p className="text-center lead">{data.page_home_patient_information_description.value}</p>
        <div className="grid-md-2 gap-1 gap-md-2">
          {patientInformationCards.map((card, index) => {
            return <CardBasic data={card} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesDefault
