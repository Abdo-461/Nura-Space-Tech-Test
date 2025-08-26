import React from 'react'
import Greeting from './Greeting';

export default function HomePage() {

   const GreetingProps = {
    firstName: sessionStorage.getItem('firstName') || 'Guest',
    lastName: sessionStorage.getItem('lastName') || ''
   };

  return (
    <Greeting {...GreetingProps} />
  )
}
