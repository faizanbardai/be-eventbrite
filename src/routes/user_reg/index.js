const express = require("express");
const router = express.Router();
const { writeOnFile } = require("../../helpers/helpers");
const path = require("path");

router.get("/", (req, res) => {
  res.send("GET all users' registration!");
});

router.get("/:id", (req, res) => {
  res.send("GET user registration by ID!");
});

router.post("/", (req, res) => {
  userRegFilePath = path.join(__dirname, "../../data/userRegData.json");
  userRegData = JSON.stringify(req.body);
  writeOnFile(userRegFilePath, userRegData);
  res.send("POST user reg!");
});

router.put("/:id", (req, res) => {
  res.send("PUT user reg!");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE user reg!");
});

module.exports = router;
