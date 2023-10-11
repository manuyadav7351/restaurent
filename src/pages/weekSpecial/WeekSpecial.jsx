import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "../pages.scss"
import "./weekSpecial.scss"
import { selectAllWeekSpecial } from '../../store/features/weekSpecial/weekSpecialSlice'
import { useSelector } from 'react-redux'

const WeekSpecial = () => {
  const weekSpecialMenu = useSelector(selectAllWeekSpecial);
  // weekSpecialMenu.map((coffee) => {
  //   console.log(coffee)
  // })

  return (
    <div className="coffee-page">
    <div className="page-navbar">
        <Navbar />
    </div>
    <div className="coffee-page-content">
        <div className="page-content">
            <div className='week-special'>
              <div className='week-special-top'>
                <h1>This Weeks Special</h1>
              </div>
              <div className='week-special-bottom'>
                {weekSpecialMenu.map((coffee)=>(
                  <div className='week-special-card' key={coffee.weekSpecialId}>
                    <img src={coffee.imageUrl} alt="" />
                    <div className='week-special-desc'>
                      <h3 className='name'>{coffee.name}  <span className='price'>{coffee.price} </span></h3>
                      <button className='Order-Now'>Order Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default WeekSpecial