import React from 'react'
import '../scss/contact.scss'
import Top from '../components/Top/Top'
import LeftContact from '../components/Contact/LeftContact/LeftContact'
import RightContact from '../components/Contact/RightContact/RightContact'

const Contact = () => {
  return (
    <div className="contact">
        <Top title="Get in Touch" />

        <div className="innerContact">
            <LeftContact />
            <RightContact />
        </div>

    </div>
  )
}

export default Contact