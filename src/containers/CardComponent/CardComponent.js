import React, { useContext } from 'react'
import "./CardComponent.css"

import Input from '../../components/Input/Input'
import ProgressBar from '../../components/ProgressBar/ProgressBar'

import { StoreContext, ADD_DONATION, ERROR } from '../../store'

const CardComponent = () => {
  const { state: { totalFund, donors }, dispatch } = useContext(StoreContext)

  const onClickProp = (value, error) => {
    error ? dispatch({ type: ERROR, error }) : dispatch({ type: ADD_DONATION, value })
  }

  return (
    <div className = "card-container">
      <ProgressBar totalFund={totalFund} />
      <h1>Only four days left to fund this project</h1>
      <p>Join the <b>{donors}</b> other donors who have already supported this project.</p>
      <Input onClickProp={onClickProp} />
    </div>
  )
}

export default CardComponent