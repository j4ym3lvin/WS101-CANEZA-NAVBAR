import Navbar from "./Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import './App.css'; // Import global styles

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;