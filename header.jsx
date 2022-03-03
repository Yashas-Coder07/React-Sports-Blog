import React from "react";

function Header() {
  return (
    <header>
      
      <div>
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="nav">
        <h3  className="navBar">HOME</h3>
     <h3  className="navBar">ABOUT</h3>
     <h3  className="navBar">DEVELOPER</h3>
     <h3  className="navBar">BLOG</h3>
  
     <img className="logo" src="Untitled.jpg"></img>
    
     </div>
     </nav>
     <img className="nearby" src ="nearby.png"/>
     </div>
    </header>
  );
}

export default Header;