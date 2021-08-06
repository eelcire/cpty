import React, { useState } from 'react'
import "./Input.css"

const Input = (props) => {
  const [value, setValue] = useState(5)

  const onChangeValue = (e) => {
    let tempValue = parseInt(e.target.value)
    e.target.value = parseInt(e.target.value)
    isNaN(tempValue) ? setValue(0) : setValue(tempValue)
  }

  const onClickSubmit = (e) => {
    let error;
    e.preventDefault()
    value < 5 ? error = "Cannot submit a value under $5!" : error = undefined;
    props.onClickProp(value, error)
    setValue(5)
  }

  return (
    <form className="input-container">
      <label className="input-label">$</label>
      <input className="input" type="number" value={value} onChange={e => onChangeValue(e)}/>
      <input type="submit" className="input-button" value="Give Now" onClick={(e) => onClickSubmit(e)}></input>
    </form>
  )
}

export default Input