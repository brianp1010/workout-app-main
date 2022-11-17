import React from "react";
import About from "./pages/About";
import CalendarApp from "./pages/CalendarApp";
import Fitness from "./pages/Fitness";
import Navi from "./pages/Navi";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import {Route, Routes} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext'
import './index.js';


function App() {
  return (
    <AuthProvider> 
      <div className="justify-content-center bg-dark text-white">
      <Navi />
        <Routes>
          <Route path="/about-us" element={<About></About>} />
          <Route path="/calendar" element={<CalendarApp></CalendarApp>} />
          <Route path="/fitness" element={<Fitness></Fitness>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/pricing" element={<Pricing></Pricing>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/login" element={<Login></Login>}/>
          <Route path= "/signup" element={<Signup></Signup>}/>
          <Route path= "/forgot-password" element={<ForgotPassword></ForgotPassword>}/>
          <Route path= "/update-profile" element={<UpdateProfile></UpdateProfile>}/>
        </Routes>
      </div>
      </AuthProvider> 
  )
}
export default App;
