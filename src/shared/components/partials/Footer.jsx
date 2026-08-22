import React from 'react'
import '../../../scss/footer.scss'
import footerlogo from '../../../components/assets/icons/logoFolder/3.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
        <div className="inner-footer">

          <img src={footerlogo} alt="footer logo" className="logo" />

          <div className="info-Container">
            <p className='ftinfo'>&copy; 2026 Lets make difference</p>
            <p className='ftinfo' >P-v1</p>
          </div>

        </div>
    </div>
  )
}

export default Footer