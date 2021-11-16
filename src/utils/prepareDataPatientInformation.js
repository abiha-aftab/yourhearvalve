import { FaHeartbeat, FaUserMd } from 'react-icons/fa'
import React from 'react'

export const prepareDataPatientInformation = (data) => {
  let cards = []
  data.page_home_patient_information_cards.value.forEach(card => {
    const { component_card_name, component_card_svg, component_card_description, home_page_patient_information_anchor } = card.elements
    const { component_anchor_name, component_anchor_url, component_anchor_aria_label } = home_page_patient_information_anchor.value[0].elements
    const icon = component_card_svg.value === 'heartbeat' ? <FaHeartbeat className="icon" color="#c8102e" size="100" /> : <FaUserMd className="icon" color="#c8102e" size="100" />
    cards.push({
      title: component_card_name.value,
      icon: icon,
      description: component_card_description.value,
      cta_text: component_anchor_name.value,
      cta_link: component_anchor_url.value,
      cta_aria_label: component_anchor_aria_label.value || `Learn more about ${component_card_name.value}`,
      variant: 'Basic',
    })
  })
  return cards
}
