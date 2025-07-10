import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Make sure this file exists and is styled correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
  e.preventDefault();
  if (email === 'admin@example.com' && password === 'password123') {
    sessionStorage.setItem('loginSuccess', 'true'); // ✅ Set session flag
    navigate('/dashboard');
  } else {
    setMessage('Invalid email or password.');
  }
};


  return (
    <div className="login-wrapper">
      <div className="left-pane">
        <div className="overlay">
          <h1>Welcome Back</h1>
          <p>
            Steganography is the art of invisible communication.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
</div>

        </div>
      </div>

      <div className="right-pane">
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>

          <button type="submit">Sign in now</button>
          <button
            type="button"
            className="link-button"
            onClick={() => alert('Password reset not implemented.')}
          >
            Lost your password?
          </button>

          {message && <p className="error-message">{message}</p>}

          <p className="terms">
            By clicking on "Sign in now" you agree to our{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
