import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import ScrollToTop from "./components/scrolltotop/Scrolltotop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
