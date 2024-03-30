import React from "react";
import "../global.css";
import './Bio.jsx';

function Homepage () {
    return (
      <div className="header">
        <header className="head">
        <div className="logo">Zakariye</div>
          <nav>
              <a href="">Home</a>
              <a href="#Bio">Bio</a>
              <a href="#Skills">Skills</a>
             <a href="#Projects">Projects</a>
              <a href="#Contact">Contact</a>
           
          </nav>
        </header> 
      </div>
      );
    }
export default Homepage