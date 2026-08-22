import React from 'react'
import pics from '../../assets/images/me/arnel-1.png'
import signature from '../../assets/icons/logoFolder/signatureName/arnelLogoFont.png'
import './right.scss'

const Right = () => {
  return (
     <div className="right">
        <img src={pics} alt="my iamge" className='mainImg'/>
        
        <div className="sig">
          <img src={signature} alt="name signature" className='signature'/>
        </div>
    </div>
  )
}

export default Right    