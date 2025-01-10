import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import MatrixCanvasBackground from "./components/MatrixCanvasBackground/MatrixCanvasBackground";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage/AboutPage"));
const ProjectsPage = React.lazy(() =>
  import("./pages/ProjectsPage/ProjectsPage")
);
const ContactPage = React.lazy(() => import("./pages/ContactPage/ContactPage"));
const NotFoundPage = React.lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage")
);

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
            <React.Suspense
              fallback={<p className="loading-text">Loading...</p>}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>{" "}
            </React.Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
