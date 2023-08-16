import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
