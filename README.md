# 🚀 WebPulse

<div align="center">

## A Modern React REST API Portal

A polished Single Page Application built with **React.js, Vite, Tailwind CSS, Axios, React Router, and Context API**.

<br>

<a href="https://webpulse-app.vercel.app/">
  <img src="https://img.shields.io/badge/Live%20Demo-WebPulse-blue?style=for-the-badge&logo=vercel" alt="Live Demo">
</a>

<a href="https://github.com/saimanikantagunda626/WebPulse">
  <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repository">
</a>

</div>

---

## 🌐 Live Demo

### 🔗 https://webpulse-app.vercel.app/

WebPulse is a modern REST API portal that demonstrates how a React application can fetch, search, display, and manage API data through a clean and responsive user interface.

---

## 📸 Project Preview

### 🏠 Home Page

![WebPulse Home](screenshots/home.png)

### 🔎 Explore Page

![WebPulse Explore](screenshots/explore.png)

### 📄 Details Page

![WebPulse Details](screenshots/details.png)

### ❤️ Bookmarks Page

![WebPulse Bookmarks](screenshots/bookmarks.png)

### ℹ️ About Page

![WebPulse About](screenshots/about.png)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 REST API Integration | Fetches post data from a REST API using Axios |
| 🔎 Search | Search posts by title and content |
| 📄 Post Details | View complete information for individual posts |
| ❤️ Bookmarks | Save favorite posts for quick access |
| 💾 LocalStorage | Bookmarks remain available after page refresh |
| 🌍 Global State | Bookmark state is managed using React Context API |
| 🧭 Client-side Routing | Navigate between pages without full page reloads |
| ⚡ Lazy Loading | Pages are loaded dynamically using React lazy loading |
| 📱 Responsive UI | Designed for desktop, tablet, and mobile screens |
| 🚨 Error Handling | Handles loading, empty, and API error states |
| 🔗 SPA Routing | Vercel rewrite configuration supports direct routes |
| ❌ 404 Page | Custom page for invalid routes |

---

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### Libraries & Tools

![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=flat-square)
![React Router](https://img.shields.io/badge/React%20Router-Routing-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![Context API](https://img.shields.io/badge/Context%20API-State%20Management-61DAFB?style=flat-square)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=flat-square&logo=vercel&logoColor=white)

---

## 🧩 Application Pages

### 🏠 Home

The landing page introduces WebPulse and provides quick navigation to the main features.

### 🔎 Explore

The Explore page fetches posts from the REST API and provides:

- API data display
- Search functionality
- Bookmark actions
- Post cards
- User information
- Navigation to detailed views

### 📄 Details

The Details page displays complete information about a selected post.

Users can also bookmark or remove the post from bookmarks.

### ❤️ Bookmarks

The Bookmarks page displays all saved posts.

Features include:

- Saved post count
- Bookmark search
- Remove bookmark
- Navigate to post details
- Persistent LocalStorage data

### ℹ️ About

The About page provides information about the project, technologies, and React concepts used.

### ❌ 404

A custom 404 page is displayed when users visit an invalid route.

---

## 🔌 REST API

WebPulse uses **JSONPlaceholder** as the external REST API.

### API Endpoint

```text
https://jsonplaceholder.typicode.com/posts