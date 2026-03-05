import React from "react";
import {HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import AOS from "aos";
import { useEffect,useState } from "react";
import Loader from "./components/Loader";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    AOS.refreshHard();

  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <HashRouter >
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </React.Fragment>
  );
}
