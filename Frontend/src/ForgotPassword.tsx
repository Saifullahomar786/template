import React, { useState } from "react";
import "./App.css";
import bg from "./bg.jpg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e:any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Validate the email format. You can use a simple regex or a more robust validation method.
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsEmailValid(emailPattern.test(inputValue));
  };

  const handleResetPassword = (e:any) => {
    e.preventDefault();
    // Add your logic to initiate the password reset here.
    if (isEmailValid) {
      // Perform the password reset action.
      console.log(`Reset password for email: ${email}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="landing-page">
      <div className="image-side">
        <img src={bg} alt="Landing Page Image" className="img-fluid" />
      </div>
      <div className="login-side">
        <div className="login-form">
          <h2 style={{ paddingLeft: '115px', fontWeight: '800', color: '#922c88' }}>Forgot Password</h2>
          <form onSubmit={handleResetPassword}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <Link to="/resetpassword">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!isEmailValid}
                style={{
                  padding: "8px 50px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 15px rgba(0,0,0,0.19)",
                  backgroundColor: '#922c88', 
                  border:'none',

                  marginLeft:'30px'
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

export default ForgotPassword;
