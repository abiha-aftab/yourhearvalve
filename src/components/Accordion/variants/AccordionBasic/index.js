import React, {useState} from 'react'
import AccordionItem from './Item'

const AccordionBasic = ({ data = null }) => {
  const [isActive, setIsActive] = useState(null)
  if (!data) return
  return (
    <div className="accordionBasic">
      {data.map((item, index) => {
        return <AccordionItem item={item} key={index} index={index} isActive={isActive} setIsActive={setIsActive}/>
      })}
    </div>
  )
}

export default AccordionBasic
