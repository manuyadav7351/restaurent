import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/register/Login';
import CoffeeMenu from './pages/coffeeMenu/CoffeeMenu';
import ContactUs from './pages/contactus/ContactUs';
import Reviews from './pages/reviews/Reviews';
import WeekSpecial from './pages/weekSpecial/WeekSpecial';
import Cart from './pages/cart/Cart';
import ProtectedRoute from "./ProtectedRoute";
import Order from './pages/order/Order';
import User from './pages/user/User';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path="/coffeemenu" element={<CoffeeMenu/>} />
        <Route path='/weekspecial' element={<WeekSpecial />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path='/reviews' element={<ProtectedRoute ><Reviews /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
        <Route path="/order" element={<ProtectedRoute><Order /></ProtectedRoute>}/>
        <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
