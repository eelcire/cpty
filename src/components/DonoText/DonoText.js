import React, { useContext, useEffect } from 'react'
import "./DonoText.css"

import { RESET_DONATED, StoreContext } from '../../store'

const DonoText = () => {
  const { state: { donated }, dispatch } = useContext(StoreContext)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: RESET_DONATED })
    }, 5000)
  })

  return (
    <div className={donated ? "dono-text-container" : "not-donated"}>
      <p className="dono-text">Thank you for your donation! Much love, xoxo :3</p>
    </div>
  )
}

export default DonoText