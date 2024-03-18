const express = require('express');
const route = require("./route/author.js");
const logger = require("./route/logger.js")

const app = express();
const PORT = 8000;
const HOST = "localhost";


app.use(logger);

app.use("/Author/", route);


app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

app.listen(PORT, HOST, () => {console.log(`Listening on http://${HOST}:${PORT}`)})