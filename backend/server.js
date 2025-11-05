const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("Repair Shop API is running ✅");
});

// Example API route
app.get("/api/repairs", (req, res) => {
  res.json([
    { id: 1, device: "iPhone 13", issue: "Screen cracked" },
    { id: 2, device: "MacBook Air", issue: "Battery not charging" },
  ]);
});

// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
