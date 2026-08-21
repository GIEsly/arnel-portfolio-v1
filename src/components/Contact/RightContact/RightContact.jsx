import React from 'react'
import './rightContact.scss'
import InnerRightContact from './InnerRightContact/InnerRightContact'

const RightContact = () => {
  return (
    <div className="rightContact">
        <InnerRightContact title="Github" info="GIEsly" />
        <InnerRightContact title="Linkedin" info="in/arnel-bautista-a874671b6" />
        <InnerRightContact title="Email" info="arnelbautista101@gmail.com" />
        <InnerRightContact title="Phone" info="+971 52 293 0118" />
    </div>
  )
}

export default RightContact