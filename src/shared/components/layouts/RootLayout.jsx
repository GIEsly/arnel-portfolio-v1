import React from 'react'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'

const RootLayout = ({ children }) => {
  return (
    <div className="rootLayout">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout