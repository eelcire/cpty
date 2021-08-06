import React, { useContext } from 'react'
import "./InfoText.css"

import { StoreContext } from '../../store'

const InfoText = () => {
  const { state: { totalFund } } = useContext(StoreContext)

  let remainder;

  totalFund > 5000 ? remainder = 0 : remainder = 5000 - totalFund;

  return (
    <div>
      <div className="info-text-container">
        <p className="info-text"><b><sup>$</sup>{remainder}</b> still needed to fund this project</p>
      </div>
      <div className="triangle-container">
        <div className="triangle-down"></div>
      </div>
    </div>
  )
}

export default InfoText