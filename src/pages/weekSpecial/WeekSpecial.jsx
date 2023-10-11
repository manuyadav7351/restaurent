import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "../pages.scss"


const WeekSpecial = () => {
  return (
    <div className="coffee-page">
    <div className="page-navbar">
        <Navbar />
    </div>
    <div className="coffee-page-content">
        <div className="page-content">
            <h1>title</h1>
            <p>content</p>
        </div>
    </div>
</div>
  )
}

export default WeekSpecial