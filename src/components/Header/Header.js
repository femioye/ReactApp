import React from "react";
import "./Header.css";

const Header = props => (
        <div className="page-header">
          <h1>Clicky Game</h1>

             <p>Click on the images randomly to earn points! </p>
             <p>The user's score increases when an image is clicked for
                the first time, and resets to 0 if the same image is 
                clicked more than once.</p>
             <p>Score: {props.currentScore} Top Score: {props.highScore}</p>
             
        </div> 
    
)

export default Header;
