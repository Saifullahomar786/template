import { useState } from "react";
import "./App.css";

import { Link } from "react-router-dom";

import bg from './bg.jpg';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handlePasswordChange = (e: any) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    // Add password validation logic here (e.g., minimum length).
    setIsPasswordValid(inputValue.length >= 6); // Example: Password should be at least 6 characters.
  };

  const handleConfirmPasswordChange = (e: any) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!isPasswordValid) {
      alert("Please enter a valid password.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // Add your password reset logic here.
    console.log("Password reset successfully");
  };

  return (
    <div className="landing-page">
      <div className="image-side">
        <img src={bg} alt="Landing Page Image" className="img-fluid" />
      </div>
      <div className="login-side">
        <div className="login-form">
          <h2 style={{paddingLeft: '130px', fontWeight: '800',  color :'#922c88'}}>Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>

            <Link to="/resetpassword">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isPasswordValid || password !== confirmPassword}
                style={{
                  padding: "8px 50px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.19)",
                  backgroundColor: '#922c88',
                  border: 'none'
                }}
              >
                Reset Password
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
