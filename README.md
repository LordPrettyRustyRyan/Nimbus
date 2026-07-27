# Nimbus – News Aggregator
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> A news aggregation platform built around a centralized Express API, providing a responsive React web client while preserving the original Android implementation as a legacy reference.

**[Nimbus](nimbus-lake.vercel.app/)** is a lightweight, API-driven news aggregator designed around a shared backend architecture. Instead of allowing individual clients to communicate directly with external news providers, Nimbus routes every request through a centralized Express API that securely handles API credentials, normalizes responses, and serves a consistent REST interface.

The project originally began as **~~The Daily Wave~~**, a native Android application developed in Java as a college project. As the NewsAPI free tier was discontinued for production use, the project was redesigned into a modern multi-platform architecture featuring a shared backend and a completely rebuilt web interface using React and TypeScript.

Today, Nimbus consists of three independent environments:
- **[Nimbus API](https://nimbus-api-backend.vercel.app/)** — Express.js backend
- **[Nimbus Web](nimbus-lake.vercel.app/)** — React + TypeScript frontend
- **Nimbus Android (Legacy)** — Original Java implementation preserved for reference

> Although the Android application remains functional and continues to fetch news through the shared Nimbus API, it is preserved as a legacy implementation. Its user interface reflects the original design from its initial development, that is no longer being updated or maintained for very long period. Development has since moved entirely to the modern web application powered by the shared Express backend.

---

## Features
- React + TypeScript web application
- Shared Express REST API
- Secure server-side API key management
- Browse news by category
- Search news articles by keyword
- Responsive news layout
- Read articles directly from their original source
- Unified API responses across clients
- 10-minute server-side response caching
- Vercel serverless deployment
- Legacy Android client included for historical reference

---

<details>
<summary><h2>Technology Stack</h2></summary>

| Technology | Purpose |
|------------|---------|
| React | Web frontend |
| TypeScript | Frontend development |
| Vite | Build tooling |
| Tailwind CSS | UI styling |
| Express.js | REST API |
| Node.js | Backend runtime |
| Axios | HTTP client |
| GNews API | News provider |
| Vercel | Backend & frontend deployment |
| Java | Legacy Android application |
| Android Studio | Legacy Android development |

</details>

---

<div align="center">

| <img width="1920" height="1080" alt="Nimbus Web Preview 1" src="https://github.com/user-attachments/assets/f0cb0863-e64c-41e4-9983-2ea232215499" /> | <img width="1920" height="1080" alt="Nimbus Web Preview 2" src="https://github.com/user-attachments/assets/9e80de10-cbf6-4e1a-a6db-8b9dff8c598b" /> | <img width="1920" height="1080" alt="Nimbus Web Preview 3" src="https://github.com/user-attachments/assets/0227a199-485f-4eb1-87e2-65834f66c83d" /> |
|:-:|:-:|:-:|

</div>

---

# Architecture
```mermaid
flowchart TD

A([User])

A --> B[Nimbus Web<br/>React • TypeScript • Vite]

subgraph Nimbus Backend
    C[Express REST API]
    D[Route Handler]
    E[10 Minute Memory Cache]
end

B --> C
C --> D
D --> E

E -->|Cache Hit| F[Return Cached Response]

E -->|Cache Miss| G[GNews API]

G --> H[Normalize Response]
H --> I[Store in Cache]
I --> J[Return JSON]

F --> K[Render Articles]
J --> K

subgraph Legacy
    L[Android App<br/>Java]
end

L -. Uses Same API .-> C
```

---

# Development Notes

### Project Evolution

Nimbus originally started as a native Android college project. Following changes to the NewsAPI free tier, the project was redesigned around a centralized backend architecture, allowing multiple clients to consume the same REST API without exposing API credentials.

The result is a cleaner, easier-to-maintain architecture where the backend acts as a dedicated gateway while the frontend focuses solely on the user experience.

### Repository Organization

The repository is organized as a monorepo containing independent applications that share a common backend.
