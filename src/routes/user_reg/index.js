const express = require("express");
const { createWriteStream, createReadStream, writeFile, readFile } = require("fs-extra");
const router = express.Router();
const path = require("path");
const { parse } = require("json2csv");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// location of file
const userRegFilePath = path.join(__dirname, "../../data/userRegData.json");

router.get("/", async (req, res) => {  
  let userRegData = await readFile(userRegFilePath);
  userRegData = await JSON.parse(userRegData);
  res.send(userRegData);
});

router.get("/:id", (req, res) => {
  res.send("GET user registration by ID!");
});

router.post("/", async (req, res) => {
  res.send("POST user reg!");
});

router.put("/:id", (req, res) => {
  res.send("PUT user reg!");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE user reg!");
});

module.exports = router;
