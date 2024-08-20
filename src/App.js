import "./App.scss";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {Link} from "react-scroll"
import { VscArrowSmallUp } from "react-icons/vsc";


export default function App() {
  return (

    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial/>
      <Contact />
      <Footer />
      <div className="top-refer-button">
      <Link to="home-container" spy={true} smooth={true} offset={0} duration={150} ><VscArrowSmallUp /></Link>
      
      </div>
    </div>
  );
}

 
