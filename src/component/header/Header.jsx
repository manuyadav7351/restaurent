import React from 'react'
import "./header.scss"
import whiteCoffee from "../../assets/white-coffee.jpg";
import blackCoffee from "../../assets/black-coffee.jpg";
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../store/features/register/registerSlice';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
          {isLoggedIn ? '' : <button onClick={ () => navigate("/register")}>Register</button>}
        </div>
      </div>
    </div>
  )
}

export default Header