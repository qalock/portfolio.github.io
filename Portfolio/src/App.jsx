import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import AOS from "aos";
import { useEffect } from "react";


export default function App(){

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
    return(
        <React.Fragment>
            <BrowserRouter>
            <Navbar/>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme="dark"/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/about" element={ <About/> } />
                <Route path="/contact" element={ <Contact/> } />
            </Routes>
            <Footer/>
            </BrowserRouter>
        </React.Fragment>
    )
}