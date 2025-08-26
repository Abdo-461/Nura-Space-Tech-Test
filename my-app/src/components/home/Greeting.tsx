import React from 'react'

interface GreetingProps{
  firstName: string;
  lastName: string;
};

export default function Greeting({ firstName, lastName }: GreetingProps) {
  return (
     <div className="greeting-container">
        <h1>Welcome to NuraSpace, {firstName} {lastName}!</h1>
        <h2>You've entered NuraSpace, but really… 
            you've entered Aby's headspace — population: clean code and bad puns 👨‍💻.
        </h2>
    </div>
  )
}
