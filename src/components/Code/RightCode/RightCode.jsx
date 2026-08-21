import React from 'react'
import './rightcode.scss'
import Top from '../../Top/Top'

const RightCode = () => {
  return (
    <div className="rightCode">
      <Top title="Selected Work / 01" />

      <h2>E-commerce Storefront</h2>
      <p className='infoCode'>A full-stack storefront built end-to-end — product catalogue, cart, checkout, and admin dashboard. Written with React on top of an Express + MongoDB API, deployed live via Netlify.</p>

      <div className="boxContainer">
        <h2>Website Thumbnails</h2>
      </div>

      <div className="toolsUse">
        React.js / Node.js / Express.js / MongoDB / Rest Api
      </div>

    </div>
  )
}

export default RightCode