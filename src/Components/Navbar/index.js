import React, { useEffect } from "react";
import "./index.css";

function handleScroll() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
}

function handleNav() {
  let hamburger = document.querySelector(".hamburger");
  let nav_links = document.querySelector(".navbar-links-container");

  hamburger.classList.toggle("active");
  nav_links.classList.toggle("active");
}

function handleLinkClick() {
  let hamburger = document.querySelector(".hamburger");
  let nav_links = document.querySelector(".navbar-links-container");

  hamburger.classList.remove("active");
  nav_links.classList.remove("active");
}
function Navbar() {
  useEffect(() => {
    let hamburger = document.querySelector(".hamburger");
    let nav_links = document.querySelector(".navbar-links-container");

    hamburger.addEventListener("click", handleNav);

    window.addEventListener("scroll", handleScroll);

    document.querySelectorAll(".navbar-links-container p").forEach((n) => {
      n.addEventListener("click", handleLinkClick);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="logo">
          <h2>Uday Devikar</h2>
        </div>
        <div className="navbar-links-container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#experience">Experience</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#footer">Contact</a>
          </p>

          <div className="resume">
            <button>
              <a href="/portfolio/assets/resumeUday.pdf" download >
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
