import {Routes, Route, Outlet} from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './components/Home';
import Student from './components/Student';
import Profile from './components/Profile'
import About from './components/About';
import Login from './components/Login';
import StudentDetails from './components/StudentDetails';
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
          <Route path="/student/details" element={<StudentDetails />} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
