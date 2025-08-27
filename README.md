# Nura-Space-Tech-Test
This is technical assessment for Senior Software Engineer at Nura-Space

# React + Node.js Application

This project is a full-stack web application built with **React (frontend)** and **Node.js/Express (backend)**.  
It demonstrates how to create, run, and deploy a modern JavaScript application.

---

## Features
- React (frontend) with TypeScript support
- Node.js + Express (backend API)
- WebSocket support for real-time updates


## Installation

### 1. Clone the repo
git clone https://github.com/Abdo-461/Nura-Space-Tech-Test.git
cd Nura-Space-Tech-Test/my-app 
cd Nura-Space-Tech-Test/my-sever

### 2. Install dependencies
npm install (on both folders)

### 3. Start Server!
npm start (on both applications)

## Functionality

Navigate to /Users/abdotech/Desktop/NuraSpaceTT/Nura-Space-Tech-Test/my-app/src/components/forms/LoginForm.tsx

and choose one the user provided into the code for a login credential. This is mock data and doesn't point to any form of storage.

for example : username: danderson,
              password: SafeP@ss001

When prompted to choose a city, an API call will be made to `https://wttr.in/` public API to get weather data for the chosen city. When done so, the app subscribes the user to weather condition update from a custom websocket server that sends back a message that shows if the weather is suitable for a car ride with the top down or not. 

## Trade Offs and Challenges

There has been several tradeoffs in the functionlity and challenges that were needed to overcome building this project. Please don't hestitate to reach out for a discussion on this project.