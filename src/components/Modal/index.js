import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { modalData } from '../../assets/data/modal'
import { modalVariants } from '../../assets/animations/animations'
import { backdropVariants } from '../../assets/animations/animations'

const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])
}

let useClickOutside = (handler) => {
  let domNode = useRef()
  console.log(domNode)
  useEffect(() => {
    let mouseDownHandler = (event) => {
      if (!domNode?.current?.contains(event.target)) {
        handler()
      }
    }
    document.addEventListener('mousedown', mouseDownHandler)
    return () => {
      document.removeEventListener('mousedown', mouseDownHandler)
    }
  })
  return domNode
}

const Modal = ({ showModal, setShowModal }) => {
  //disable the scroll when modal is open
  useDisableBodyScroll(showModal)

  //modal should close when clicked outside
  let domNode = useClickOutside(() => {
    setShowModal(false)
  })

  //modal should close when escape is pressed
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setShowModal(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  })
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showModal && (
          <motion.div
            className="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="modal" variants={modalVariants}>
              <div className="modal__content" ref={domNode}>
                <div className="modal__header">
                  <h5 className="modal__title">{modalData.title}</h5>
                  <button
                    className="modal__close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal__body">
                  <p>{modalData.description}</p>
                  <p>{modalData.information}</p>
                </div>
                <div className="modal__footer">
                  <button
                    type="button"
                    className="btn btn-crimson modal__butn"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal
