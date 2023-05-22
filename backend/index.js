const express = require("express");
const { fetchAuth } = require("./app/app");

const PORT = 3000;

const app = express();

app.use(express.json())

app.listen(PORT, () => console.log("START BACKEND SERVER IN PORT " + PORT));

app.get("/", (req, res) => { 
    res.status(200).json("Сервер работает");
})

app.post("/aut-user", (req, res) => { 
    fetchAuth(req)
    res.status(200).json(req.body);
})

