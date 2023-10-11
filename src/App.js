import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/register/Login';
import CoffeeMenu from './pages/coffeeMenu/CoffeeMenu';
import ContactUs from './pages/contactus/ContactUs';
import Reviews from './pages/reviews/Reviews';
import WeekSpecial from './pages/weekSpecial/WeekSpecial';
import { useSelector } from 'react-redux';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path="/coffeemenu" Component={CoffeeMenu} />
        <Route path='/weekspecial' Component={WeekSpecial} />
        <Route path='/contactus' Component={ContactUs} />
        <Route path='/reviews' Component={Reviews} />
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
