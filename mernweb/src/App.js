import logo from './logo.svg';
import './App.css';
import './Footer.css';
import React,{Component} from 'react'
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Home from './components/Home';
import About from './components/About'
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import {Routes, Route, Router} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Logout from './components/Logout';

//import {BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route  exact path="/" element={<Home/>}/>
          <Route  exact path ="/about" element={<About/>}  />
          <Route  exact path ="/services" element={<Services/>}/>
          <Route  exact path ="/contact" element={<Contacts/>}/>
          <Route  exact path ="/dashboard" element={<Dashboard/>}/>
          <Route  exact path ="/login" element={<Login/>}/>
          <Route  exact path ="/logout" element={<Logout/>}/>
          <Route  exact path ="/register" element={<Register/>}/>
        </Routes>
        <Footer/>

    </>
  );
}

export default App;
