# Project Scissor

A url shortening application, still needs to be worked on, it is still in progress 

## Table of Contents

- [Scissor](#scissor)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Backend API](#backend-api)
  - [Dependencies](#dependencies)
  - [Other Activities](#other-activities)

## About

In today’s fast-paced world, brevity is key. From music and speeches to wedding receptions, keeping things concise is the trend. Scissor is a handy tool that shortens URLs, making them as brief as possible.

## Features

- URL Shortening:
Scissor enables users to convert long URLs into short, manageable links. Simply paste a long URL into the Scissor platform, and a shorter version is generated instantly. These shortened URLs are ideal for sharing on social media and other platforms.
- Custom URLs:
With Scissor, users can create personalized shortened URLs. Choose a custom domain name and tailor the URL to fit your brand or content. This feature is perfect for individuals and small businesses looking to create branded links.
- QR Code Generation:
Scissor also generates QR codes for your shortened URLs. Users can download these QR code images for use in promotional materials or on their websites. This feature is powered by a third-party QR code generator API integrated into the Scissor platform.
- Analytics:
Scissor offers basic analytics to help users monitor the performance of their shortened URLs. Track the number of clicks and see where the traffic is coming from, providing valuable insights into your link’s effectiveness.

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org) (version 20.11.0)
- [npm](https://www.npmjs.com)
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ayomikun98/SCISSOR.git
   ```

2. Navigate to the project directory:

   ```bash
   cd scissor
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173/` to see the application running.

3. Start coding and modify the project as per your requirements.

### Building for Production

To create a production-ready build of your project, run the following command:

```bash 
npm run build
```

This will generate an optimized build in the `dist` directory, ready for deployment.

## Backend API 

The backend api used: `http://cutly.onrender.com` and its documentation can be accessed on `http://cutly.onrender.com/docs`

## Dependencies

These are the main dependencies and their versions used in the project.

- [React](https://reactjs.org) (version 18.2.0)
- [React Router Dom](https://reactrouter.com) (version 6.14.1)
- [React Router Hashlink](https://github.com/rafgraph/react-router-hash-link) (version 2.4.3)
- [Firebase](https://firebase.google.com) (version 10.13.0)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) (version 10.0.5)
- [Clipboard Copy](https://www.npmjs.com/package/clipboard-copy) (version 4.0.1)

## Other Activities

- Wrote component tests for: 
  - `App Component`
  - `Button Component`
  - `Input Component`
##
- Wrote unit tests for: 
  - `WhyScissor Component`
  - `Revolutionize Component`