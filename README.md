# Nimbus – News Aggregator
Nimbus is a modern news aggregation web application built using React, Node.js, Express.
The backend acts as a secure API layer to fetch real-time news data from NewsAPI, which is then displayed in a clean, modern React UI.

## Features:
- Browse top headlines across multiple categories from a single page.
- Backend-powered API integration (Node + Express)
- Clean, modern, and responsive UI

## Tech Stack
- React.js
- Node.js
- Express.js
- NewsAPI (REST API)

## Future Enhancements
- Search functionality for specific news articles
- Dark mode UI
- Elegant loading progress indicator
- Pagination
- Optional database integration for caching and analytics

---

## Website Preview
<table>
  <tr>
    <td style="border:1px solid #30363d; border-radius:6px; padding:6px;" align="center">
      <img width="1920" height="1080" alt="Screenshot (1980)" src="https://github.com/user-attachments/assets/48b4e550-17f0-454e-a625-9f5914021c41" />
    </td>
    <td style="border:1px solid #30363d; border-radius:6px; padding:6px;" align="center">
      <img width="1920" height="1080" alt="Screenshot (1982)" src="https://github.com/user-attachments/assets/ee79a257-e8f2-49ff-9e2b-b5645170197c" />
    </td>
    <td style="border:1px solid #30363d; border-radius:6px; padding:6px;" align="center">
      <img width="1920" height="1080" alt="Screenshot (1983)" src="https://github.com/user-attachments/assets/9404549f-5be8-4b94-a3b5-857dd5d81bda" />
    </td>
  </tr>
</table>

---

## How to Run Locally:
1. Clone the Repository
   ```bash
   git clone https://github.com/your-username/nimbus-news.git
   cd nimbus-news
2. Install Dependencies
   ```bash
   npm install
3. Setup Environment Variables — Create a .env file inside the backend/ folder and add:
      ```bash
   NEWS_API_KEY=your_newsapi_key_here
  > Get your API key from [NewsAPI](https://newsapi.org/)

4. Start Backend Server
     ```bash
     cd backend
     node server.js
  > Server will start on the configured port (e.g. http://localhost:5000).
5. Start React Frontend — Open a new terminal, go to the project root, then run:
   ```bash
    npm run dev
