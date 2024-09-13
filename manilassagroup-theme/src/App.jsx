import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
Axios.defaults.baseURL = "http://localhost:8000";
import Axios from "axios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Consulting from "./components/Consulting";
import Training from "./components/Training";
import Events from "./components/Events";
import Blogs from "./components/Blogs";
import Newsroom from "./components/Newsroom";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Signup from "./components/Signup";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path='/signup'
            element={<Signup />} // Add the Signup route
          />
          <Route
            path='/*'
            element={
              isAuthenticated ? (
                <>
                  <Header />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/consulting' element={<Consulting />} />
                    <Route path='/training' element={<Training />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/newsroom' element={<Newsroom />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/shop' element={<Shop />} />
                  </Routes>
                  <Footer />
                </>
              ) : (
                <Navigate to='/login' />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
