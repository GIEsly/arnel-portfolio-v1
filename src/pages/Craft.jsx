import React from 'react'
import '../scss/craft.scss'
import PouredCoffee from '../components/CarftFolder/RightFolder/PouredCoffee/PouredCoffee'
import OneBox from '../components/CarftFolder/LeftFolder/OneBox/OneBox'
// import FourBox from '../components/CarftFolder/LeftFolder/FourBox/FourBox'
import SignatureContainer from '../components/CarftFolder/RightFolder/SignatureContainer/SignatureContainer'
import Qoutes from '../components/CarftFolder/Qoutes/Qoutes'
import PageTitle from '../components/PageTitleFolder/pageTitle'
import Top from '../components/Top/Top'
import AnimNum from '../components/CarftFolder/LeftFolder/AnimNum/AnimNum'

const Craft = () => {
  return (
    <div className="craft">

      <PageTitle  className="carfPage" title1="The" title2="Craft" />

      <div className="innerSection">

        {/* left side start --- */}
        <div className="left">
          <OneBox />
          <AnimNum />
          {/* <FourBox /> */}
        </div>
        {/* left side end --- */}

        {/* right side start --- */}
        <div className="right">

          <Top title="where i've poure" />

          <div className="innerRight">
            {/* container start --- */}
            <div className="container">
              <PouredCoffee store="NFI" position="Barista / Admin"/>
              <PouredCoffee store="Cafe' Nero" position="Shift Leader"/>
              <PouredCoffee store="Everyday Roastery" position="Barista"/>
              <PouredCoffee store="Cherriez Cafe'" position="Barista / Cashier"/>
              <PouredCoffee store="Costa Coffee" position="Barista Maestro"/>
            </div>
            {/* container end --- */}

            {/* signature start --- */}
            <SignatureContainer />
            {/* signature end --- */}
          </div>


        </div>
        {/* right side ending --- */}
        
      </div>

      <Qoutes />

    </div>
  )
}

export default Craft