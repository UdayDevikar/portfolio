import "./App.css";
import { useState, useEffect } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


function App() {

  return (
    <div className="App">
        <>
          <Header />
          <Experience />
          <About />

          <Footer />
        </>
    </div>
  );
}

export default App;
