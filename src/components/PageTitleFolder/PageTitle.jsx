import React from 'react'
import './pageTitle.scss'

const PageTitle = (props) => {
  return (
    <div className="headerSection">

        <div className="title">
            <h2>{props.title1 }<span>{props.title2}</span></h2>
        </div>
    </div>
  )
}

export default PageTitle;