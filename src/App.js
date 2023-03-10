import {Routes, Route, Outlet, useParams} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './components/Home';
import Student from './components/Student';
import Profile from './components/Profile'
import About from './components/About';
import Login from './components/Login';
import Details from './components/StudentDetails';
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
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/about" element={<About />} />
          
          <Route path="/student" element={<Student />} />
          <Route path="/student/details/:id" element={<Details />} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
