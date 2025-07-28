## SkillBridge Demo
This repository contains the frontend demo for the SkillBridge job recommendation system. It showcases an interactive user interface designed to help users discover relevant job opportunities based on skills, preferences, and profile data.

## Project Overview:
The goal of this project is to demonstrate the job matching algorithm through a responsive and modern web interface. It includes dynamic components, reusable UI elements, and smooth navigation for an optimal user experience.

## Tech Stack:
This project is built with the following modern technologies:

1. React – A JavaScript library for building user interfaces
2. TypeScript – Strongly-typed JavaScript for scalable, maintainable code
3. Vite – Fast and lightweight development server and build tool
4. Tailwind CSS – Utility-first CSS framework for responsive design
5. shadcn/ui – Beautifully designed React components built with Radix UI and Tailwind

## Getting Started:

To run the project locally, ensure you have Node.js and npm installed. Then follow the steps below:

1. Clone the repository

git clone <https://github.com/dininduabey/skillbridge-demo.git>

2. Navigate into the project directory

cd skillbridge-demo

3. Install dependencies

npm install

4. Start the development server
```
npm run dev
```
The development server will start with auto-reloading and a local preview, usually available at http://localhost:3000

Deployment:
This project can be deployed on any modern frontend hosting platform such as:

1. Vercel
2. Netlify
3. Render
4. GitHub Pages (with Vite config adjustments)
5. Make sure to build the project before deploying:
```
npm run build
```
Custom Domain Setup:
To set up a custom domain, refer to your hosting provider’s documentation. Typically, this involves:

1. Adding a custom domain in the host dashboard
2. Configuring DNS records (e.g., A or CNAME)
3. Verifying ownership

📁 Project Structure:
```
skillbridge-demo/
├── public/ # Static assets
├── src/ # Main source code
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── utils/ # Helper functions
│ └── main.tsx # Entry point
├── index.html
├── tailwind.config.ts
└── vite.config.ts
```
💡 Features:
1. Real-time job recommendations
2. Search and filtering functionality
3. Clean, responsive UI
4. Modular code structure
5. Fast development with hot reloading
