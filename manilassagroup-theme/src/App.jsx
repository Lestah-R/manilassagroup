import React, { useState } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Newsroom from "./components/Newsroom";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
                    <Route path='/' element={<About />} />
                    <Route path='/services' element={<Services />} />
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
