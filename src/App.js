
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Mens from './Components/Mens/Mens';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Womens from './Components/Womens/Womens';
import Kids from './Components/Kids/Kids';
import UserCart from './Components/Cart/UserCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path = '/' element={<Home/>} />
          <Route path = '/mens' element ={<Mens/>} />
          <Route path='/womens' element = { <Womens/> } />
          <Route path='/kids' element = { <Kids/> } />
          <Route path = '/cart' element = {<UserCart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
