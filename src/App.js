import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useState } from "react";
//import { ThemeContext } from "./context";
//import { useContext } from "react";

function App() {
  
  return (
    <div 
    style={{backgroundColor: " #B2EBF2 "  ,
  }}
  >
     <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
   
    </div>
  );
}

export default App;
