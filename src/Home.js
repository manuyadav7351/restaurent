import React from 'react'
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Trending from "./component/weekspecial/Trending";
import PopularDrink from "./component/coffeemenu/PopularDrink"
import Aboutus from './component/aboutus/Aboutus';

const Home = () => {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Trending />
    <PopularDrink />
    <Aboutus />
    {/* <Register />
    <Login /> */}
  </div>
  )
}

export default Home