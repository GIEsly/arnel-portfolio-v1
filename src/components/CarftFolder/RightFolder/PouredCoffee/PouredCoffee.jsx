import React from 'react'
import './poured.scss'

const PouredCoffee = (props) => {
  return (
    <div className="info">
        <h2 className='title'>{props.store}</h2>
        <p className='position'>{props.position}</p>
    </div>
  )
}

export default PouredCoffee