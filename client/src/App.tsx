import Home from "./views/Home";
import Publications from "./views/Publications";
import About from "./views/About";
import People from "./views/People";
import Teaching from "./views/Teaching";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";


import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/publications" element={ <Publications/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/people" element={ <People/> }/>
        <Route path="/teaching" element={ <Teaching/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        {/* link to github */}
      </Routes>
    </>
  );
}

export default App;
