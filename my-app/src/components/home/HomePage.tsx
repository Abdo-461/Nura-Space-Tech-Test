import React from 'react'

export default function HomePage() {

    const firstName = sessionStorage.getItem('firstName');
    const lastName = sessionStorage.getItem('lastName');

  return (
   <div>

    <h1>Welcome to NuraSpace, {firstName} {lastName}!</h1>

        <h2>You’ve entered NuraSpace, but really… 
            you’ve entered Aby’s headspace — population: clean code and bad puns 👨‍💻.</h2>
    </div>
  )
}
