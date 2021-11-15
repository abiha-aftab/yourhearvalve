import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ item, index, isActive, setIsActive }) => {
  const { title, body } = item;

  const toggleActiveTab = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index)
    }
  }

  const accordionVariant = {
    collapsed: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: "auto",
      opacity: 1,
    },
    
  }

  return (
    <div className={isActive === index ? "accordionBasic__item accordionBasic__item--active" : "accordionBasic__item"}>
      <button className="accordionBasic__button" onClick={() => toggleActiveTab(index)}>{title}</button>
      <AnimatePresence initial={false}>{isActive === index && <motion.div key={index} variants={accordionVariant} initial="collapsed" animate="open" exit="collapsed" transition={{ duration: .5 }} className="accordionBasic__body">
        <div className="accordionBasic__content">{body}</div>
      </motion.div>}</AnimatePresence>
      
    </div>
  )
}

export default AccordionItem
