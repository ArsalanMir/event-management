// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking"; 
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/booking" element={<Booking />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
