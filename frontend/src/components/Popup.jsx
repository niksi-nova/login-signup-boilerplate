import React from "react";

function Popup({ title, message, onClose }) {
  return (
    <div className="popup-backdrop">
      <div className="popup-box">
        <h3 className="popup-title">{title}</h3>
        <p className="popup-msg">{message}</p>
        <button className="auth-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Popup;
