import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  {
    firstName: "John",
    lastName: "Smith",
    username: "jsmith",
    password: "P@ssw0rd123!"
  },
  {
    firstName: "Emma",
    lastName: "Johnson",
    username: "ejohnson",
    password: "qWeRtY!92"
  },
  {
    firstName: "David",
    lastName: "Williams",
    username: "dwilliams",
    password: "SeCur3#45"
  },
  {
    firstName: "Sarah",
    lastName: "Brown",
    username: "sbrown",
    password: "MyP@ss_78"
  },
  {
    firstName: "Michael",
    lastName: "Davis",
    username: "mdavis",
    password: "ZxCvB!567"
  },
  {
    firstName: "Olivia",
    lastName: "Miller",
    username: "omiller",
    password: "P@55word!88"
  },
  {
    firstName: "James",
    lastName: "Wilson",
    username: "jwilson",
    password: "T1g3r$2024"
  },
  {
    firstName: "Sophia",
    lastName: "Taylor",
    username: "staylor",
    password: "H@ppyDay92"
  },
  {
    firstName: "Daniel",
    lastName: "Anderson",
    username: "danderson",
    password: "SafeP@ss001"
  },
  {
    firstName: "Ava",
    lastName: "Thomas",
    username: "athomas",
    password: "G00dLuck#44"
  }
]

export default function LoginForm() {

  const [Users, setUsers] = useState(users);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const user = Users.find(user => user.username === username && user.password === password);
    if (user) {
      navigate('/home');
      // for demo purposes only, storing in session storage,
      // to create a personalized user experience
      sessionStorage.setItem('firstName', user.firstName);
      sessionStorage.setItem('lastName', user.lastName);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userName = e.target.value;
    setUsername(userName);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
  }

  return (
    <div className="login-container">
      <form className="login-box">
        <div className="login-title">
          <h2>Login</h2>
        </div>
        <div className="login-prompt">
          <h3>Please enter your username and password to continue.</h3>
        </div>
        <div className="login-form-group">
          <input
            type="email"
            placeholder="username"
            className="login-input"
            onChange={handleUsername}
            required
          />
          <input
            type="password"
            placeholder="password"
            className="login-input"
            onChange={handlePassword}
            required
          />
          <button
            type="submit"
            className="login-button"
            onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
