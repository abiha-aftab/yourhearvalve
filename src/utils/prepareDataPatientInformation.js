import { FaHeartbeat, FaUserMd } from 'react-icons/fa'
import React from 'react'

export const prepareDataPatientInformation = (data) => {
  let cards = []
  data.forEach((card) => {
    const {
      name: { value: card_name },
      //svg: {},
      description: { value: description },
      anchor: {
        value: [anchor],
      },
    } = card.elements
    const {
      name: { value: name },
      url: { value: url },
      aria_label: { value: aria_label },
    } = anchor.elements
    const icon = <FaHeartbeat className="icon" color="#c8102e" size="100" />

    cards.push({
      title: card_name,
      icon: icon,
      description: description,
      cta_text: name,
      cta_link: url,
      cta_aria_label: aria_label || `Learn more about ${card_name}`,
      variant: 'Basic',
    })
  })
  return cards
}
