import React from 'react'
import './leftCode.scss'
import Top from '../../Top/Top'
import vscode from '../../assets/icons/web-icons/vscode-logo.svg'
import nodejs from '../../assets/icons/web-icons/nodejs-logo.svg'
import yarn from '../../assets/icons/web-icons/yarn-logo.svg'
import html from '../../assets/icons/web-icons/html-logo.svg'
import css from '../../assets/icons/web-icons/css-logo.svg'
import scss from '../../assets/icons/web-icons/scss-logo.svg'
import js from '../../assets/icons/web-icons/js-logo.svg'
import reactjs from '../../assets/icons/web-icons/reactjs-logo.svg'
import server from '../../assets/icons/web-icons/server-logo.svg'
import express from '../../assets/icons/web-icons/express-logo.svg'
import restapi from '../../assets/icons/web-icons/restApi-logo.svg'
import database from '../../assets/icons/web-icons/database-logo.svg'
import mongodb from '../../assets/icons/web-icons/mongodb-logo.svg'
import github from '../../assets/icons/web-icons/github-logo.svg'
import wordpress from '../../assets/icons/web-icons/wordpress-logo.svg'
import elementor from '../../assets/icons/web-icons/elementor-logo.svg'
import ex from '../../assets/icons/web-icons/express-logo.svg'
import vite from '../../assets/icons/web-icons/vite-logo.svg'

const LeftCode = () => {
  return (
    <div className="leftCode">
        <Top title="Toolkit"/>

        <p className='info'>A stack that lets me build fast, fluent, and honest. Front-end craft on top of a back-end I actually understand.</p>

        <div className="innerBtn">
          <img className='icon' src={vscode} alt="vscode" />
          <img className='icon' src={vite} alt="vscode" />
          <img className='icon' src={nodejs} alt="nodejs" />
          <img className='icon' src={yarn} alt="yarn" />
          <img className='icon' src={html} alt="html" />
          <img className='icon' src={css} alt="css" />
          <img className='icon' src={scss} alt="scss" />
          <img className='icon' src={js} alt="js" />
          <img className='icon' src={reactjs} alt="reactjs" />
          <img className='icon' src={ex} alt="reactjs" />
          <img className='icon' src={server} alt="server" />
          <img className='icon' src={restapi} alt="rest api" />
          <img className='icon' src={database} alt="database" />
          <img className='icon' src={mongodb} alt="mongodb" />
          <img className='icon' src={github} alt="github" />
          <img className='icon' src={wordpress} alt="wordpress" />
          <img className='icon' src={elementor} alt="elementor" />
        </div>
    </div>
  )
}

export default LeftCode