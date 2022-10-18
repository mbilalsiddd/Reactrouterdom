import React from "react";
import {
  BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Services from "../Screens/Service";
import Contact from "../Screens/Contact";
import Profile from "../Screens/Profile";
import Feedback from "../Screens/Dashboard/Feedback.js";
import Message from "../Screens/Dashboard/Message.js";
import Notification from "../Screens/Dashboard/Notification.js";
export default function AppRouter() {
  return (
    <Router>
        <div>
            <Link to ='/'>Home</Link>
            <Link to ='about'>about</Link>
            <Link to ='contact'>contact</Link>
            <Link to ='services'>services</Link>
            <Link to ='profile'>profile</Link>
            <Link to ='Feedback'>Feedback</Link>
            <Link to ='Message'>Message</Link>
            <Link to ='Notification'>Notification</Link>

        </div>
          <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="Feedback/*" element={<Feedback/>}/>
        <Route path="Message/*" element={<Message/>}/>
        <Route path="Notification/*" element={<Notification/>}/>
          </Routes>
    </Router>
  );
}