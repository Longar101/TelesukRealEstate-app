import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import {store }from './redux/store';

import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Agents from './component/Agent';
import Property from './component/Property';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Services from './component/Services';
import PartnerWithTelesuk from './component/PartnerWithTelesuk';
import Testimonies from './component/Testimonies';
import Location from './component/Location';
import Advert from './component/Advert';
import Apartment from './pages/Apartment';

 function App() {
  return (
    <>
  <BrowserRouter>
   <Header/> 
  <Routes>
<Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/location' element={<Location/>}/>
  <Route path='/property' element={<Property/>}/>
  <Route path='/singup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/Agent' element={<Agents/>}/>
  <Route path='/partnerwithTelesuk'  element={<PartnerWithTelesuk/>}/>
  <Route path='/Advert'element={<Advert/>}/>
  <Route path='/testimonies' element={<Testimonies/>}/>

  <Route path="/apartment" element={<Apartment/>}/>
 

  
   

  </Routes>
  </BrowserRouter>
  
 </>

  )
}

export default App;
