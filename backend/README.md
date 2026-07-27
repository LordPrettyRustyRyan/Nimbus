# Nimbus API
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![GNews API](https://img.shields.io/badge/GNews%20API-FF4F00?style=for-the-badge&logo=rss&logoColor=white)

> A lightweight Express.js REST API that serves as the centralized backend for **Nimbus**.

The API securely communicates with **GNews**, normalizes responses into a consistent format, and exposes simple endpoints consumed by all Nimbus clients.

### Clients:
The API is shared across the Nimbus ecosystem and is consumed by:
* Nimbus Web
* Nimbus Android (Legacy)

---

## Features
* Secure server-side API key handling
* REST API gateway for GNews
* Unified JSON response format
* Category filtering
* Keyword search
* 10-minute in-memory response caching
* CORS enabled
* Vercel serverless deployment

---

## API Endpoint

### Get News
```http
GET /api/news
```

```http
GET /api/news?category=technology
```

### Query Parameters

| Parameter  | Description      | Default   |
| ---------- | ---------------- | --------- |
| `category` | News category    | `general` |
| `q`        | Search keyword   | —         |
| `country`  | Country code     | `in`      |
| `lang`     | Language code    | `en`      |
| `max`      | Maximum articles | `10`      |

---

## Installation:

Install dependencies:
```bash
npm install
```

### Environment Variables: Create a `.env` file:
```env
GNEWS_API_KEY=your_api_key_here
```

Run locally:
```bash
npm run dev
```

The API will be available at:
```text
http://localhost:5000

```
