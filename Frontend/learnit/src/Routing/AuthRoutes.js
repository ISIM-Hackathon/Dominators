import {Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import About from '../Screens/About';
import Navbar from '../Layout/Navbar';
import ViewCourses from '../Screens/ViewCourses';
import Login from '../Screens/Login';
import Register from '../Screens/Register';

function AuthRoutes() {



    return (
      <>

      <Routes>

           <Route path='/' element = {<Login/>} />
           <Route path='/login' element = {<Login/>} />
           <Route path='/register' element = {<Register/>} />
           <Route path='*' element = {<Login/>} />


      </Routes>
  
      </>
      
    )
  }
  
  export default AuthRoutes;