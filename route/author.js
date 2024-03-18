const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
   res.status(200).send(`${req.method} Author`)
})

Router.post("/", (req, res) => {
    res.status(200).send(`${req.method} Author`)
 })

 Router.put("/", (req, res) => {
    res.status(200).send(`${req.method} Author`)
 })

 Router.delete("/", (req, res) => {
    res.status(200).send(`${req.method} Author`)
 })

module.exports = Router;