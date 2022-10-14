import './App.scss';
import { Home } from './Pages/Home/Home';
import { Shop } from './Pages/Shop/Shop';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import { Navbar } from './Components/Navbar/Navbar';
// import { Searchbar } from './Components/Searchbar/Searchbar';
import { Signin } from './Pages/Signin/Signin';
// import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Signin' element={<Signin/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
