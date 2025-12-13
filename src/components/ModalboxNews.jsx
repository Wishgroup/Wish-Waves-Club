import React, { useState } from 'react'
const cancelIcon = '/img/svg/cancel.svg'

function ModalboxNews({ children, isOpen, onClose, content }) {
  if (!isOpen) return null

  return (
    <div className="grax_tm_modalbox_news opened">
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }}>
            <img className="svg" src={cancelIcon} alt="" />
          </a>
        </div>
        <div className="description_wrap scrollable">
          {content}
        </div>
      </div>
    </div>
  )
}

export default ModalboxNews

