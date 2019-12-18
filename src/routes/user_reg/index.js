const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET all users' registration!");
});

router.get("/:id", (req, res) => {
  res.send("GET user registration by ID!");
});

router.post("/", (req, res) => {
  res.send("POST user reg!");
});

router.put("/", (req, res) => {
  res.send("PUT user reg!");
});

router.delete("/", (req, res) => {
  res.send("DELETE user reg!");
});

module.exports = router;
