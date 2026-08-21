import React from 'react'
import '../scss/about.scss'
import sample from '../components/assets/images/sample_coffee_latter_art/1.jpg'
import LeftAbout from '../components/AboutFolder/LeftFolder/LeftAbout'
import InnerrightLeft from '../components/AboutFolder/RightFolder/InnerRightLeft/innerright-Left'
import InnerrightRight from '../components/AboutFolder/RightFolder/InnerRightRight/InnerrightRight'


const About = () => {

  return (
    <div className="about">
        <div className="innerAbout">

            {/* left container */}
            <div className="left">
              <LeftAbout />
            </div>

            {/* right container */}
            <div className="right">
                <InnerrightLeft />
                <InnerrightRight />
            </div>

        </div>
    </div>
  )
}

export default About