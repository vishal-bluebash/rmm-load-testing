# Express.js Event Logging Server

This project is an Express.js server that accepts POST requests on the `/events` route and writes the received event data to a local file (`events.json`). If the file does not exist, it will be created.

## Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd rmm-load-testing
   ```


2. **Install dependencies:**

```sh
npm install
```

3. **Run Server: **

```sh
node server.js
```

4. **Testing:** Use this curl to test

```sh
curl -X POST http://localhost:3000/events -H "Content-Type: application/json" -d '{"name": "Sample Event", "date": "2024-06-26"}'
```
