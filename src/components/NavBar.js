import React from "react";
import Home from "./Home";
import About from "./About";
import ProjectItem from "./ProjectItem";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home">Home </a>
    <a href="#about">About </a>
    <a href="#home">Projects </a>
    
    
    {/* display an <a> tag for each link here */} 
  </nav>;
}

export default NavBar;
