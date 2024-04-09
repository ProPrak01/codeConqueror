import React , { useState } from "react";
import "./cta.css";
const Popup = ({ onClose }) => {
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div id="aboutUs" className="popup-overlay">
      <div className="popup-content">
        <h2 style={{padding:"2rem"}}>About Us</h2>
        <p style={{padding:" 1rem 2rem"}}>This page is created by Prakash And karan singh
           The page is made to win the hackathon conducted by techsoc...
        </p>
        <button style={{padding:" 1rem 2rem", margin:"2rem 1.5rem"} }  onClick={onClose}>Back</button>
      </div>
    </div>
  );
};

const CTA = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);


  
  return (
    <div className="container">
      <div className="gradient-div">
        <div>
          <p>Request Early Access to Get Started</p>
          <h1>Register today & start exploring the endless possibilities.</h1>
        </div>
        <button onClick={togglePopup}>More About Us</button>
        {showPopup && <Popup onClose={togglePopup} />}
      </div>
    </div>
  );
};

export default CTA;
