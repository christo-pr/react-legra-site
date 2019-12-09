import React from 'react'

function Controls (props) {
  const { value, setValue } = props

  return(
    <div className="slidecontainer mx-auto text-center">
      <small>Brick size: {value}</small>
      <input
        type="range"
        min="10"
        value={value}
        max="50"
        onChange={(e) => setValue(e.target.value)}
        className="slider"/>
    </div>
  )
}

export default Controls
