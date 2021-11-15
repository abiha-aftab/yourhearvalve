import React from 'react'
import AccordionBasic from '../../../../components/Accordion/variants/AccordionBasic'
import { accordionData } from '../../../../assets/data/accordion'
import Modal from '../../../../components/Modal'
import { modalData } from '../../../../assets/data/modal'

const ContentsPageTemplate = ({ item }) => {

  return (
    <>
      <h3>{item.name}</h3>
      {item.url.indexOf('/faqs/') !== -1 ? (
        <>
          <AccordionBasic data={accordionData} />
          <Modal modalData={modalData} trigger="This information is not a substitute for talking with your doctor."/>
        </>
      ) : (
        <>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nobis molestias reprehenderit nostrum reiciendis. Voluptate
              excepturi reiciendis repellat eaque sit libero ad facere adipisci
              molestiae? Sint non aspernatur eveniet quibusdam!
            </p>
            <p>
              Excepturi, commodi. Tempora aliquid minima laboriosam libero magni
              accusamus est incidunt id ab doloremque cupiditate inventore optio
              soluta commodi, animi consequuntur qui unde possimus nobis
              explicabo cum provident, aspernatur quibusdam.
            </p>
            {item.url.indexOf('/heart-basics/') !== -1 ||
            item.url.indexOf('/treatment-options/') !== -1 ? (
                  <Modal modalData={modalData} trigger="This information is not a substitute for talking with your doctor."/>
            ) : (
              ''
            )}
          </div>
        </>
      )}
    </>
  )
}

export default ContentsPageTemplate
