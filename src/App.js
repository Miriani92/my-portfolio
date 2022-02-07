import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/about" element={<About />} />
        <Route path="/components/projects" element={<Projects />} />
        <Route path="/components/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
