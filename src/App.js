import "./App.css";
import { useState, useEffect } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loader from "./Components/Loader";

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Experience />
          <About />

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
