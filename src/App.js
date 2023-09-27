import './App.css';
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Trending from "./component/trending/Trending";
import PopularDrink from "./component/popularDrink/PopularDrink"
import Aboutus from './component/aboutus/Aboutus';
import Register from './component/register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Trending />
      <PopularDrink />
      <Aboutus />
      <Register />
    </div>
  );
}

export default App;
