import React, { useContext } from 'react'
import "./InfoError.css"

import { StoreContext } from '../../store'

const InfoError = () => {
  const { state: { error } } = useContext(StoreContext)

  let renderError = error === undefined ? null : error

  return (
    <div className={error !== undefined ? "info-error-container" : ""}>
      <p className="info-error-text">{renderError}</p>
    </div>
  )
}

export default InfoError