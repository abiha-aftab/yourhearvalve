import React from 'react'
import AccordionBasic from '../../../../components/Accordion/variants/AccordionBasic'
import Modal from '../../../../components/Modal'
import { RichTextElement } from '@kentico/gatsby-kontent-components'
import FormBasic from '../../../../components/Form/variants/FormBasic'

const ContentsPageTemplate = ({
  path,
  body,
  accordions,
  modal,
  marketo_form,
  itemId,
  itemCodename,
}) => {
  console.log(marketo_form.length)
  return (
    <div data-kontent-item-id={itemId}>
      <div data-kontent-element-codename={itemCodename} className="contentPage">
        <RichTextElement value={body.value} />
      </div>
      {accordions.length > 0 && (
        <AccordionBasic
          data={accordions}
          data-kontent-element-codename={itemCodename}
        />
      )}
      {modal.length > 0 &&
        (path.indexOf('heart-basics/') !== -1 ||
          path.indexOf('treatment-options/') !== -1) && (
          <Modal
            data-kontent-element-codename={itemCodename}
            modalData={modal}
            trigger={
              modal[0].elements.toggle_text.value ||
              'This information is not a substitute for talking with your doctor.'
            }
          />
        )}
      {marketo_form.length > 0 && (
        <FormBasic data-kontent-element-codename={itemCodename} id="1277" />
      )}
    </div>
  )
}

export default ContentsPageTemplate
