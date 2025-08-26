import React from 'react'

export default function LoginForm() {
  return (
    <div className="login-container">
      <form className="login-box">
        <div className="login-title">Sign In</div>
        <div className="login-prompt">Please enter your email and password to continue.</div>
        <div className="login-form-group">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
