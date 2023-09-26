import React from 'react'
import "./header.scss"
import whiteCoffee from "../../assets/white-coffee.jpg";
import blackCoffee from "../../assets/black-coffee.jpg";

const Header = () => {
  return (
    <div className='header'>
      <div className='header-divide'>
        <div className='divide1'></div>
        <div className='divide2'></div>
      </div>
      <div className='header-info'>
        <div className='header-quote'>
          <span className='header-span'>Where Every Cup</span> Tells a Story ...
        </div>
        <div className='header-cards'>
        <div className='card'>
          <img src={whiteCoffee} alt="" />
          <div className='price'>$ 2.00</div>
        </div>
        <div className='card'>
          <img src={blackCoffee} alt="" />
          <div className='price'>$ 2.00</div>
        </div>
        </div>
        <div className='header-register'>
          <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Header