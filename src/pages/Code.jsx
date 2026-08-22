import React from 'react'
import '../scss/code.scss'
import PageTitle from '../components/PageTitleFolder/PageTitle'
import Top from '../components/Top/Top'
import LeftCode from '../components/Code/LeftCode/LeftCode'
import RightCode from '../components/Code/RightCode/RightCode'


const Code = () => {
  return (
    <div className="code">

        <PageTitle title1="The" title2="Code" />
        
        <div className="innerCode">

          <LeftCode />
          <RightCode />

        </div>
    </div>
  )
}

export default Code