import React from 'react';
import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Student from "./Components/Student";
import Details from './Components/Details';
import AddStudent from './Components/AddStudent';
import './style.css'


const App=()=> {
  return (
    <div>
      <Details>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/AddStudent" element={<AddStudent/>}/>
    


      

    </Routes>
    </BrowserRouter>
    </Details>
    </div>
  );
}

export default App;
