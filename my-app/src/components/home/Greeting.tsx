import React from 'react'

interface GreetingProps {
  firstName: string;
  lastName: string;
};

export default function Greeting({ firstName, lastName }: GreetingProps) {
  return (
    <div className="greeting-container">
      <h1>Welcome to NuraSpace, {firstName} {lastName}!</h1>
      <h2>Welcome to NuraSpace, but really…
        you've entered Aby's headspace
      </h2>
      <h3>Population: clean code and bad puns 👨‍💻.</h3>
    </div>
  )
}
