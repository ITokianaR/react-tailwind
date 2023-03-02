import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './layouts/Navbar';
import Login from './components/Login';
import './index.scss';

const WithNav = () => {
  return (
    <>
      <Navbar />
             
      <Outlet />
    </>
    );
}

const WithoutNav = () => {
  return(
    <Outlet />
)}

const App = () => {
  return (
    <> 
      <Routes>

        <Route  element={<WithoutNav />}>
          <Route path="/" element={<Login />} /> 
        </Route>

        <Route  element={<WithNav />}>
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
