import {Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home';
import Contact from '../Screens/Contact';
import About from '../Screens/About';
import Navbar from '../Layout/Navbar';
import ViewCourses from '../Screens/ViewCourses';
import AuthRoutes from './AuthRoutes';

function AllRoutes() {
    return (
      <>
      <Navbar/>

      <Routes>

           <Route path='/' element = {<Home/>} />
           <Route path='/about' element = {<About/>} />
           <Route path='/contact' element = {<Contact/>} />
           <Route path='/viewCourses/:id' element = {<ViewCourses/>} />
           <Route path='/*' element = {<Home/>} />


      </Routes>
  
      </>
      
    )
  }
  
  export default AllRoutes;