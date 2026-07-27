# Nimbus Web
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

> The official web client for **Nimbus**

Nimbus Web provides a modern, responsive interface for browsing the latest news through the shared Nimbus API.

### Backend
Nimbus Web communicates exclusively with the shared Nimbus API and does not access GNews directly.

---

## Features
* Browse news by category
* Search articles by keyword
* Responsive news layout
* Opens original articles in a new browser tab
* Fast client-side navigation
* Powered by the centralized Nimbus API

## Installation
Install dependencies:

```bash
npm install
```

### Environment Variables
Create a `.env.local` file for local development.

```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```
