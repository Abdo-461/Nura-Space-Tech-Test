import React from 'react'
import { useState } from 'react';
import HomePage from '../home/HomePage';
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const user = Users.find(user => user.username === email && user.password === password);
        if (user) {
            navigate('/home');
        } else {
            alert('Invalid email or password. Please try again.');   
        }
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        setEmail(email);
    }       

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
    }







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
            onChange={handleEmail}
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
