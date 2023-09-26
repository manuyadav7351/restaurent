import './App.css';
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Trending from "./component/trending/Trending";
import PopularDrink from "./component/popularDrink/PopularDrink"
import Aboutus from './component/aboutus/Aboutus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Trending />
      <PopularDrink />
      <Aboutus />
    </div>
  );
}

export default App;
