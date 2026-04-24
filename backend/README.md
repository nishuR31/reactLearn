Fastify backend for ReactLearn

Quick start

1. Copy `.env.example` to `.env` and set `MONGO_URI` and `REDIS_URL`.
2. Install dependencies:

```bash
cd backend
npm install
```

3. Run in dev mode:

```bash
npm run dev
```

Endpoints

- `GET /health` — health check
- `POST /ideas` — { text } creates an idea in Mongo
- `GET /ideas` — list recent ideas

Notes

- Do not commit your real credentials. Use environment variables or platform secrets in deployment.
