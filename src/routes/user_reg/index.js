const express = require("express");
const { createWriteStream, createReadStream, writeFile, readFile } = require("fs-extra");
const router = express.Router();
const path = require("path");
const { parse } = require("json2csv");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const uuidv1 = require('uuid/v1');

// location of file
const userRegFilePath = path.join(__dirname, "../../data/userRegData.json");

router.get("/", async (req, res) => {  
  let userRegData = await readFile(userRegFilePath);
  res.send(await JSON.parse(userRegData));
});

router.get("/:id", (req, res) => {
  res.send("GET user registration by ID!");
});

router.post("/", async (req, res) => {
  let userRegData = await readFile(userRegFilePath);
  userRegData = await JSON.parse(userRegData);
  const newUserRegData = {...req.body, id: uuidv1(), createdAt: new Date()};
  userRegData.push(newUserRegData);
  res.send(newUserRegData);
  await writeFile(userRegFilePath, JSON.stringify(userRegData));
});

router.put("/:id", (req, res) => {
  res.send("PUT user reg!");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE user reg!");
});

module.exports = router;
