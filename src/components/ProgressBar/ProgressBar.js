import React from 'react'
import "./ProgressBar.css"

const ProgressBar = ({ totalFund }) => {

  let style = {
    width: totalFund !== 0 ?
      totalFund > 5000 ?
        "100%" : totalFund/5000*100 + "%" 
      : "0px",
    borderTopRightRadius: totalFund/5000*100 >= 100 ? "8px" : "0px"
  }

  return (
    <div className="progress-bar" style={style}>
    </div>
  )
}

export default ProgressBar