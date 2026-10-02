# Freelance survey API experiment

A Node.js and Express backend developed as a course exercise around a freelance survey. It serves sample freelancer and job information, maps survey answers to suggested jobs, and stores question records in a local MongoDB database. The `client/` folder is only a minimal fetch experiment, not a finished web interface.

## Run locally

1. Install dependencies with `npm install`.
2. Start MongoDB locally at `mongodb://127.0.0.1:27017/bacass`.
3. Run `npm run server`. The API listens on `http://localhost:7000`.

The server mounts its routes under `/post`, including `GET /post/survey`, `POST /post/`, `GET /post/Getfreelance`, and `GET /post/Getjobs` with survey answer query parameters `a1` through `a6`.

## Scope

The sample freelancer and job data live in `backend/models/`; question records use MongoDB. The minimal `client/style.js` currently fetches port 5000, while the server listens on port 7000, so that client file needs adjustment before it can talk to this backend.
