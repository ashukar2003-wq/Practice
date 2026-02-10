import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// allow requests from React
app.use(cors());
app.use(express.json());

// root route (optional, human-friendly)
app.get("/", (req, res) => {
  res.send("Practice Backend is running 🚀");
});

// API route (machines / React)
app.get("/api/health", (req, res) => {
  res.json({
    message: "Server is successfully running on Render 🚀",
    app: process.env.APP_NAME,
    env: process.env.NODE_ENV
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
