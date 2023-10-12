import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/register/Login';
import CoffeeMenu from './pages/coffeeMenu/CoffeeMenu';
import ContactUs from './pages/contactus/ContactUs';
import Reviews from './pages/reviews/Reviews';
import WeekSpecial from './pages/weekSpecial/WeekSpecial';
import { useSelector } from 'react-redux';
import Cart from './pages/cart/Cart';
import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path="/coffeemenu" element={<CoffeeMenu/>} />
        <Route path='/weekspecial' element={<WeekSpecial />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/reviews' element={<ProtectedRoute ><Reviews /></ProtectedRoute>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
