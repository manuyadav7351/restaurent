import './App.css';
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Trending from "./component/trending/Trending";
import PopularDrink from "./component/popularDrink/PopularDrink"
import Aboutus from './component/aboutus/Aboutus';
// import Register from './component/register/Register';
// import Login from './component/register/Login';

function App() {
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
  );
}

export default App;
