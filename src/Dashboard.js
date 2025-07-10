import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [image, setImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const loginSuccess = sessionStorage.getItem('loginSuccess');
    if (loginSuccess === 'true') {
      setShowPopup(true);
      sessionStorage.removeItem('loginSuccess'); // Prevent popup on refresh
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <div className="dashboard-container">
      {showPopup && (
        <div className="success-popup">✅ Login Successful!</div>
      )}

      <h1>🎉 Welcome to the Dashboard!</h1>
      <p></p>

      <p id="upload-text">Upload the Image</p>
      <div className="upload-section">
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="default-file-input"
        />
      </div>

      {image && (
        <div className="preview-section">
          <h3>Preview:</h3>
          <img src={image} alt="Preview" className="preview-image" />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
