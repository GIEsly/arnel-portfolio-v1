import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-scroll'
// import '../../../scss/navbar.scss'
import './nav.scss'
import logoName from '../../../components/assets/icons/logoFolder/3.png'
import openBtn from '../../../components/assets/icons/openNav.png'
import closeBtn from '../../../components/assets/icons/closeNav.png'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  

  return (
    <div className="navBar">

      {/* Navigation ---- */}
      <div className="inner_navbar">
        {/* logo container */}
          <div className="logoContainer">
              <img src={logoName} alt="my logo" />
          </div>

          {/* navigation container --- */}
          <nav className={openMenu ? 'open' : ''}>

            <img src={closeBtn} className='btnClose' alt="clossing button trigger" onClick={() => {setOpenMenu(false)}} />

            <ul className="list-of-links">
              <Link className="navLink" to="home" smooth={true} offset={-180} duration={200}><li>Home</li></Link>

              <Link className="navLink" to="about" smooth={true} offset={-80} duration={200}><li>About</li></Link>

              <Link className="navLink" to="craft" smooth={true} offset={-80} duration={200}><li>Craft</li></Link>

              <Link className="navLink" to="code" smooth={true} offset={-80} duration={200}><li>Code</li></Link>

              <Link className="navLink" to="contact" smooth={true} offset={-80} duration={200}><li>Contact</li></Link>
            </ul>
          </nav>

          {/* open button trigger */}
          <img src={openBtn} alt="Open button" className='btnOpen' onClick={() => {setOpenMenu(!openMenu)}}/>
      </div>

    </div>
  )
}

export default Navbar