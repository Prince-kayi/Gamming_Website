import React from "react"
import './App.css';
import { BrowserRouter } from "react-router-dom"
import SlideNav from "./Front/SlideNav";
import Routing from "./Front/Navigation";
import Footer from "./Front/bottom/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <SlideNav/>
    <Routing/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
