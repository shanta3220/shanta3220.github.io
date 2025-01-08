import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import MatrixCanvasBackground from "./components/MatrixCanvasBackground/MatrixCanvasBackground";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <AnimatedBackground />
        <MatrixCanvasBackground />

        <div className="content">
          <CustomCursor />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
