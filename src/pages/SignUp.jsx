import React, { useState } from 'react';
import { FaGoogle, FaCheck } from 'react-icons/fa';
import logo from '../images/logo-no-bg.png';
import bgvideo from '../assets/videos/bg.mp4';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordMatch(newPassword === confirmPassword);
    setPasswordCriteria(newPassword.length >= 8); // Example criteria: at least 8 characters
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordMatch(password === newConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordMatch && passwordCriteria) {
      // Handle form submission
      console.log('Form submitted');
    }
  };

  const isValidInput = (value) => value.trim() !== '';

  return (
    <div className="sign-up-container d-flex vh-100">
      <video autoPlay muted loop className="bg-video">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="left-section d-flex flex-column justify-content-center align-items-center p-4 ">
        <img src={logo} alt="SkillMentor" className="logo mb-4" style={{ maxHeight: '80px', maxWidth: '80px' }} />
        <h1>Welcome to SkillMentor</h1>
        <p>Join us and enhance your skills with the best mentors.</p>
      </div>
      <div className="right-section d-flex justify-content-center align-items-center w-100">
        <div className="sign-up-box bg-light p-4 rounded shadow-sm text-center w-100" style={{ maxWidth: '400px' }}>
          <h2 className="mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group position-relative mb-3">
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {isValidInput(firstName) && <FaCheck className="position-absolute text-success" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }} />}
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {isValidInput(lastName) && <FaCheck className="position-absolute text-success" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }} />}
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isValidInput(email) && <FaCheck className="position-absolute text-success" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }} />}
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordCriteria && <FaCheck className="position-absolute text-success" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }} />}
            </div>
            <div className="form-group position-relative mb-3">
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {passwordMatch && <FaCheck className="position-absolute text-success" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }} />}
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
          <div className="divider my-3">or</div>
          <button className="btn btn-google w-100 mb-3">
            <FaGoogle className="google-icon me-2" /> Sign Up with Google
          </button>
          <a href="sign-in" className="text-decoration-none">Already have an account? Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;