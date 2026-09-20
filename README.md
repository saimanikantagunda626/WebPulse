# 🚀 WebPulse

A modern React-based REST API portal built with React.js, Axios,
React Router, Context API, and Tailwind CSS.

## 🌐 Live Demo

https://webpulse-app.vercel.app/

## 📂 GitHub Repository

https://github.com/saimanikantagunda626/WebPulse

## ✨ Features

- Modern responsive UI
- REST API integration
- Axios for API requests
- Search and filter posts
- Post details page
- Bookmark functionality
- Global state management using Context API
- LocalStorage persistence
- React Router navigation
- Lazy loading
- Loading and error states
- Custom 404 page
- Responsive mobile navigation
- Vercel deployment

## 🛠️ Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- Axios
- React Router
- Context API
- REST API
- Vite
- Vercel

## 📁 Project Structure

src/
├── components/
│   ├── Loader.jsx
│   └── Navbar.jsx
│
├── context/
│   └── BookmarkContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Details.jsx
│   ├── Bookmarks.jsx
│   ├── About.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css

## 🔌 API

WebPulse uses JSONPlaceholder as the REST API source.

API:

https://jsonplaceholder.typicode.com/posts

## 🔖 Bookmark System

Users can bookmark posts from the Explore and Details pages.

Bookmarks are managed using React Context API and stored in
the browser's LocalStorage so they remain available after refreshing
the page.

## 🚀 Run Locally

Clone the repository:

git clone https://github.com/saimanikantagunda626/WebPulse.git

Navigate to the project:

cd WebPulse

Install dependencies:

npm install

Start the development server:

npm run dev

The application will run locally using Vite.

## 📦 Production Build

Create a production build:

npm run build

Preview the production build:

npm run preview

## 👨‍💻 Author

Sai Manikanta Gunda

GitHub:
https://github.com/saimanikantagunda626