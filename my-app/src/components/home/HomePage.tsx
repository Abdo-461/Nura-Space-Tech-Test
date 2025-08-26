import React from 'react'
import Greeting from './Greeting';
import WeatherWidget from './WeatherWidget';

export default function HomePage() {

   const GreetingProps = {
    firstName: sessionStorage.getItem('firstName') || 'Guest',
    lastName: sessionStorage.getItem('lastName') || ''
   };

  return (
   <div className="home-page">
      <Greeting {...GreetingProps} />
      <WeatherWidget />
   </div>

    
  )
}
