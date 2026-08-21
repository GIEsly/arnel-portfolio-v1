import React from 'react'
import '../../../scss/footer.scss'
import footerlogo from '../../../components/assets/icons/logoFolder/3.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo-Container">
          <img src={footerlogo} alt="footer logo" className="logo" />
        </div>
        <div className="info-Container">
          <p className='ftinfo'>&copy; 2026 Lets make difference</p>
          <p className='ftinfo' >Portfolio - v1</p>
        </div>
    </div>
  )
}

export default Footer